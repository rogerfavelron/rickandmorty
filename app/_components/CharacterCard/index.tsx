"use client";

import React from "react";
import Image from "next/image";
import styles from "./characterCard.module.scss";

import Status from "../Status";

import Heart from "../../../public/heart.svg";
import RightArrow from "../../../public/right-arrow.svg";

import type { CharacterCardType } from "./types";

const CharacterCard = ({
  mini,
  fullDetail,
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  image,
}: CharacterCardType) => {
  return (
    <div className={styles.card} id={String(id)}>
      <div className={styles.imageContainer}>
        <button className={styles.heart}>
          <Heart color="#ffffff" />
        </button>
        <Image
          src={image}
          fill
          alt={`${name} image`}
          sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.left}>
          <span className={styles.name}>{name}</span>
          <span className={styles.statusContainer}>
            <Status type={status} /> - {species}
          </span>
        </div>
        <div className={styles.right}>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
