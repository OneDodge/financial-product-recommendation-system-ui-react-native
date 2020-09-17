import * as React from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, ScrollView, TextInput, StatusBar } from 'react-native';

// or any pure javascript modules available in npm
import { Card, Title, Paragraph, IconButton, Appbar } from 'react-native-paper';
import { Button, Collection, Icon, Avatar, withTheme, Body } from 'react-native-ios-kit';

export default function HomeScreen() {

  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>ScrollView child component.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '1000',
    backgroundColor: '#ecf0f1',
  }
});
