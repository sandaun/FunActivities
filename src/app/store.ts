import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from '../features/favoritesSlice';

const store = configureStore({
  reducer: {
    favoriteActivities: favoritesReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
