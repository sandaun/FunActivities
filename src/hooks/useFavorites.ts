import {Activity} from '../types/activityTypes';
import {useAppSelector} from '../app/hooks';
import {selectFavorites} from '../features/selectors';

export const useFavorites = () => {
  const favorites = useAppSelector(selectFavorites);

  const isFavorite = (activity: Activity) =>
    favorites.some(fav => fav.activity === activity.activity);

  return {favorites, isFavorite};
};
