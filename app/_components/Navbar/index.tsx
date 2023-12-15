"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./navbar.module.scss";

import BackButtonIcon from "../../../public/back-button.svg";

import type { NavbarType } from "./types";

const Navbar = ({ backButton }: NavbarType) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <nav className={styles.nav}>
      <span className={styles.backButton} onClick={handleClick}>
        {backButton && <BackButtonIcon />}
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
