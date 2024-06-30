import "./globals.scss";
import type { Metadata } from "next";
import {Tajawal } from "next/font/google";
import Nav from "../components/nav";
import UserProvider from "@/context/user";
import Providers from "../components/provider";

const inter = Tajawal({weight:["200" , "300" , "400" , "500" , "700" , "800" , "900"],subsets: ["arabic" , "latin"]});

export const metadata: Metadata = {
  title: "Floona",
  description: "game your life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" className="">
      <body
        className={`${inter.className} bg-day dark:bg-night text-gray-900 dark:text-gray-100 pr-[3.5rem]`}
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
