import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { CharacterApiResponseType } from "@/app/types";

interface favoriteState {
  list: Array<CharacterApiResponseType>;
}

const initialState: favoriteState = {
  list: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<CharacterApiResponseType>) => {
      state.list = [...state.list, action.payload];
    },
    removeFavorite: (state, action: PayloadAction<Number>) => {
      const updatedList = [...state.list].filter(
        (char: CharacterApiResponseType) => char.id !== action.payload
      );
      state.list = updatedList;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export const selectFavorite = (state: RootState) => state.favorite.list;

export const isCharacterFavorited = (state: RootState, characterId: number) => {
  return (
    state.favorite.list.filter(
      (char: CharacterApiResponseType) => char.id === characterId
    )?.length > 0
  );
};

export default favoriteSlice.reducer;
