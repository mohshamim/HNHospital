// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';  // Import the theme

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
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
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizes.medium,
    fontWeight: theme.typography.fontWeights.bold,
  },
});

export default CustomButton;
