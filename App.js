import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import HomeScreen from './components/HomeScreen';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { ThemeProvider, TabBar } from 'react-native-ios-kit';

import { PageControlView } from 'react-native-ios-kit';

export default function App() {
  return (
    <TabBar
  tabs={[
    {
      icon: 'ios-paper-outline',
      title: 'WOWch'
    },
    {
      icon: 'ios-podium',
      title: 'Alerts'
    },
    {
      icon: 'ios-star-outline',
      title: 'Portfolio'
    },
    {
      icon: 'ios-people',
      title: 'Products'
    },
    {
      icon: 'ios-people',
      title: 'Friends'
    }
  ]}
/>
  );
}