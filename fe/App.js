import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartScreen" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
