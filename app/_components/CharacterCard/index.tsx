"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
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
    <div className={cn(styles.card, mini && styles.miniCard)}>
      <div className={styles.imageContainer}>
        {!mini && (
          <button className={styles.heart}>
            <Heart color="#ffffff" />
          </button>
        )}
        <Image
          src={image}
          fill
          alt={`${name} image`}
          sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px"
        />
      </div>
      <Link
        href={`/characters/${id}`}
        className={cn(fullDetail && styles.unclickable)}
      >
        <div className={styles.info}>
          <div className={styles.left}>
            <span className={styles.name}>{name}</span>
            {!mini && (
              <span className={styles.statusContainer}>
                <Status type={status} /> - {species}
              </span>
            )}
            {(fullDetail || mini) && (
              <span className={styles.origin}>{origin.name}</span>
            )}
          </div>
          <div
            className={cn(
              fullDetail && styles.detailRight,
              mini && styles.miniRight
            )}
          >
            {!fullDetail && !mini ? (
              <RightArrow />
            ) : (
              <span>
                {type || "No Type"} / {gender}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
