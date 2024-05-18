"use client";

import { Icons } from "@/components/Icons";
import GuestBookComments from "./components/GuestBookComments";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { auth, firestore } from "@/core/database/firebase";
import { useGithubSignIn, useGoogleSignIn } from "@/core/hooks/sigin-providers";
import { useDeleteDoc } from "@/core/hooks/useDeleteDoc";
import { convertToEmoji } from "@/core/lib/countryToFlag";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, FormEvent } from "react";
import { toast } from "sonner";
import BentoBox from "@/components/shells/BentoShell";
import CTAButton from "@/components/core/Cta";
import { themeColors } from "@/core/constants/colors";
import Paragraph from "@/components/core/Text";
import BentoTitle from "@/components/shells/BentoTitle";
import { SkeletonGuestbookComments } from "./components/GuestbookSkeleton";

export type GuestbookEntry = {
  id?: string;
  user?: string;
  avatar?: string;
  text?: string;
  timestamp?: any;
  country?: string;
  uniqueId?: string;
};

export default function GuestBookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [newEntry, setNewEntry] = useState("");
  const [signInWithGithub, loadingGithub, errorGithub] = useGithubSignIn();
  const [signInWithGoogle, loadingGoogle, errorGoogle] = useGoogleSignIn();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const user = auth.currentUser;
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry);

  useEffect(() => {
    const entriesRef = collection(firestore, "guestbook");
    const orderedEntriesQuery = query(entriesRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(orderedEntriesQuery, (snapshot) => {
      const fetchedEntries: GuestbookEntry[] = [];
      snapshot.forEach((doc) => {
        const entry = doc.data() as GuestbookEntry;
        entry.id = doc.id;
        fetchedEntries.push(entry);
      });

      setEntries(fetchedEntries);
      setIsLoadingData(false);
    });

    return () => unsubscribe();
  }, []);

  const handleNewEntryChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewEntry(event.target.value);
  };

  const handleNewEntrySubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (newEntry.trim() === "") {
      toast("Entry can't be empty!");
      return;
    }

    const response = await fetch("https://ipapi.co/json/");
    const locationData = await response.json();
    const country = locationData.country_name;

    const entriesRef = collection(firestore, "guestbook");
    const newEntryData: Omit<GuestbookEntry, "id"> = {
      user: user?.displayName || "",
      uniqueId: user?.uid || "",
      avatar: user?.photoURL || "",
      text: newEntry,
      timestamp: serverTimestamp(),
      country: country,
    };

    await addDoc(entriesRef, newEntryData);
    setNewEntry("");
    toast("Entry posted successfully!");
  };

  const handleDeleteEntry = useDeleteDoc(
    "guestbook",
    "Entry deleted successfully!",
    "Error deleting entry!",
  );

  const handleSignIn = async (provider: "github" | "google") => {
    setIsLoading(true);
    try {
      if (provider === "github") {
        await signInWithGithub();
        toast("Signed in successfully with Github!");
      } else if (provider === "google") {
        await signInWithGoogle();
        toast("Signed in successfully with Google!");
      }
    } catch (error) {
      console.error(error);
      toast("Error signing in!");
    } finally {
      setIsLoading(false);
    }
  };

  const totalEntries = entries.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const totalPageArray = Array.from(Array(totalPages).keys());

  return (
    <BentoBox>
      <AnimatePresence>
        <BentoTitle icon={GuestbookIcon()}>Projects</BentoTitle>
        <Paragraph>
          Leave something nice to say (optional, I can handle some criticism).
        </Paragraph>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col gap-2">
            {isLoadingData ? (
              <SkeletonGuestbookComments entriesPerPage={totalEntries} />
            ) : (
              currentEntries.map((entry) => (
                <GuestBookComments
                  key={entry.id}
                  avatarSrc={entry.avatar || null}
                  nameHandle={entry.user ?? ""}
                  message={entry.text || ""}
                  date={
                    entry.timestamp
                      ? entry.timestamp.toDate().toLocaleString()
                      : ""
                  }
                  avatarFallback={"s"}
                  deleteComment={
                    entry.uniqueId === user?.uid
                      ? () => handleDeleteEntry(entry.id ?? "")
                      : undefined
                  }
                  country={convertToEmoji(entry.country || "")}
                  user={""}
                />
              ))
            )}
            {user ? (
              <form
                className="flex flex-col items-start gap-2"
                onSubmit={handleNewEntrySubmit}
              >
                <textarea
                  value={newEntry}
                  onChange={handleNewEntryChange}
                  placeholder="Leave a message"
                  className="flex min-h-[60px] mt-2 w-full rounded-md border border-zinc-600 bg-transparent p-4 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <CTAButton
                  className="mt-2 border-zinc-600!bg-transparent"
                  type="submit"
                >
                  Post entry
                </CTAButton>
              </form>
            ) : (
              <div className="flex flex-col gap-2">
                <h4 className="text-gray-400">
                  Please login in order to leave a message
                </h4>
                <div className="flex sm:items-center gap-2 flex-col sm:flex-row">
                  <CTAButton onClick={() => handleSignIn("github")}>
                    <Icons.github className="mr-2 size-4" />
                    Sign In with Github
                  </CTAButton>
                  <CTAButton onClick={() => handleSignIn("google")}>
                    <Icons.google.bnw
                      className="mr-2 size-4"
                      fill={themeColors.green}
                    />
                    Sign in with Google
                  </CTAButton>
                </div>
              </div>
            )}
            <div>
              <Pagination className="cursor-pointer">
                <PaginationContent>
                  {currentPage !== 1 && (
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage(currentPage - 1)}
                      />
                    </PaginationItem>
                  )}
                  {totalPageArray.map((page) => {
                    if (totalPages <= 1) {
                      return null;
                    }
                    if (
                      page + 1 >= currentPage - 3 &&
                      page + 1 <= currentPage + 3
                    ) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationLink
                            onClick={() => setCurrentPage(page + 1)}
                            isActive={page + 1 === currentPage}
                          >
                            {page + 1}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    } else if (
                      page + 1 === currentPage - 4 ||
                      page + 1 === currentPage + 4
                    ) {
                      return <PaginationEllipsis key={`ellipsis-${page}`} />;
                    } else {
                      return null;
                    }
                  })}
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </BentoBox>
  );

  function GuestbookIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={themeColors.green}
        width={24}
        height={24}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    );
  }
}
