import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Guruji Overseas | Overseas Education & Visa Assistance | Rohtak, Haryana",
  description:
    "GURUJI OVERSEAS IMMIGRATION PRIVATE LIMITED - Established in 2022. Expert IELTS & PTE coaching, study abroad counselling, and visa assistance for Canada, UK, Australia, New Zealand, USA, Germany, and Ireland in Rohtak, Haryana.",
  keywords: [
    "Guruji Overseas",
    "Guruji Overseas Immigration Private Limited",
    "IELTS Coaching Rohtak",
    "PTE Preparation Rohtak",
    "Study Abroad Consultant Rohtak",
    "Visa Consultant Rohtak Haryana",
    "Student Visa Assistance",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
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
      className={`${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
