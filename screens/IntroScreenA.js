import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import for icons
import theme from '../styles/theme';

const { width, height } = Dimensions.get('window');

const IntroScreenA = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Top Image Section */}
            <View style={styles.topSection}>
                <Image
                    source={require('../assets/rri.png')}  // Replace with your PNG image
                    style={styles.topImage}
                />
            </View>

            {/* Bottom Text Section */}
            <View style={styles.bottomSection}>
                <Text style={styles.title}>Reports & Records</Text>
                <Text style={styles.description}>
                    Access all your medical reports and records in one place. Stay informed about your health with quick and secure access to lab results, prescriptions, and radiology reports—anytime, anywhere.
                </Text>

                {/* Pagination Dots */}
                <View style={styles.paginationContainer}>
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View>

                {/* Navigation Buttons */}
                <View style={styles.navigationButtonsContainer}>
                    {/* Back Button */}
                    <Pressable
                        style={styles.backButton}  // Light gray circular back button
                        onPress={() => navigation.goBack()}  // Go back to the previous screen
                    >
                        <Ionicons name="arrow-back" size={20} color="#97A0AF" />  {/* Subtle gray arrow icon */}
                    </Pressable>

                    {/* Next Button */}
                    <Pressable
                        style={styles.nextButton}  // Dark circular next button
                        onPress={() => navigation.navigate('IntroScreenB')}  // Navigate to the next screen
                    >
                        <Ionicons name="arrow-forward" size={24} color={theme.colors.white} />
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
        justifyContent: 'space-between', // Distribute space between top and bottom sections
    },
    topSection: {
        flex: 0.6, // Allocate 60% of the screen for the top section
        justifyContent: 'flex-end', // Align the image towards the bottom
        alignItems: 'center',
    },
    topImage: {
        width: width * 0.9, // 90% of the screen width
        height: height * 0.4,
        resizeMode: 'contain',
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
        justifyContent: 'flex-end',  // Align buttons to the right
        alignItems: 'center',
        width: '100%',
    },
    backButton: {
        backgroundColor: '#F0F4F8',  // Light gray background for the back button
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,  // Add margin between back and next buttons
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

export default IntroScreenA;
