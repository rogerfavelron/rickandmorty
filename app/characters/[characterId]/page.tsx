import React from "react";
import shuffle from "lodash/shuffle";
import styles from "./character.module.scss";

import CharacterCard from "@/app/_components/CharacterCard";

import type { CharacterApiResponseType } from "@/app/types";

const Character = async ({ params }: { params: { characterId: string } }) => {
  const characterId = Number(params.characterId);

  const characterData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/character/${characterId}`,
    {
      cache: "force-cache",
    }
  );
  const characterResponse = await characterData.json();
  const parts = characterResponse.location.url.split("/");
  const locationId = Number(parts[parts.length - 1]);
  const status = characterResponse.status;

  //We need to find two other characters from the same location with same status
  const locationData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/location/${locationId}`,
    {
      cache: "force-cache",
    }
  );
  const locationResponse = await locationData.json();

  const allCharacterIds = locationResponse.residents.map((resident: string) => {
    const parts = resident.split("/");
    return Number(parts[parts.length - 1]);
  });

  //We need to fetch all characters to be able to filter by status
  let charactersResponse = [];
  if (allCharacterIds.length > 0) {
    const charactersData = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/character/${allCharacterIds.join(
        ","
      )}`,
      {
        cache: "force-cache",
      }
    );
    charactersResponse = await charactersData.json();
    if (!Array.isArray(charactersResponse))
      charactersResponse = [charactersResponse];
  }

  let filteredCharacters = charactersResponse.filter(
    (c: CharacterApiResponseType) => c.status === status && c.id !== characterId
  );

  //Only get the first 2 for random
  filteredCharacters = shuffle(filteredCharacters).slice(0, 2);

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <CharacterCard {...characterResponse} fullDetail />
      </div>

      {filteredCharacters.length > 0 && (
        <div className={styles.others}>
          <div className={styles.title}>Other Characters</div>
          <div className={styles.miniCards}>
            {filteredCharacters.map((c: CharacterApiResponseType) => (
              <CharacterCard {...c} mini key={c.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
