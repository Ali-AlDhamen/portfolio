import "./globals.css";
import { Space_Mono } from "next/font/google";

const space_mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Ali AlDhamen",
  description: "Software Engineer Based In Saudi Arabia",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "Flutter Developer",
    "React Developer",
    "nextjs",
    "React",
    "Flutter",
    "Saudi Developer",
    "Saudi Arabia",
    "Saudi",
    "tailwindcss",
    "tailwind",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space_mono.className}>{children}</body>
    </html>
  );
}
