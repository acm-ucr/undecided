"use client";
/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nunito } from "next/font/google";
import Navigation from "@/components/Navigation";
import { usePathname } from "next/navigation";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export default function RootLayout({ children }) {
  const pathName = usePathname();

  const navigation = RegExp(/dashboard|profile|problems/).test(pathName);

  return (
    <html lang="en">
      <body className={`${nunito.className} bg-code-black h-screen`}>
        {navigation && <Navigation />}
        {children}
      </body>
    </html>
  );
}
