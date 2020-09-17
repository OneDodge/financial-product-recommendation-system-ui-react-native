import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { withTheme, SearchBar } from 'react-native-ios-kit';

export default function SearchScreen() {

  const [text, setText] = React.useState("");

  return (
    <View style={styles.screen}>
      <SearchBar
        value={text}
        onValueChange={text => setText(text)}
        withCancel
        animated
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});