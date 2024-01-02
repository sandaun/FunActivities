import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store, persistor} from './src/app/store';
import {PersistGate} from 'redux-persist/integration/react';
import TabNavigator from './src/navigation/TabNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
