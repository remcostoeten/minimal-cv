import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonGuestbookComments({ entriesPerPage }) {
  return (
    <>
      {Array.from({ length: entriesPerPage }, (_, index) => (
        <div key={index} className="grid pb-10">
          <div className="flex items-center gap-4 text-sm">
            <Skeleton className="h-10 w-10  rounded-full" />
            <div className="grid gap-1.5">
              <div className="flex items-center gap-2">
                <div>
                  <div className="flex flex-col">
                    <Skeleton className="h-5 w-32 mb-2" />
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-4 w-24 mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
