import "./globals.css";
import ThemeProvider from "../components/theme-provider";
import CommandBar from "../components/command-bar";
import PageTransition from "../components/page-transition";

export const metadata = {
  title: "Declassified Enterprise Portfolio",
  description: "Offensive Security Engineer portfolio with mission-ready operations."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100">
        <ThemeProvider>
          <div className="min-h-screen bg-hero-glow">
            <CommandBar />
            <PageTransition>
              <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10">
                {children}
              </div>
            </PageTransition>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
