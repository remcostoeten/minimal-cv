import type { Metadata } from "next";
import "../styles/app.css";
import ProviderWrapper from "@/core/providers/providers";
import PageShell from "@/components/shells/PageShell";

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
                        {children}
                    </PageShell>
                </ProviderWrapper>
            </body>
        </html>
    );
}