import { CharacterApiResponseType } from "@/app/types";

export interface CharacterCardType extends CharacterApiResponseType {
  mini?: boolean;
  fullDetail?: boolean;
}
