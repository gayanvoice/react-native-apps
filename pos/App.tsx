import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './HomeScreen';

const AppNavigator = createStackNavigator({
        Home: {
            screen: HomeScreen,
        },
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
      <AppContainer />
  );
}

