import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ReportItem from '../components/ReportItem';
import globalStyles from '../styles/style';
import theme from '../styles/theme';

const reports = [
  { id: '1', title: 'Chest X-ray Report', date: 'Sept 28, 2024' },
  { id: '2', title: 'Blood Test Report', date: 'Aug 16, 2024' },
  // Add more reports as needed
];

const ReportsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.title, styles.header]} accessibilityLabel="Medical Reports">
        Medical Reports
      </Text>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReportItem reportTitle={item.title} reportDate={item.date} />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No reports available.</Text>}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: theme.spacing.medium,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: theme.typography.fontSizes.medium,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.large,
  },
  listContent: {
    paddingBottom: theme.spacing.large,
  },
});

export default ReportsScreen;
