import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [string];
  // we need to modify the api data and convert resident links to ids
}

// Define a type for the slice state
interface locationState {
  currentLocationId: number | undefined;
  list: Array<Location>;
}

// Define the initial state using that type
const initialState: locationState = {
  currentLocationId: undefined,
  list: [],
};

export const locationSlice = createSlice({
  name: "location",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateLocationList: (state, action: PayloadAction<Array<Location>>) => {
      state.list = action.payload;
    },
    updateCurrentLocationId: (state, action: PayloadAction<number>) => {
      state.currentLocationId = action.payload;
    },
  },
});

export const { updateLocationList, updateCurrentLocationId } =
  locationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLocation = (state: RootState) => state.location;

export default locationSlice.reducer;
