import React, { useState } from 'react';
import { View, Text, Pressable, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import theme from '../styles/theme';

const MedicalRecordsScreen = () => {
    const recordsData = [
        {
            month: 'September',
            records: [
                { id: '1', title: 'Chest X-ray Report, Sept 28', doctor: 'Dr. Mabeen Inamdar', specialty: 'Radiology', date: 'Sep 28 2024' },
                { id: '2', title: 'Chest X-ray Report, Sept 21', doctor: 'Dr. Mabeen Inamdar', specialty: 'Radiology', date: 'Sep 21 2024' },
                { id: '3', title: 'Chest X-ray Report, Sept 01', doctor: 'Dr. Mabeen Inamdar', specialty: 'Radiology', date: 'Sep 01 2024' },
            ],
        },
        {
            month: 'August',
            records: [
                { id: '4', title: 'Chest X-ray Report, Aug 18', doctor: 'Dr. Mabeen Inamdar', specialty: 'Radiology', date: 'Aug 18 2024' },
                { id: '5', title: 'Chest X-ray Report, Aug 16', doctor: 'Dr. Mabeen Inamdar', specialty: 'Radiology', date: 'Aug 16 2024' },
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState('Diagnosis');
    const tabs = ['Diagnosis', 'Treatment', 'Prescription', 'Lab Results'];

    const renderRecordItem = ({ item }) => (
        <View style={styles.recordItem}>
            <View style={styles.recordInfo}>
                <Text style={styles.recordTitle}>{item.title}</Text>
                <Text style={styles.recordDoctor}>{item.doctor} • {item.specialty}</Text>
                <Text style={styles.recordDate}>{item.date}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color={theme.colors.textPrimary} />
        </View>
    );

    const renderSection = ({ item }) => (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{item.month}</Text>
            <FlatList
                data={item.records}
                renderItem={renderRecordItem}
                keyExtractor={(record) => record.id}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={24} style={styles.headerIcon} />
                <Text style={styles.headerTitle}>Medical Records</Text>
                <MaterialIcons name="phone" size={24} style={styles.headerIcon} />
            </View>

            {/* Tabs */}
            <View style={styles.tabsContainer}>
                {tabs.map((tab) => (
                    <Pressable
                        key={tab}
                        style={[styles.tabButton, activeTab === tab && styles.activeTab]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                            {tab}
                        </Text>
                    </Pressable>
                ))}
            </View>

            {/* Records List */}
            <ScrollView style={styles.recordsContainer}>
                {recordsData.map((section) => renderSection({ item: section }))}
            </ScrollView>
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
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: theme.colors.background,
    },
    tabButton: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20, // Rounded corners
        backgroundColor: theme.colors.white,
        marginHorizontal: 5, // Spacing between tabs
        minWidth: 100, // Adjusted width for uniformity
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: theme.colors.primary, // Active tab background color
        borderRadius: 20,
        shadowColor: '#000', // Adding shadow for active tab
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    tabText: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textSecondary,
        fontWeight: '600',
    },
    activeTabText: {
        color: theme.colors.white, // Active tab text color
        fontWeight: theme.typography.fontWeights.bold,
    },
    recordsContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },
    sectionContainer: {
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
        color: theme.colors.textPrimary,
        marginBottom: 10,
    },
    recordItem: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    recordInfo: {
        flex: 1,
    },
    recordTitle: {
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
        color: theme.colors.textPrimary,
        marginBottom: 5,
    },
    recordDoctor: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.lightgreen,
        marginBottom: 2,
    },
    recordDate: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textSecondary,
    },
});

export default MedicalRecordsScreen;
