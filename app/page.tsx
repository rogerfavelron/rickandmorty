"use client";
import styles from "./page.module.scss";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  selectLocation,
  updateLocationList,
  updateCurrentLocationId,
} from "@/lib/features/location/locationSlice";

export default function Home() {
  // const staticData = await fetch(
  //   `https://rickandmortyapi.com/api/character/?page=1`,
  //   {
  //     cache: "force-cache",
  //   }
  // );
  // const res = await staticData.json();
  // console.log("static data", res);

  const location = useAppSelector(selectLocation);
  // console.log("location", location);
  const dispatch = useAppDispatch();
  return (
    <main className={styles.main}>
      <div>Rick and Morty</div>
    </main>
  );
}
