export interface Activity {
  activity: string;
  type: string;
  participants: number;
}

export interface FavoritesState {
  favorites: Activity[];
}
