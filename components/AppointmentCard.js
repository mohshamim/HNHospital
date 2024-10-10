import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import theme from '../styles/theme';

const AppointmentCard = ({ doctorName, specialty, appointmentDate, appointmentTime }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.doctorName}>{doctorName}</Text>
      <Text style={styles.specialty}>{specialty}</Text>
      <Text style={styles.appointmentInfo}>
        {appointmentDate} at {appointmentTime}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    marginVertical: theme.spacing.small,

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
  doctorName: {
    fontSize: theme.typography.fontSizes.large,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  specialty: {
    fontSize: theme.typography.fontSizes.medium,
    color: theme.colors.textSecondary,
  },
  appointmentInfo: {
    fontSize: theme.typography.fontSizes.small,
    color: theme.colors.textSecondary,
  },
});

export default AppointmentCard;
