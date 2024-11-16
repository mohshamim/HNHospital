import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import for the next button icon
import theme from '../styles/theme';

const { width, height } = Dimensions.get('window');

const IntroScreenB = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Section with Doctor List Image */}
      <View style={styles.topSection}>
        <Image
          source={require('../assets/doctors.png')} // Replace with the image that includes all doctors
          style={styles.topImage}
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Search Doctors efficiently</Text>
        <Text style={styles.description}>
          Looking for the right healthcare expert? Our app allows you to easily
          search for doctors by specialty, location, or name. Find the best
          doctors and book your appointments in just a few taps.
        </Text>

        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>

        {/* Navigation Buttons (Back & Next) */}
        <View style={styles.navigationButtonsContainer}>
          {/* Back Button */}
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()} // Navigate back to the previous screen
          >
            <Ionicons name="arrow-back" size={20} color="#97A0AF" />
            {/* Subtle gray arrow icon */}
          </Pressable>

          {/* Next Button */}
          <Pressable
            style={styles.nextButton}
            onPress={() => navigation.navigate('IntroScreenC')} // Navigate to the next screen
          >
            <Ionicons
              name="arrow-forward"
              size={24}
              color={theme.colors.white}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'space-between',
  },
  topSection: {
    flex: 0.6, // Allocate 60% of the screen for the top section
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage: {
    width: width * 0.9, // Make the image 90% of the screen width
    height: height * 0.4, // Adjust the height as per your design
    resizeMode: 'contain', // Adjust to ensure the image is scaled properly
  },
  bottomSection: {
    flex: 0.4, // Allocate 40% of the screen for the bottom section
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.typography.fontSizes.large,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.textPrimary,
    marginBottom: 10,
  },
  description: {
    fontSize: theme.typography.fontSizes.medium,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.lightGray,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: theme.colors.primary,
  },
  navigationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align the buttons to the right side
    alignItems: 'center',
    width: '100%',
    position: 'absolute', // Position at the bottom-right of the screen
    bottom: 30, // Distance from the bottom
    right: 20, // Distance from the right edge
  },
  backButton: {
    backgroundColor: '#F0F4F8', // Light gray background for the back button
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, // Add margin between back and next buttons
  },
  nextButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroScreenB;
