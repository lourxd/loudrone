import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://loudrone.com'),
  title: "loudrone",
  description: "Revolutionizing the way you see the world from above",
  openGraph: {
    images: [
      {
        url: "/banner.jpg",
        width: 630,
        height: 630,
        alt: "banner",
        type: 'image/jpeg',
      }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
