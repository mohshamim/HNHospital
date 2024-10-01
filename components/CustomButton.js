import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';  // Import the theme

const CustomButton = ({ title, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed // Apply pressed styles when the button is pressed
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    borderRadius: theme.borderRadius.medium,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: theme.colors.primaryDark, // Adjust this color based on your theme for a pressed state
    opacity: 0.8, // Add an opacity effect when the button is pressed
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizes.medium,
    fontWeight: theme.typography.fontWeights.bold,
  },
});

export default CustomButton;
