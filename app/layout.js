import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { SpotlightBackground } from "@/components/ui/spotlight";
import { personalData } from "@/data/personal";
import "./globals.css";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://heyiamkrishna.vercel.app"),
  title: {
    default: `${personalData.name} | ${personalData.role}`,
    template: `%s | ${personalData.name}`,
  },
  description: personalData.bio,
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Web Developer Portfolio",
  ],
  authors: [{ name: personalData.name }],
  creator: personalData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heyiamkrishna.vercel.app",
    title: `${personalData.name} | ${personalData.role}`,
    description: personalData.bio,
    siteName: `${personalData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} | ${personalData.role}`,
    description: personalData.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="magic-bg font-sans antialiased text-slate-900 dark:text-white selection:bg-neutral-800 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AmbientOrbs />
          <SpotlightBackground />
          <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-20 min-h-dvh flex flex-col justify-between relative pb-28">
            {children}
            <Navbar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}