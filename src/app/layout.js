"use client";
/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const noNavbarPagePaths = ["/register"];

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showNavbar =
    noNavbarPagePaths.filter((path) => path === pathname).length === 0;
  return (
    <html lang="en">
      <body className={`${inter.className} bg-code-black`}>
        {showNavbar && <Navigation />}
        {children}
      </body>
    </html>
  );
}
