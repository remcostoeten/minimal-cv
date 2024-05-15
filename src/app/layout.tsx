import type { Metadata } from "next";
import "../styles/app.css";
import ProviderWrapper from "@/core/providers/providers";
import PageShell from "@/components/shells/PageShell";
import Header from "@/components/menu/Header";
import FooterShell from "@/components/shells/FooterShell";
import SiteInProgressNotification from "@/components/effects/InProgressToast";
import { AuthUserProvider } from "@/components/AuthUserProvider.";
import LoginLink from "@/components/auth/LoginLink";

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
        <AuthUserProvider>
          <ProviderWrapper>
            <PageShell>
              <>
              <LoginLink/>
                <Header />
                {children}
                <FooterShell />
                <SiteInProgressNotification />
              </>
            </PageShell>
          </ProviderWrapper>
        </AuthUserProvider>
      </body>
    </html>
  );
}
