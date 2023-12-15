"use client";
import React from "react";
import styles from "./favorites.module.scss";

import NotFound from "../_components/NotFound";
import CharacterCard from "../_components/CharacterCard";

import { useAppSelector } from "@/lib/hooks";
import { selectFavorite } from "@/lib/features/favorite/favoriteSlice";

import type { CharacterApiResponseType } from "../types";

const Favorites = () => {
  const favorites = useAppSelector(selectFavorite);
  if (favorites.length < 1) return <NotFound />;

  return (
    <main className={styles.main}>
      {favorites.map((character: CharacterApiResponseType) => (
        <CharacterCard {...character} fullDetail key={character.id} />
      ))}
    </main>
  );
};

export default Favorites;
