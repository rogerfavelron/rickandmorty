import styles from "./characters.module.scss";

import Pagination from "@/app/_components/Pagination";
import CharacterCard from "@/app/_components/CharacterCard";
import Menu from "@/app/_components/Menu";
import NotFound from "@/app/_components/NotFound";

import { CUSTOM_PAGE_SIZE } from "@/app/contstants";

import type { CharacterApiResponseType } from "@/app/types";

const Characters = async ({
  params,
  searchParams,
}: {
  params: { locationId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const locationId = Number(params.locationId);
  //We'll need to change the page for filtering to work correctly
  let page = Number(searchParams?.page) || 1;
  const status = searchParams?.status;

  const locationData = await fetch(
    `${process.env.API_URL}/location/${locationId}`,
    {
      cache: "force-cache",
    }
  );
  const locationResponse = await locationData.json();

  //We are using the characters from the location residents array
  const allCharacterIds = locationResponse.residents.map((resident: string) => {
    const parts = resident.split("/");
    return Number(parts[parts.length - 1]);
  });

  //We need to fetch all characters to be able to filter
  let charactersResponse = [];
  if (allCharacterIds.length > 0) {
    const charactersData = await fetch(
      `${process.env.API_URL}/character/${allCharacterIds.join(",")}`,
      {
        cache: "force-cache",
      }
    );
    charactersResponse = await charactersData.json();
  }

  let filteredCharacters = charactersResponse;

  if (status) {
    filteredCharacters = filteredCharacters.filter(
      (c: CharacterApiResponseType) => c.status.toLocaleLowerCase() === status
    );
    //Reduce the page count to reach the correct one
    while ((page - 1) * CUSTOM_PAGE_SIZE > filteredCharacters.length) {
      page -= 1;
    }
  }

  const pageCount = Math.ceil(filteredCharacters.length / CUSTOM_PAGE_SIZE);

  debugger;
  const slicedCharacters =
    filteredCharacters?.slice(
      (page - 1) * CUSTOM_PAGE_SIZE,
      page * CUSTOM_PAGE_SIZE
    ) || [];

  return (
    <main className={styles.mainContainer}>
      <Menu />
      {slicedCharacters.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <div className={styles.charactersContainer}>
            {slicedCharacters.map((character: CharacterApiResponseType) => (
              <CharacterCard {...character} key={character.id} />
            ))}
          </div>

          <Pagination pageCount={pageCount} initialPage={page} />
        </>
      )}
    </main>
  );
};

export default Characters;
