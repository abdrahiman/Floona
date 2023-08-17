import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/nav";
import UserProvider from "@/context/user";
import Providers from "../components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flow",
  description: "game your life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body
        className={`${inter.className} bg-day dark:bg-night text-gray-900 dark:text-gray-100`}
      >
        <Providers>
          <UserProvider>
            <Nav />
            {children}
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
