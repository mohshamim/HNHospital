import React, { useState } from 'react';
import { View, Text, Pressable, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/style';
import theme from '../styles/theme';

const MyVisit = () => {
    // State to handle the active tab
    const [activeTab, setActiveTab] = useState('Settled');

    // Sample data for visits
    const visitsData = [
        { id: 1, doctor: 'Dr. John Mathew', specialty: 'Cardiologist', location: 'International Medical College', date: 'Sep 06, 2024', status: 'Full Amount Paid', type: 'Settled' },
        { id: 2, doctor: 'Dr. Jane Doe', specialty: 'Dermatologist', location: 'Health Clinic', date: 'Oct 15, 2024', status: 'Pending Payment', type: 'Upcoming' },
    ];

    const navigation = useNavigation();

    // Function to render each visit item
    const renderVisitItem = ({ item }) => (
        <View style={styles.visitContainer}>
            {/* Doctor Information */}
            <View style={styles.infoRow}>
                <Image source={require('../assets/icons/user-doctor.svg')} style={styles.icon} />
                <Text style={styles.doctorText}>{item.doctor} <Text style={styles.specialtyText}>• {item.specialty}</Text></Text>
            </View>

            {/* Location */}
            <View style={styles.infoRow}>
                <Image source={require('../assets/icons/location.svg')} style={styles.icon} />
                <Text style={styles.locationText}>{item.location} • Camp, Pune, MAH</Text>
            </View>

            {/* Status */}
            <View style={styles.infoRow}>
                <Image source={require('../assets/icons/money.svg')} style={styles.icon} />
                <Text style={styles.statusText}>{item.status} • via Bank Transfer</Text>
            </View>

            {/* Date */}
            <View style={styles.infoRow}>
                <Image source={require('../assets/icons/calendar.svg')} style={styles.icon} />
                <Text style={styles.dateText}>{item.date} • 12:30 PM GMT+0530</Text>
            </View>

            {/* Button and Camera Icon */}
            <View style={styles.buttonContainer}>
                <Pressable style={({ pressed }) => [styles.viewDetailsButton, pressed && { opacity: 0.8 }]}>
                    <Text style={styles.viewDetailsButtonText}>View Details</Text>
                </Pressable>
                <Image source={require('../assets/icons/video-wireless.svg')} style={styles.cameraIcon} />
            </View>
        </View>
    );

    // Filter visits based on the active tab
    const filteredVisits = visitsData.filter(visit => visit.type === activeTab);

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.innerContainer}>
                {/* Header */}
                <View style={globalStyles.header}>
                    <Ionicons name="arrow-back-outline" size={24} style={globalStyles.headerIcon} onPress={() => navigation.goBack()} />
                    <Text style={globalStyles.headerTitle}>My Visits</Text>
                    <Pressable onPress={() => navigation.openDrawer()}>
                        <MaterialIcons name="phone" size={24} style={globalStyles.headerIcon} />
                    </Pressable>
                </View>

                {/* Tabs */}
                <View style={styles.tabContainer}>
                    <Pressable
                        style={[styles.tabButton, activeTab === 'Settled' && styles.activeTab]}
                        onPress={() => setActiveTab('Settled')}
                    >
                        <Text style={[styles.tabText, activeTab === 'Settled' && styles.activeTabText]}>Settled Appointments</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.tabButton, activeTab === 'Upcoming' && styles.activeTab]}
                        onPress={() => setActiveTab('Upcoming')}
                    >
                        <Text style={[styles.tabText, activeTab === 'Upcoming' && styles.activeTabText]}>Upcoming Appointments</Text>
                    </Pressable>
                </View>

                {/* Visit List */}
                <FlatList
                    data={filteredVisits}
                    renderItem={renderVisitItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 50 }}
                    ListEmptyComponent={<Text style={styles.emptyText}>No visits available.</Text>}
                />
            </View>
        </View>
    );
};

export default MyVisit;

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    tabButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: theme.borderRadius.medium,
        backgroundColor: theme.colors.background,
    },
    activeTab: {
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
    tabText: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textSecondary,
    },
    activeTabText: {
        color: theme.colors.primary,
        fontWeight: theme.typography.fontWeights.bold,
    },
    visitContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        ...theme.shadows.light,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    doctorText: {
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
        color: theme.colors.seagreen,
        marginLeft: 5,
    },
    specialtyText: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textSecondary,
    },
    locationText: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textPrimary,
        marginLeft: 5,
    },
    statusText: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textSecondary,
        marginLeft: 5,
    },
    dateText: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textPrimary,
        marginLeft: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    viewDetailsButton: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: theme.borderRadius.small,
        flex: 2, // Adjust width using flex (8/12)
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewDetailsButtonText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizes.small,
        fontWeight: theme.typography.fontWeights.bold,
    },
    cameraIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginLeft: 10,
        flex: 1, // Adjust width using flex (4/12)
    },
    icon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: theme.typography.fontSizes.medium,
        color: theme.colors.textSecondary,
        marginTop: theme.spacing.large,
    },
});
