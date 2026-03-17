import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Western Avenue Pharmacy | Closed-Door Pharmacy for Senior Living",
  description:
    "24/7 pharmacy services, medication management, and same-day delivery to Assisted Living Facilities, RCFEs, Board and Care homes, Hospices, and Home Health providers across Los Angeles.",
  openGraph: {
    title: "Western Avenue Pharmacy | Senior Living Pharmacy Partner",
    description:
      "Owner-operated closed-door pharmacy serving 50+ senior living facilities in Los Angeles. 24/7 pharmacist access, same-day delivery, and comprehensive care.",
    type: "website",
    url: "https://www.westernaverx.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
