import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../styles/style';
import theme from '../styles/theme';

const appointmentsData = [
    {
        id: '1',
        doctor: 'John Mathew',
        specialty: 'Cardiologist',
        hospital: 'International Medical College',
        location: 'Camp, Pune, MAH',
        paymentStatus: 'Full Amount Paid',
        paymentMethod: 'via Bank Transfer',
        date: 'Sep 06 2024',
        time: 'Fri 12:30:25 GMT+0530',
    },
    {
        id: '2',
        doctor: 'John Mathew',
        specialty: 'Cardiologist',
        hospital: 'International Medical College',
        location: 'Camp, Pune, MAH',
        paymentStatus: 'Full Amount Paid',
        paymentMethod: 'via Bank Transfer',
        date: 'Sep 01 2024',
        time: 'Fri 12:30:25 GMT+0530',
    },
    // Add more appointment data as needed
];

const SettledAppointments = () => {
    const renderItem = ({ item }) => (
        <View style={styles.appointmentContainer}>
            <View style={styles.infoContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                    <FontAwesome name='user' size={16} color={theme.colors.seagreen} />
                    <Text style={styles.infoText}>{item.doctor}</Text>
                    <Text style={styles.specialtyText}>{item.specialty}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                    <FontAwesome5 name='hospital' size={16} color={theme.colors.seagreen} />
                    <Text style={styles.infoText}>{item.hospital}</Text>
                    <Text style={styles.locationText}>{item.location}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                    <MaterialCommunityIcons name='credit-card' size={16} color={theme.colors.seagreen} />
                    <Text style={styles.paymentText}>{item.paymentStatus}</Text>
                    <Text style={styles.paymentMethodText}>{item.paymentMethod}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                    <MaterialIcons name='date-range' size={16} color={theme.colors.seagreen} />
                    <Text style={styles.dateText}>{item.date}</Text>
                    <Text style={styles.timeText}>{item.time}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={appointmentsData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 50 }}
        />
    );
};

const MyVisitsScreen = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState('settled'); // State for managing active tab

    return (
        <View style={globalStyles.container}>
            {/* Header */}
            <View style={globalStyles.header}>
                <Ionicons name="arrow-back-outline" size={24} style={globalStyles.headerIcon} onPress={() => navigation.goBack()} />
                <Text style={globalStyles.headerTitle}>My Visits</Text>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name="phone-call" size={24} style={globalStyles.headerIcon} />
                </TouchableOpacity>
            </View>

            {/* Tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => setSelectedTab('settled')}>
                    <Text style={selectedTab === 'settled' ? styles.activeTab : styles.inactiveTab}>Settled Appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTab('upcoming')}>
                    <Text style={selectedTab === 'upcoming' ? styles.activeTab : styles.inactiveTab}>Upcoming Appointments</Text>
                </TouchableOpacity>
            </View>

            {/* List */}
            <ScrollView>
                {selectedTab === 'settled' ? <SettledAppointments /> : <Text>Upcoming Appointments will be shown here.</Text>}
            </ScrollView>
        </View>
    );
};

export default MyVisitsScreen;

const styles = StyleSheet.create({
    appointmentContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: theme.colors.black,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    infoContainer: {
        marginBottom: 10,
    },
    infoText: {
        paddingHorizontal: 5,
        color: theme.colors.seagreen,
        fontSize: 14,
        fontWeight: '500',
    },
    specialtyText: {
        color: theme.colors.lightgreen,
        fontSize: 12,
        fontWeight: '400',
    },
    locationText: {
        color: theme.colors.lightgreen,
        fontSize: 12,
        fontWeight: '400',
    },
    paymentText: {
        color: theme.colors.seagreen,
        fontSize: 14,
        fontWeight: '500',
    },
    paymentMethodText: {
        color: theme.colors.lightgreen,
        fontSize: 12,
        fontWeight: '400',
    },
    dateText: {
        color: theme.colors.seagreen,
        fontSize: 14,
        fontWeight: '500',
    },
    timeText: {
        color: theme.colors.lightgreen,
        fontSize: 12,
        fontWeight: '400',
    },
    detailsButton: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.small,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: theme.colors.background,
    },
    activeTab: {
        color: theme.colors.primary,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.primary,
    },
    inactiveTab: {
        color: theme.colors.textPrimary,
    },
});
