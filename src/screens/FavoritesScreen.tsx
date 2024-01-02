import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useAppSelector} from '../app/hooks';
import ActivityCard from '../components/ActivityCard';

const FavoritesScreen: React.FC = () => {
  const favorites = useAppSelector(state => state.favoriteActivities.favorites);

  return (
    <View style={styles.content}>
      <FlatList
        data={favorites}
        renderItem={({item}) => <ActivityCard activity={item} />}
        keyExtractor={item => item.activity}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
});

export default FavoritesScreen;
