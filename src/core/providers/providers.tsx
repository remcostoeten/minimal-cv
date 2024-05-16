"use client";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ProviderWrapper({ children }) {
  return (
    <HydrationOverlay>
      {children}
      <SpeedInsights />
      <Analytics />
    </HydrationOverlay>
  );
}
