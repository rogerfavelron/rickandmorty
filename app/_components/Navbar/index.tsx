"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import styles from "./navbar.module.scss";

import BackButtonIcon from "../../../public/back-button.svg";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    router.back();
  };

  return (
    <nav className={styles.nav}>
      <span className={styles.backButton} onClick={handleClick}>
        {pathname !== "/locations" && <BackButtonIcon />}
      </span>
      <span className={styles.logo}>
        <Image
          src="/logo.png"
          width={240}
          height={70}
          alt="Rick and Morty logo"
          priority={true}
        />
      </span>
    </nav>
  );
};

export default Navbar;
