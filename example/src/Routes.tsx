// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import { DefaultModal, CustomModal, FormModal } from './Modal'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen" mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Default" component={DefaultModal} />
        <Stack.Screen name="Form" component={FormModal} />
        <Stack.Screen name="Custom" component={CustomModal} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;