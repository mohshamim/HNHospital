import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import theme from '../styles/theme';
import globalStyles from '../styles/style';

const DoctorDetailsScreen = ({ route, navigation }) => {
  const { doctor } = route.params; // Receiving doctor details
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={globalStyles.container}>
      {/* Header */}
      <View style={globalStyles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          style={globalStyles.headerIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={globalStyles.headerTitle}>Book Appointment</Text>
        <Ionicons
          name="call-outline"
          size={24}
          style={globalStyles.headerIcon}
        />
      </View>

      {/* Doctor Details */}
      <View style={styles.doctorContainer}>
        <Image source={doctor.image} style={styles.doctorImage} />
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.star}>★★★★☆</Text>
        <View style={styles.doctorInfo}>
          <Text style={styles.specialty}>
            {doctor.specialty} • {doctor.distance}
          </Text>
          <Text style={styles.rating}>
            Rated {doctor.rating}/5 • {doctor.reviews}
          </Text>
        </View>
        <Text
          numberOfLines={5}
          style={[
            styles.description,
            { fontWeight: theme.typography.fontWeights.bold },
          ]}
        >
          Description{' '}
          <Text style={styles.description}>{doctor.description}</Text>
        </Text>
      </View>

      {/* Date and Time selection */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Date</Text>
        <Pressable style={styles.inputField}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color={theme.colors.textSecondary}
          />
          <Text style={styles.inputText}>dd / mm / yyyy</Text>
        </Pressable>
      </View>
      <View style={[styles.inputContainer, { marginTop: 20 }]}>
        <Text style={styles.label}>Select Time Slot</Text>
        <Pressable style={styles.inputField}>
          <Ionicons
            name="time-outline"
            size={20}
            color={theme.colors.textSecondary}
          />
          <Text style={styles.inputText}>10:30 AM - 11:00 AM</Text>
        </Pressable>
      </View>
      <View style={styles.checkboxCon}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? theme.colors.primary : undefined}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setChecked(!isChecked)}
        >
          <Text style={styles.paragraph}>Receive updates via SMS</Text>
        </TouchableOpacity>
      </View>
      {/* Confirm Appointment Button */}
      <Pressable style={styles.confirmButton} onPress={() => {}}>
        <Text style={styles.confirmButtonText}>Book Appointment</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  doctorContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  doctorImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginBottom: 10,
    borderColor: theme.colors.primary,
    borderWidth: 3,
  },
  doctorName: {
    fontSize: theme.typography.fontSizes.large,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  doctorInfo: {
    fontSize: theme.typography.fontSizes.medium,
    color: theme.colors.textSecondary,
  },
  specialty: {
    fontSize: theme.typography.fontSizes.small,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.textSecondary,
    marginVertical: 5,
  },
  rating: {
    fontSize: theme.typography.fontSizes.small,
    color: theme.colors.textSecondary,
    fontWeight: theme.typography.fontWeights.medium,
  },
  description: {
    fontSize: theme.typography.fontSizes.small,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.textPrimary,
    textAlign: 'justify',
    marginTop: 20,
    marginHorizontal: 20,
  },
  inputContainer: {
    marginTop: 10,
    // marginBottom: 20,
    paddingHorizontal: 20,
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: theme.borderRadius.semilarge,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  inputText: {
    marginLeft: 10,
    fontSize: theme.typography.fontSizes.small,
    color: theme.colors.textPrimary + '60',
    fontWeight: theme.typography.fontWeights.medium,
  },
  confirmButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.semilarge,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  confirmButtonText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizes.medium,
    fontWeight: theme.typography.fontWeights.medium,
  },
  label: {
    color: theme.colors.primary,
    fontSize: theme.typography.fontSizes.small,
    fontWeight: theme.typography.fontWeights.medium,
  },
  checkboxCon: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 20,
  },
  checkbox: {
    borderRadius: 5,
  },
  paragraph: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.fontSizes.small,
    fontWeight: theme.typography.fontWeights.medium,
  },
  star: {
    color: theme.colors.golden,
    fontSize: theme.typography.fontSizes.large,
  },
});

export default DoctorDetailsScreen;
