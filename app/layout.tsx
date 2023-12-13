import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import styles from "./container.module.scss";

import StoreProvider from "./StoreProvider";

import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Rick and Morty app built with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <Navbar backButton={true} />
          <StoreProvider>{children}</StoreProvider>
        </div>
      </body>
    </html>
  );
}
