import React from "react";
import styles from "./location.module.scss";

import Arrow from "../../../public/right-arrow.svg";

import type { LocationType } from "./types";

const Location = ({
  id,
  name,
  type,
  dimension,
  residentCount,
}: LocationType) => {
  return (
    <div className={styles.location} id={String(id)}>
      <div className={styles.info}>
        <div className={styles.infoRow}>
          <span>Name:</span>
          <span>{name}</span>
        </div>
        <div className={styles.infoRow}>
          <span>Type:</span>
          <span>{type}</span>
        </div>
        <div className={styles.infoRow}>
          <span>Dimension:</span>
          <span>{dimension}</span>
        </div>
        <div className={styles.infoRow}>
          <span>Resident Count:</span>
          <span>{residentCount}</span>
        </div>
      </div>
      <span className={styles.button}>
        <Arrow />
      </span>
    </div>
  );
};

export default Location;
