import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {getRandomActivity} from '../api/BoredAPI';
import ActivityCard from '../components/ActivityCard';
import {Activity} from '../types/activityTypes';
import {useAppDispatch} from '../app/hooks';
import {toggleFavorite} from '../features/favoritesSlice';
import {useFavorites} from '../hooks/useFavorites';

const HomeScreen: React.FC = () => {
  const [activity, setActivity] = useState<Activity | null>(null);
  const dispatch = useAppDispatch();

  const {favorites} = useFavorites();
  // console.log('favorites2', favorites);

  useEffect(() => {
    fetchActivity();
  }, []);

  const fetchActivity = async () => {
    const data = await getRandomActivity();
    if (data) {
      setActivity(data);
    }
  };

  const handleFavorite = (favoriteActivity: Activity) => {
    dispatch(toggleFavorite(favoriteActivity));
  };

  return (
    // <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {activity ? (
          <ActivityCard activity={activity} onFavorite={handleFavorite} />
        ) : (
          <Text style={styles.loading}>Loading...</Text>
        )}
        <Button title="Get New Activity" onPress={fetchActivity} />
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // safeArea: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
  loading: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
