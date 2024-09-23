// screens/ReportsScreen.js
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import ReportItem from '../components/ReportItem';
import globalStyles from '../styles/style';

const reports = [
  { id: '1', title: 'Chest X-ray Report', date: 'Sept 28, 2024' },
  { id: '2', title: 'Blood Test Report', date: 'Aug 16, 2024' },
];

const ReportsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Medical Reports</Text>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReportItem reportTitle={item.title} reportDate={item.date} />
        )}
      />
    </View>
  );
};

export default ReportsScreen;
