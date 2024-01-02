export interface Activity {
  activity: string;
  type: string;
  participants: number;
  error?: string;
}

export interface FavoritesState {
  favorites: Activity[];
}
