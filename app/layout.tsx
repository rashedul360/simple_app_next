"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import StateManager from "./redux/app/stateManager";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en">
   <StateManager>
    <body className={inter.className}>{children}</body>
   </StateManager>
  </html>
 );
}
