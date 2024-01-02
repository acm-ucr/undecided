/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nunito } from "next/font/google";
import Session from "@/components/Session";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-code-black h-screen`}>
        <Session session={session}>{children}</Session>
      </body>
    </html>
  );
}
