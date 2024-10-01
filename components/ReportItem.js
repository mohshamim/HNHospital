import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import theme from '../styles/theme';

const ReportItem = ({ reportTitle, reportDate }) => {
  return (
    <View style={styles.reportItem}>
      <Text style={styles.title}>{reportTitle}</Text>
      <Text style={styles.date}>{reportDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  reportItem: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.medium, // Add rounded corners
    marginVertical: theme.spacing.small, // Add vertical margin for spacing between items
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
    // Add shadow for mobile and boxShadow for web
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
  title: {
    fontSize: theme.typography.fontSizes.medium,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  date: {
    fontSize: theme.typography.fontSizes.small,
    color: theme.colors.textSecondary,
  },
});

export default ReportItem;
