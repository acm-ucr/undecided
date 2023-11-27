"use client";
/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathName = usePathname();

  const navigation = RegExp(/dashboard|profile/).test(pathName);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-code-black h-screen`}>
        {navigation && <Navigation />}
        {children}
      </body>
    </html>
  );
}
