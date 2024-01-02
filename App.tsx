import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/app/store';
import TabNavigator from './src/navigation/TabNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
