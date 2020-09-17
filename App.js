import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { ThemeProvider, TabBar, PageControlView, DefaultTheme, Headline } from 'react-native-ios-kit';
import color from 'color';

const theme = {
  ...DefaultTheme,
  primaryColor: 'tomato',
  primaryLightColor: color('tomato')
    .lighten(0.2)
    .rgb()
    .string(),
  disabledColor: 'yellow',
};

export default function App() {
  const [activeTab, setActiveTab] = React.useState(0);
  if (activeTab === 0) {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.safeView}>
          <View style={styles.screen}>
            <HomeScreen />
            <TabBar tabs={
              [
                {
                  icon: 'ios-paper-outline',
                  title: 'WOWch',
                  onPress: () => setActiveTab(0),
                  isActive: activeTab === 0
                },
                {
                  icon: 'ios-podium',
                  title: 'Alerts',
                  onPress: () => setActiveTab(1),
                  isActive: activeTab === 1
                },
                {
                  icon: 'ios-podium',
                  title: 'Portfolio',
                  onPress: () => setActiveTab(2),
                  isActive: activeTab === 2
                },
                {
                  icon: 'ios-people',
                  title: 'Products',
                  onPress: () => setActiveTab(3),
                  isActive: activeTab === 3
                },
                {
                  icon: 'ios-people',
                  title: 'Friends',
                  onPress: () => setActiveTab(4),
                  isActive: activeTab === 4
                }
              ]}
            />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    );
  } else if (activeTab === 1) {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.safeView}>
          <View style={styles.screen}>
            <Headline>Alerts Tab</Headline>
            <TabBar tabs={
              [
                {
                  icon: 'ios-paper-outline',
                  title: 'WOWch',
                  onPress: () => setActiveTab(0),
                  isActive: activeTab === 0
                },
                {
                  icon: 'ios-podium',
                  title: 'Alerts',
                  onPress: () => setActiveTab(1),
                  isActive: activeTab === 1
                },
                {
                  icon: 'ios-podium',
                  title: 'Portfolio',
                  onPress: () => setActiveTab(2),
                  isActive: activeTab === 2
                },
                {
                  icon: 'ios-people',
                  title: 'Products',
                  onPress: () => setActiveTab(3),
                  isActive: activeTab === 3
                },
                {
                  icon: 'ios-people',
                  title: 'Friends',
                  onPress: () => setActiveTab(4),
                  isActive: activeTab === 4
                }
              ]}
            />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    );
  } else if (activeTab === 2) {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.safeView}>
          <View style={styles.screen}>
            <Headline>Portfolio Tab</Headline>
            <TabBar tabs={
              [
                {
                  icon: 'ios-paper-outline',
                  title: 'WOWch',
                  onPress: () => setActiveTab(0),
                  isActive: activeTab === 0
                },
                {
                  icon: 'ios-podium',
                  title: 'Alerts',
                  onPress: () => setActiveTab(1),
                  isActive: activeTab === 1
                },
                {
                  icon: 'ios-podium',
                  title: 'Portfolio',
                  onPress: () => setActiveTab(2),
                  isActive: activeTab === 2
                },
                {
                  icon: 'ios-people',
                  title: 'Products',
                  onPress: () => setActiveTab(3),
                  isActive: activeTab === 3
                },
                {
                  icon: 'ios-people',
                  title: 'Friends',
                  onPress: () => setActiveTab(4),
                  isActive: activeTab === 4
                }
              ]}
            />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    );
  } else if (activeTab === 3) {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.safeView}>
          <View style={styles.screen}>
            <SearchScreen />
            <TabBar tabs={
              [
                {
                  icon: 'ios-paper-outline',
                  title: 'WOWch',
                  onPress: () => setActiveTab(0),
                  isActive: activeTab === 0
                },
                {
                  icon: 'ios-podium',
                  title: 'Alerts',
                  onPress: () => setActiveTab(1),
                  isActive: activeTab === 1
                },
                {
                  icon: 'ios-podium',
                  title: 'Portfolio',
                  onPress: () => setActiveTab(2),
                  isActive: activeTab === 2
                },
                {
                  icon: 'ios-people',
                  title: 'Products',
                  onPress: () => setActiveTab(3),
                  isActive: activeTab === 3
                },
                {
                  icon: 'ios-people',
                  title: 'Friends',
                  onPress: () => setActiveTab(4),
                  isActive: activeTab === 4
                }
              ]}
            />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    );
  } else if (activeTab === 4) {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.safeView}>
          <View style={styles.screen}>
            <Headline>Friends Tab</Headline>
            <TabBar tabs={
              [
                {
                  icon: 'ios-paper-outline',
                  title: 'WOWch',
                  onPress: () => setActiveTab(0),
                  isActive: activeTab === 0
                },
                {
                  icon: 'ios-podium',
                  title: 'Alerts',
                  onPress: () => setActiveTab(1),
                  isActive: activeTab === 1
                },
                {
                  icon: 'ios-podium',
                  title: 'Portfolio',
                  onPress: () => setActiveTab(2),
                  isActive: activeTab === 2
                },
                {
                  icon: 'ios-people',
                  title: 'Products',
                  onPress: () => setActiveTab(3),
                  isActive: activeTab === 3
                },
                {
                  icon: 'ios-people',
                  title: 'Friends',
                  onPress: () => setActiveTab(4),
                  isActive: activeTab === 4
                }
              ]}
            />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeView: {
    flex: 1,
  },
});
