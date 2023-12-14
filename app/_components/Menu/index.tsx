"use client";

import React, { MouseEvent } from "react";
import Link from "next/link";
import { useQueryState } from "next-usequerystate";
import cn from "classnames";
import styles from "./menu.module.scss";

import Status from "../Status";

import { statusValues } from "@/app/contstants";

import type { StatusType } from "@/app/types";

const Menu = () => {
  const [status, setStatus] = useQueryState("status", {
    shallow: false,
  });

  const onClickHandler = (event: MouseEvent) => {
    const newStatus = event.currentTarget.id;
    if (newStatus === status) {
      setStatus(null);
    } else {
      setStatus(newStatus);
    }
  };

  return (
    <div className={styles.menu}>
      <div className={styles.top}>
        <span>Filter by status</span>
        <Link href="/favorites">My Favorites</Link>
      </div>
      <div className={styles.filters}>
        {statusValues.map((val: StatusType, index: number) => {
          return (
            <button
              key={index}
              className={cn(styles.option, status === val && styles.active)}
              id={val}
              onClick={onClickHandler}
            >
              <Status type={val} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
