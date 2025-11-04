import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/site/Navbar";
import Footer from "../components/site/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "LaunchPad Labs — Build and launch MVPs in 2 weeks",
		template: "%s — LaunchPad Labs",
	},
	description: "We build, ship, and launch investor‑ready MVPs for founders in weeks, not months.",
	metadataBase: new URL("https://launchpad.example.com"),
	openGraph: {
		title: "LaunchPad Labs — Build and launch MVPs in 2 weeks",
		description: "We build, ship, and launch investor‑ready MVPs for founders in weeks, not months.",
		type: "website",
		url: "/",
		locale: "en_US",
		images: [
			{ url: "/next.svg", width: 1200, height: 630, alt: "LaunchPad Labs" },
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "LaunchPad Labs — Build and launch MVPs in 2 weeks",
		description: "We build, ship, and launch investor‑ready MVPs for founders in weeks, not months.",
		images: ["/next.svg"],
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
