import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import '../styles/app.css';
import TopMenu from "@/components/menu/TopMenu";
import TopmenuTwo from "@/components/menu/TopmenuTwo";

const baj = Bai_Jamjuree({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Remco stoeten - minimal cv",
  description: "A minimal landing page  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baj.className}>
        <TopMenu/>
        <TopmenuTwo/>
        {children}
      </body>
    </html>
  );
}
