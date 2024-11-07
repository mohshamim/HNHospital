import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Entypo, Ionicons, Octicons, FontAwesome6 } from '@expo/vector-icons';

import theme from '../styles/theme';
import globalStyles from '../styles/style';

const DEPARTMENTS = [
  'Radiology',
  'Cardiology',
  'Physical Therapy',
  'Gastroenterology',
];

const DOCTORS_DATA = [
  {
    id: '1',
    name: 'Dr. Ahmed Khan',
    specialty: 'Cardiologist',
    distance: '2.8km away',
    rating: 4.5,
    reviews: '3.1k people',
    description: 'Description about Dr. Ahmed Khan...',
    image: require('../assets/doctors/doctor1.webp'),
  },
  {
    id: '2',
    name: 'Dr. Luciana Bowers',
    specialty: 'Radiologist',
    distance: '4.5km away',
    rating: 4.0,
    reviews: '4.9k people',
    description: 'Description about Dr. Luciana Bowers...',
    image: require('../assets/doctors/doctor2.webp'),
  },
  // Add more doctor data...
];

const BookAppointmentScreen = () => {
  const [activeDepartment, setActiveDepartment] = useState('Radiology');
  const navigation = useNavigation(); // Initialize navigation

  // Function to render the star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={'star'}
          size={14}
          color={i <= rating ? '#FFD700' : theme.colors.black + '50'}
          style={{ marginRight: 2 }}
        />
      );
    }
    return stars;
  };

  const renderDoctorItem = ({ item }) => (
    <Pressable
      style={styles.doctorCard}
      onPress={() =>
        navigation.navigate('DoctorDetailsScreen', { doctor: item })
      } // Navigate to DoctorDetailsScreen
    >
      <Image source={item.image} style={styles.doctorImage} />
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text style={styles.doctorSpecialty}>
          {item.specialty}
          {'  '} •{'  '} {item.distance}
        </Text>
        <View style={styles.ratingContainer}>
          {renderStars(item.rating)}
          <Text style={styles.doctorRating}>{item.rating}/5</Text>
          <Text style={styles.doctorReviews}>
            {' '}
            {'  '}•{'  '}
            {item.reviews}
          </Text>
        </View>
      </View>
      <Entypo name="chevron-right" size={25} color={theme.colors.textPrimary} />
    </Pressable>
  );

  return (
    <View style={globalStyles.container}>
      {/* Header */}
      <View style={globalStyles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          style={globalStyles.headerIcon}
        />
        <Text style={globalStyles.headerTitle}>Book Appointment</Text>
        <Octicons name="search" size={24} style={globalStyles.headerIcon} />
      </View>

      {/* Department Tabs */}
      <Text style={styles.sectionTitle}>Department</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabsContainer}
        contentContainerStyle={styles.tabsContainerStyle}
      >
        {DEPARTMENTS.map((dept) => (
          <Pressable
            key={dept}
            style={[
              styles.tabButton,
              activeDepartment === dept && styles.activeTab,
            ]}
            onPress={() => setActiveDepartment(dept)}
          >
            <Text
              style={[
                styles.tabText,
                activeDepartment === dept && styles.activeTabText,
              ]}
            >
              {dept}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Doctors List */}
      <Text style={styles.sectionTitle}>Doctors available</Text>
      <FlatList
        data={DOCTORS_DATA}
        renderItem={renderDoctorItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainerStyle: {
    paddingRight: 15,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: theme.colors.background,
    maxHeight: 55,
  },
  tabButton: {
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: theme.colors.white,
    marginHorizontal: 5,
    height: 40,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activeTab: {
    backgroundColor: theme.colors.primary,
  },
  tabText: {
    fontSize: theme.typography.fontSizes.small,
    color: theme.colors.textSecondary,
    fontWeight: theme.typography.fontWeights.bold,
  },
  activeTabText: {
    color: theme.colors.white,
    fontWeight: theme.typography.fontWeights.bold,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSizes.medium,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.textPrimary,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 5,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.large,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  doctorImage: {
    width: 65,
    height: 65,
    borderRadius: 100,
    marginRight: 15,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: theme.typography.fontSizes.medium,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  doctorSpecialty: {
    fontSize: theme.typography.fontSizes.small,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.textPrimary + '90',
    marginBottom: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorRating: {
    fontSize: theme.typography.fontSizes.small,
    color: theme.colors.rating,
    marginLeft: 5,
  },
  doctorReviews: {
    fontSize: theme.typography.fontSizes.small,
    color: theme.colors.textSecondary,
  },
  listContainerStyle: {
    paddingBottom: 20,
  },
});

export default BookAppointmentScreen;
