export type CharacterApiResponseType = {
  id: number;
  name: string;
  status: StatusType;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Origin = {
  name: string;
  url: string;
};

export type Location = {
  name: string;
  url: string;
};

export type StatusType = "dead" | "alive" | "unknown";
