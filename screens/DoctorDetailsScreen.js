import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme';

const DoctorDetailsScreen = ({ route, navigation }) => {
    const { doctor } = route.params; // Receiving doctor details

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons
                    name="arrow-back-outline"
                    size={24}
                    style={styles.headerIcon}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.headerTitle}>Book Appointment</Text>
                <Ionicons name="call-outline" size={24} style={styles.headerIcon} />
            </View>

            {/* Doctor Details */}
            <View style={styles.doctorContainer}>
                <Image source={doctor.image} style={styles.doctorImage} />
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <View style={styles.doctorInfo}>
                    <Text style={styles.specialty}>{doctor.specialty} • {doctor.distance}</Text>
                    <Text style={styles.rating}>Rated {doctor.rating}/5 • {doctor.reviews}</Text>
                </View>
                <Text style={styles.description}>{doctor.description}</Text>
            </View>

            {/* Date and Time selection */}
            <View style={styles.inputContainer}>
                <Text>Select Date</Text>
                <Pressable style={styles.inputField}>
                    <Ionicons name="calendar-outline" size={20} color={theme.colors.textSecondary} />
                    <Text style={styles.inputText}>dd / mm / yyyy</Text>
                </Pressable>
                <Text>Select Time Slot</Text>
                <Pressable style={styles.inputField}>
                    <Ionicons name="time-outline" size={20} color={theme.colors.textSecondary} />
                    <Text style={styles.inputText}>10:30 AM - 11:00 AM</Text>
                </Pressable>
            </View>

            {/* Confirm Appointment Button */}
            <Pressable style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Book Appointment</Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerIcon: {
        color: theme.colors.textPrimary,
    },
    headerTitle: {
        fontSize: theme.typography.fontSizes.large,
        fontWeight: theme.typography.fontWeights.bold,
        color: theme.colors.textPrimary,
    },
    doctorContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    doctorImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    doctorName: {
        fontSize: theme.typography.fontSizes.large,
        fontWeight: theme.typography.fontWeights.bold,
        color: theme.colors.textPrimary,
        marginBottom: 10,
    },
    doctorInfo: {
        fontSize: theme.typography.fontSizes.medium,
        color: theme.colors.textSecondary,
    },
    specialty: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textSecondary,
        marginVertical: 5,
    },
    rating: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textSecondary,
    },
    description: {
        fontSize: theme.typography.fontSizes.medium,
        color: theme.colors.textPrimary,
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 10,
    },
    inputContainer: {
        marginVertical: 20,
    },
    inputField: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        padding: 15,
        borderRadius: theme.borderRadius.large,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    inputText: {
        fontSize: theme.typography.fontSizes.small,
        marginLeft: 10,
        color: theme.colors.textSecondary,
    },
    confirmButton: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.large,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmButtonText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
    },
});

export default DoctorDetailsScreen;
