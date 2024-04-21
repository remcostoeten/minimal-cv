import type { Metadata } from "next";
import "../styles/app.css";
import ProviderWrapper from "@/core/providers/providers";
import PageShell from "@/components/shells/PageShell";
import TopmenuTwo from "@/components/menu/TopmenuTwo";
import FooterShell from "@/components/shells/FooterShell";

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
                            {children}
                            <FooterShell />
                        </>
                    </PageShell>
                </ProviderWrapper>
            </body>
        </html>
    );
}
