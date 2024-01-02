import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HeartIcon from '../assets/heart.svg';
import ActivityIcon from '../assets/activity.svg';
import {RouteProp} from '@react-navigation/native';
import {useFavorites} from '../hooks/useFavorites';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  focused: boolean;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({route, focused}) => {
  const size = 20;
  const color = focused ? 'tomato' : 'gray';

  switch (route.name) {
    case 'Discover':
      return (
        <ActivityIcon width={size} height={size} fill={color} stroke={color} />
      );
    case 'Favorites':
      return (
        <HeartIcon width={size} height={size} fill={color} stroke={color} />
      );
    default:
      return null;
  }
};

const TabNavigator: React.FC = () => {
  const {favorites} = useFavorites();

  const renderTabBarIcon = (
    route: RouteProp<Record<string, object | undefined>, string>,
    focused: boolean,
  ) => {
    return <TabBarIcon route={route} focused={focused} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => renderTabBarIcon(route, focused),
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
      })}>
      <Tab.Screen name="Discover" component={HomeScreen} />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarBadge: favorites?.length || undefined,
          tabBarBadgeStyle: {
            fontSize: 11,
            height: 18,
            minWidth: 18,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
