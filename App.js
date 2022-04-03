import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import Home from './src/screens/Home';
import BottomTabNavigator from './src/navigations/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <BottomTabNavigator/>
    </NavigationContainer>
  );
}
