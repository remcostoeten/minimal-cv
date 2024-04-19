import type { Metadata } from "next";
import "../styles/app.css";
import ProviderWrapper from "@/core/providers/providers";
import { Bai_Jamjuree } from "next/font/google";

const baj = Bai_Jamjuree({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remco Stoeten",
  description: "Minimal landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-bai-jamjuree">
        <ProviderWrapper>
          {children}
        </ProviderWrapper>
      </body>
    </html>
  );
}