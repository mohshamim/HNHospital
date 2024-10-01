import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import theme from '../styles/theme';  // Import theme for consistent styles

const ProfileCard = ({ firstName, lastName, medicalRecord, contact }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{firstName} {lastName}</Text>
      <Text style={styles.medicalInfo}>Medical Record: {medicalRecord}</Text>
      <Text style={styles.contact}>Contact: {contact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    marginVertical: theme.spacing.small,
    // Apply boxShadow for web; use shadow properties for mobile (iOS/Android)
    ...Platform.select({
      web: {
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      default: {
        shadowColor: theme.shadows.light.shadowColor,
        shadowOffset: theme.shadows.light.shadowOffset,
        shadowOpacity: theme.shadows.light.shadowOpacity,
        shadowRadius: 4,
        elevation: theme.shadows.light.elevation,
      },
    }),
  },
  name: {
    fontSize: theme.typography.fontSizes.large,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  medicalInfo: {
    fontSize: theme.typography.fontSizes.medium,
    color: theme.colors.textSecondary,
  },
  contact: {
    fontSize: theme.typography.fontSizes.small,
    color: theme.colors.textSecondary,
  },
});

export default ProfileCard;
