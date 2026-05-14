import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

// HK Modular is loaded via @font-face in globals.css — add font files to public/fonts/

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRANDX — Design & Technology Studio",
  description:
    "GRANDX is a bold design and technology studio specializing in Brand Identity, Product Design, Web Development, and Mobile App Design.",
  keywords: [
    "brand identity",
    "product design",
    "web design",
    "mobile app design",
    "design agency",
    "GRANDX",
  ],
  openGraph: {
    title: "GRANDX — Design & Technology Studio",
    description:
      "Bold, precise, forward-moving. We build brands and digital experiences that are impossible to forget.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=hk-modular@400,500,700,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
