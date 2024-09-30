// layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StarsCanvas from "./components/main/StarBackground";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "test app",
  description: "test app ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </head>

      <body className={`${geistSans.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
