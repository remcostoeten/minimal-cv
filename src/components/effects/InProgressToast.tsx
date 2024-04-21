"use client";

import useToastPreference from "@/core/hooks/useToastPreference";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";

export default function InProgressToast() {
  const { isToastDismissed, dismissToast } = useToastPreference();

  useEffect(() => {
    const isDismissed = localStorage.getItem("toastDismissed");
    if (!isToastDismissed && !isDismissed) {
      toast(
        "This site is still in beta, might contain bugs and missing content.",
        {
          duration: 7500,
          onDismiss: () => {
            dismissToast();
            localStorage.setItem("toastDismissed", "true");
          },
        },
      );
    }
  }, [isToastDismissed, dismissToast]);

  return (
    <>
      <Toaster closeButton invert />
    </>
  );
}
