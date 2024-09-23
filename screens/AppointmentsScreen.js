// screens/AppointmentsScreen.js
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import AppointmentCard from '../components/AppointmentCard';
import globalStyles from '../styles/style';  // Import global styles

const appointments = [
  { id: '1', doctorName: 'Dr. Ahmed Khan', specialty: 'Cardiologist', appointmentDate: 'Sept 30, 2024', appointmentTime: '10:30 AM' },
  { id: '2', doctorName: 'Dr. Luciana Bowers', specialty: 'Radiologist', appointmentDate: 'Oct 05, 2024', appointmentTime: '11:00 AM' },
];

const AppointmentsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Upcoming Appointments</Text>
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
      />
    </View>
  );
};

export default AppointmentsScreen;
