import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trash2Icon } from "lucide-react";
import "firebase/auth";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";
import Seperator from "@/components/shells/Separator";

type GuestbookCommentsProps = {
  avatarSrc: string | null;
  avatarFallback: string;
  nameHandle: string;
  date: string;
  message: string;
  country: string;
  deleteComment?: () => void;
  user?: string | null;
};

export default function GuestBookComments({
  avatarSrc,
  avatarFallback,
  nameHandle,
  date,
  message,
  deleteComment,
  country,
  user,
}: GuestbookCommentsProps & { user: string | null }) {
  return (
    <>
      <div className="grid gap-6">
        <div className="flex items-start gap-4 text-sm">
          <Avatar className="size-10 border">
            <AvatarImage alt={avatarFallback} src={avatarSrc || undefined} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1.5">
            <div className="flex items-center gap-2">
              <div>
                <div className="flex flex-col">
                  <div className="font-semibold text-gray-300">
                    {nameHandle}{" "}
                    <span className="ml-1">{country}</span>
                  </div>

                </div>
                <div className="text-gray-400">{message}</div>
                <time className="text-xs text-gray-500 dark:text-gray-400">
                    {date}
                  </time>
              </div>

              {deleteComment && (
                <button onClick={deleteComment}>
                  <Trash2Icon />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
              <div className="w-full h-[1px] bg-neutral-700"/>
    </>
  );
}
