import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bookmoreleads.agency"),
  title: {
    default: "BOOK MORE LEADS | Automated Lead Generation Engine",
    template: "%s | BOOK MORE LEADS",
  },
  description:
    "Fits seamlessly into your business. Capture and convert high-intent prospects with targeted booking systems and automated lead workflows.",
  keywords: [
    "lead generation",
    "marketing automation",
    "booking systems",
    "local leads",
    "speed to lead",
  ],
  authors: [{ name: "Book More Leads Team" }],
  openGraph: {
    title: "BOOK MORE LEADS | Automated Lead Generation Engine",
    description:
      "Capture and convert high-intent prospects with targeted booking systems and automated lead workflows.",
    url: "https://www.bookmoreleads.agency",
    siteName: "Book More Leads",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOK MORE LEADS | Automated Lead Generation Engine",
    description:
      "Capture and convert high-intent prospects with targeted booking systems and automated lead workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}