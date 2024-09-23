// components/ProfileCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    shadowColor: theme.shadows.light.shadowColor,
    shadowOffset: theme.shadows.light.shadowOffset,
    shadowOpacity: theme.shadows.light.shadowOpacity,
    elevation: theme.shadows.light.elevation,
    marginVertical: theme.spacing.small,
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
