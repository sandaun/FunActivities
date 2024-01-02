import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Activity, FavoritesState} from '../types/activityTypes';

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favoriteActivities',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Activity>) => {
      const index = state.favorites.findIndex(
        fav => fav.activity === action.payload.activity,
      );
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const {toggleFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
