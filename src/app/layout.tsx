import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noor Amin - Frontend Engineer",
  description: "Frontend Engineer specializing in React, Next.js, Vue.js and modern web technologies. Available for work.",
  keywords: ["Frontend Engineer", "React", "Next.js", "Vue.js", "JavaScript", "TypeScript"],
  authors: [{ name: "Noor Amin" }],
  openGraph: {
    title: "Noor Amin - Frontend Engineer",
    description: "Frontend Engineer specializing in React, Next.js, Vue.js and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
