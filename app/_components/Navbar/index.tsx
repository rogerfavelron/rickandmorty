import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

import BackButtonIcon from "../../../public/back-button.svg";

import type { NavbarType } from "./types";

const Navbar = ({ backButton }: NavbarType) => {
  return (
    <nav className={styles.nav}>
      <span className={styles.backButton}>
        {backButton && <BackButtonIcon />}
      </span>
      <span className={styles.logo}>
        <Image
          src="/logo.png"
          width={240}
          height={70}
          alt="Rick and Morty logo"
        />
      </span>
    </nav>
  );
};

export default Navbar;
