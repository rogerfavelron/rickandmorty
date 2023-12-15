import styles from "./locations.module.scss";
import Location from "../_components/Location";
import Pagination from "../_components/Pagination";

export type LocationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
};

const Locations = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const page = Number(searchParams?.page) || 1;

  const locationsData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/location/?page=${page}`,
    {
      cache: "force-cache",
    }
  );
  const res = await locationsData.json();

  return (
    <main className={styles.main}>
      <div className={styles.locationWrapper}>
        {res.results.map((location: LocationType) => {
          return (
            <Location
              id={location.id}
              key={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residentCount={location.residents.length}
            />
          );
        })}
      </div>
      <Pagination pageCount={res.info.pages} />
    </main>
  );
};

export default Locations;
