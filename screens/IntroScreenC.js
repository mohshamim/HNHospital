import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import for the next button icon
import theme from '../styles/theme';

const { width, height } = Dimensions.get('window');

const IntroScreenC = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Top Section with Single Image */}
            <View style={styles.topSection}>
                <Image
                    source={require('../assets/vid.png')}  // Single image for video consultation UI
                    style={styles.topImage}
                />
            </View>

            {/* Bottom Section */}
            <View style={styles.bottomSection}>
                <Text style={styles.title}>Video Consultation</Text>
                <Text style={styles.description}>
                    Get expert medical advice from the comfort of your home. With our seamless video consultation feature, you can connect with your doctor virtually, ensuring your healthcare is just a click away.
                </Text>

                {/* Pagination Dots */}
                <View style={styles.paginationContainer}>
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={[styles.dot, styles.activeDot]} />
                </View>

                {/* Navigation Buttons (Back & Next) */}
                <View style={styles.navigationButtonsContainer}>
                    {/* Back Button */}
                    <Pressable
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}  // Go back to the previous screen
                    >
                        <Ionicons name="arrow-back" size={20} color="#97A0AF" />  {/* Subtle gray arrow icon */}
                    </Pressable>

                    {/* Next Button */}
                    <Pressable
                        style={styles.nextButton}
                        onPress={() => navigation.navigate('HomeScreen')}  // Navigate to the home screen
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
        justifyContent: 'space-between',
    },
    topSection: {
        flex: 0.6,  // Allocate 60% of the screen for the top section
        justifyContent: 'center',
        alignItems: 'center',
    },
    topImage: {
        width: width * 0.9,  // Adjust the image width to fit the screen
        height: height * 0.4,  // Adjust the image height
        resizeMode: 'contain',  // Ensure the image scales well within its container
    },
    bottomSection: {
        flex: 0.4,  // Allocate 40% of the screen for the bottom section
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
        justifyContent: 'flex-end',  // Align the buttons to the right side
        alignItems: 'center',
        width: '100%',
        position: 'absolute',  // Position at the bottom-right of the screen
        bottom: 30,  // Distance from the bottom
        right: 20,  // Distance from the right edge
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

export default IntroScreenC;
