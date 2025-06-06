import type { Metadata } from "next";
import App from "@/app/page"
import "./globals.css";

export const metadata: Metadata = {
  title: "Johannes Tampere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#EEF0F2] text-[#7c7e77]">
        {children}
      </body>
    </html>
  );
}