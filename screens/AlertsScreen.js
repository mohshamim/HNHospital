// screens/AlertsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlertsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Alerts Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default AlertsScreen;