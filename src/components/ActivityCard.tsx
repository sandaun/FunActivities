import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Activity} from '../types/activityTypes';
import {useAppDispatch} from '../app/hooks';
import {toggleFavorite} from '../features/favoritesSlice';
import {useFavorites} from '../hooks/useFavorites';
import HeartIcon from '../assets/heart.svg';

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
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{activity.activity}</Text>
        <TouchableOpacity onPress={handleToggleFavorite}>
          <HeartIcon
            width={20}
            height={20}
            fill={isFavorite(activity) ? 'tomato' : 'transparent'}
            stroke={'tomato'}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.info}>Type: {activity.type}</Text>
      <Text style={styles.info}>Participants: {activity.participants}</Text>
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
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  info: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
});

export default ActivityCard;
