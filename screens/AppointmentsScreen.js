import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import AppointmentCard from '../components/AppointmentCard';
import globalStyles from '../styles/style';  // Import global styles
import theme from '../styles/theme'; // Import theme for consistent styling

const appointments = [
  { id: '1', doctorName: 'Dr. Ahmed Khan', specialty: 'Cardiologist', appointmentDate: 'Sept 30, 2024', appointmentTime: '10:30 AM' },
  { id: '2', doctorName: 'Dr. Luciana Bowers', specialty: 'Radiologist', appointmentDate: 'Oct 05, 2024', appointmentTime: '11:00 AM' },
  // Add more appointments as needed
];

const AppointmentsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.title, styles.header]}>Upcoming Appointments</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AppointmentCard
            doctorName={item.doctorName}
            specialty={item.specialty}
            appointmentDate={item.appointmentDate}
            appointmentTime={item.appointmentTime}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No upcoming appointments.</Text>
        )}
        contentContainerStyle={styles.listContent} // Add padding to FlatList
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

export default AppointmentsScreen;
