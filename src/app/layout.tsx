import type { Metadata } from "next";
import "../styles/app.css";
import ProviderWrapper from "@/core/providers/providers";
import PageShell from "@/components/shells/PageShell";
import TopmenuTwo from "@/components/menu/TopmenuTwo";
import TopMenu from "@/components/menu/TopMenu";
import TopMenuThree from "@/components/menu/TopMenuThree";

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
        <html lang="en" suppressHydrationWarning>
            <body className="bg-body">
                <ProviderWrapper>
                    <PageShell>
                        <>
                            <TopmenuTwo />
                            {children}</>
                    </PageShell>
                </ProviderWrapper>
            </body>
        </html>
    );
}