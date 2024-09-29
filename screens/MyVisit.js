import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import globalStyles from '../styles/style';
import theme from '../styles/theme';

const MyVisit = () => {
    const [activeTab, setActiveTab] = useState('Settled');

    // Sample Data
    const settledAppointments = [1, 2, 3];
    const upcomingAppointments = [4, 5];

    const renderAppointmentCard = ({ item }) => (
        <View style={styles.cardContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                <MaterialCommunityIcons name="account" size={18} color={theme.colors.seagreen} />
                <Text style={styles.cardTitle}>John Mathew</Text>
                <Text style={styles.cardSubtitle}>Cardiologist</Text>
            </View>
            <Text style={styles.cardDetails}>International Medical College • Camp, Pune, MAH</Text>
            <Text style={styles.cardDetails}>Full Amount Paid • via Bank Transfer</Text>
            <Text style={styles.cardDetails}>Sep 06 2024 • 12:30 PM GMT+0530</Text>
            <TouchableOpacity style={styles.viewDetailsButton}>
                <Text style={styles.viewDetailsButtonText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={globalStyles.container}>
            {/* Header */}
            <View style={globalStyles.header}>
                <Ionicons name="arrow-back-outline" size={24} style={globalStyles.headerIcon} onPress={() => navigation.goBack()} />
                <Text style={globalStyles.headerTitle}>My Visits</Text>
                <TouchableOpacity onPress={() => { /* Add Action Here */ }}>
                    <MaterialCommunityIcons name="reload" size={24} style={globalStyles.headerIcon} />
                </TouchableOpacity>
            </View>

            {/* Tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 'Settled' && styles.activeTab]}
                    onPress={() => setActiveTab('Settled')}
                >
                    <Text style={[styles.tabText, activeTab === 'Settled' && styles.activeTabText]}>Settled Appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 'Upcoming' && styles.activeTab]}
                    onPress={() => setActiveTab('Upcoming')}
                >
                    <Text style={[styles.tabText, activeTab === 'Upcoming' && styles.activeTabText]}>Upcoming Appointments</Text>
                </TouchableOpacity>
            </View>

            {/* Appointment List */}
            <FlatList
                data={activeTab === 'Settled' ? settledAppointments : upcomingAppointments}
                renderItem={renderAppointmentCard}
                keyExtractor={(item) => item.toString()}
                contentContainerStyle={{ paddingBottom: 50 }}
            />
        </View>
    );
};

export default MyVisit;

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.stepper,
    },
    tabButton: {
        paddingVertical: 10,
        width: '50%',
        alignItems: 'center',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.primary,
    },
    tabText: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textSecondary,
    },
    activeTabText: {
        color: theme.colors.primary,
        fontWeight: theme.typography.fontWeights.bold,
    },
    cardContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        ...theme.shadows.light,
    },
    cardTitle: {
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
        color: theme.colors.seagreen,
        marginLeft: 5,
    },
    cardSubtitle: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.lightgreen,
        marginLeft: 10,
    },
    cardDetails: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textPrimary,
        marginTop: 5,
    },
    viewDetailsButton: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 10,
        borderRadius: theme.borderRadius.small,
        marginTop: 10,
        alignItems: 'center',
    },
    viewDetailsButtonText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizes.small,
        fontWeight: theme.typography.fontWeights.bold,
    },
});
