// components/ReportItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
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
