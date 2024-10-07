import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import theme from '../styles/theme';

const BookAppointmentScreen = () => {
    const [activeDepartment, setActiveDepartment] = useState('Radiology');
    const departments = ['Radiology', 'Cardiology', 'Physical Therapy', 'Gastroenterology'];

    const doctorsData = [
        {
            id: '1',
            name: 'Dr. Ahmed Khan',
            specialty: 'Cardiologist',
            distance: '2.8km away',
            rating: 4.5,
            reviews: '3.1k people',
            image: require('../assets/doctors/doctor1.webp'),
        },
        {
            id: '2',
            name: 'Dr. Luciana Bowers',
            specialty: 'Radiologist',
            distance: '4.5km away',
            rating: 4.0,
            reviews: '4.9k people',
            image: require('../assets/doctors/doctor2.webp'),
        },
        {
            id: '3',
            name: 'Dr. Dakota Simon',
            specialty: 'Neurologist',
            distance: '6.7km away',
            rating: 5.0,
            reviews: '1.3k people',
            image: require('../assets/doctors/doctor1.webp'),
        },
        {
            id: '4',
            name: 'Dr. Reuben Johns',
            specialty: 'Oncologist',
            distance: '8.3km away',
            rating: 4.5,
            reviews: '4.2k people',
            image: require('../assets/doctors/doctor2.webp'),
        },
    ];

    // Function to render the star rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Ionicons
                    key={i}
                    name={i <= rating ? 'star' : 'star-outline'}
                    size={14}
                    color={theme.colors.rating}
                    style={{ marginRight: 2 }}
                />
            );
        }
        return stars;
    };

    const renderDoctorItem = ({ item }) => (
        <View style={styles.doctorCard}>
            <Image source={item.image} style={styles.doctorImage} />
            <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>{item.name}</Text>
                <Text style={styles.doctorSpecialty}>{item.specialty} • {item.distance}</Text>
                <View style={styles.ratingContainer}>
                    {renderStars(item.rating)}
                    <Text style={styles.doctorRating}>{item.rating}/5</Text>
                    <Text style={styles.doctorReviews}> • {item.reviews}</Text>
                </View>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color={theme.colors.textPrimary} />
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={24} style={styles.headerIcon} />
                <Text style={styles.headerTitle}>Book Appointment</Text>
                <MaterialIcons name="search" size={24} style={styles.headerIcon} />
            </View>

            {/* Department Tabs */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                {departments.map((dept) => (
                    <Pressable
                        key={dept}
                        style={[styles.tabButton, activeDepartment === dept && styles.activeTab]}
                        onPress={() => setActiveDepartment(dept)}
                    >
                        <Text style={[styles.tabText, activeDepartment === dept && styles.activeTabText]}>
                            {dept}
                        </Text>
                    </Pressable>
                ))}
            </ScrollView>

            {/* Doctors List */}
            <Text style={styles.sectionTitle}>Doctors available</Text>
            <FlatList
                data={doctorsData}
                renderItem={renderDoctorItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: theme.colors.background,
    },
    headerIcon: {
        color: theme.colors.textPrimary,
    },
    headerTitle: {
        fontSize: theme.typography.fontSizes.large,
        fontWeight: theme.typography.fontWeights.bold,
        color: theme.colors.textPrimary,
    },
    tabsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: theme.colors.background,
    },
    tabButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: theme.colors.white,
        marginHorizontal: 5,
    },
    activeTab: {
        backgroundColor: theme.colors.primary,
    },
    tabText: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textSecondary,
    },
    activeTabText: {
        color: theme.colors.white,
        fontWeight: theme.typography.fontWeights.bold,
    },
    sectionTitle: {
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
        color: theme.colors.textPrimary,
        paddingHorizontal: 15,
        marginTop: 10,
    },
    doctorCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.large,
        padding: 15,
        marginHorizontal: 15,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    doctorImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
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
        color: theme.colors.textSecondary,
        marginBottom: 5,
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
});

export default BookAppointmentScreen;
