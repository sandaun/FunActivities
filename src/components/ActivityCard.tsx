import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Activity} from '../types/activityTypes';
import {useAppDispatch} from '../app/hooks';
import {toggleFavorite} from '../features/favoritesSlice';
import {useFavorites} from '../hooks/useFavorites';

type Props = {
  activity: Activity;
  onFavorite?: (activity: Activity) => void;
};

const ActivityCard: React.FC<Props> = ({activity}) => {
  const dispatch = useAppDispatch();
  const {isFavorite} = useFavorites();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(activity));
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{activity.activity}</Text>
      <Text style={styles.info}>Type: {activity.type}</Text>
      <Text style={styles.info}>Participants: {activity.participants}</Text>
      <Button
        title={isFavorite(activity) ? 'Unfavorite' : 'Favorite'}
        onPress={handleToggleFavorite}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
});

export default ActivityCard;
