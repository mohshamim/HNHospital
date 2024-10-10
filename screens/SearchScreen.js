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
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.typography.fontSizes.large,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
});

export default SearchScreen;
