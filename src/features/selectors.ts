import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

export const selectFavorites = (state: RootState) =>
  state.favoriteActivities.favorites;

export const selectFavoriteCount = createSelector(
  [selectFavorites],
  favorites => favorites.length,
);
