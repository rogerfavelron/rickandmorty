"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import styles from "./characterCard.module.scss";

import Status from "../Status";

import { useCustomSelector, useAppDispatch } from "@/lib/hooks";
import { isCharacterFavorited } from "@/lib/features/favorite/favoriteSlice";

import Heart from "../../../public/heart.svg";
import RightArrow from "../../../public/right-arrow.svg";
import {
  addFavorite,
  removeFavorite,
} from "@/lib/features/favorite/favoriteSlice";

import type { CharacterCardType } from "./types";
import type { RootState } from "@/lib/store";

const CharacterCard = (props: CharacterCardType) => {
  const {
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
  } = props;

  const dispatch = useAppDispatch();
  const isFavorited = useCustomSelector((state: RootState) =>
    isCharacterFavorited(state, id)
  );

  const favoriteHandler = () => {
    if (mini) return;
    if (isFavorited) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite({ ...props }));
    }
  };

  return (
    <div className={cn(styles.card, mini && styles.miniCard)}>
      <div className={styles.imageContainer} onClick={favoriteHandler}>
        {!mini && (
          <button className={styles.heart}>
            <Heart color={isFavorited ? "#d90429" : "#ffffff"} />
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
        className={cn(fullDetail && styles.fullDetailInfoWrapper)}
      >
        <div className={cn(styles.info, fullDetail && styles.fullDetailInfo)}>
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
