import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const font = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minh's Cloud Resume",
  description: "hehe...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
      rel="icon"
      href="/logo/portraitlogo.svg"
      type="image/<generated>"
      sizes="<generated>"
    />
      <body className={font.className} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

