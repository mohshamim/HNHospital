import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme'; // Import the theme

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityLabel="Search Screen">
        Search Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background, // Use theme for background color
  },
  title: {
    fontSize: theme.typography.fontSizes.large, // Use theme for font size
    fontWeight: theme.typography.fontWeights.bold, // Use theme for font weight
    color: theme.colors.textPrimary, // Use theme for text color
  },
});

export default SearchScreen;
