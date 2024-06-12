import type { Metadata } from "next";
import { MonsterContextProvider } from "@/context/monsterContext";
// import { Inter } from "next/font/google";
// import "./globals.css";

export const metadata: Metadata = {
  title: "smash or SMASH",
  description: "A monster dating game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MonsterContextProvider>
    <html lang="en">
      <body>{children}</body>
    </html>
    </MonsterContextProvider>
  );
}
