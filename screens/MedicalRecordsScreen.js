import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import theme from '../styles/theme';
import globalStyles from '../styles/style';

const RECORDS_DATA = [
  {
    month: 'September',
    records: [
      {
        id: '1',
        title: 'Chest X-ray Report, Sept 28',
        doctor: 'Dr. Mabeen Inamdar',
        specialty: 'Radiology',
        date: 'Sep 28 2024',
      },
      {
        id: '2',
        title: 'Chest X-ray Report, Sept 21',
        doctor: 'Dr. Mabeen Inamdar',
        specialty: 'Radiology',
        date: 'Sep 21 2024',
      },
      {
        id: '3',
        title: 'Chest X-ray Report, Sept 01',
        doctor: 'Dr. Mabeen Inamdar',
        specialty: 'Radiology',
        date: 'Sep 01 2024',
      },
    ],
  },
  {
    month: 'August',
    records: [
      {
        id: '4',
        title: 'Chest X-ray Report, Aug 18',
        doctor: 'Dr. Mabeen Inamdar',
        specialty: 'Radiology',
        date: 'Aug 18 2024',
      },
      {
        id: '5',
        title: 'Chest X-ray Report, Aug 16',
        doctor: 'Dr. Mabeen Inamdar',
        specialty: 'Radiology',
        date: 'Aug 16 2024',
      },
    ],
  },
];

const MedicalRecordsScreen = () => {
  const [activeTab, setActiveTab] = useState('Diagnosis');
  const tabs = ['Diagnosis', 'Treatment', 'Prescription', 'Lab Results'];

  const renderRecordItem = ({ item, index }) => (
    <>
      <View style={styles.recordItem}>
        <View style={styles.recordInfo}>
          <Text style={styles.recordTitle}>{item.title}</Text>
          <Text style={styles.recordDoctor}>
            {item.doctor} • {item.specialty}
          </Text>
          <Text style={styles.recordDate}>{item.date}</Text>
        </View>
        <Ionicons
          size={20}
          name="chevron-forward-outline"
          color={theme.colors.textPrimary}
        />
      </View>
      {RECORDS_DATA?.length - 1 !== index && <View style={styles.separator} />}
    </>
  );

  const renderSection = ({ item, index }) => (
    <>
      <Text style={styles.sectionTitle}>{item.month}</Text>
      <View style={styles.sectionContainer}>
        <FlatList
          data={item.records}
          renderItem={renderRecordItem}
          keyExtractor={(record) => record.id}
        />
      </View>
    </>
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
        <Text style={globalStyles.headerTitle}>Medical Records</Text>
        <MaterialIcons
          name="search"
          size={24}
          style={globalStyles.headerIcon}
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <Pressable
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Records List */}
      <ScrollView style={styles.recordsContainer}>
        {RECORDS_DATA.map((section) => renderSection({ item: section }))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 20,
    // backgroundColor: theme.colors.white,
    marginHorizontal: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.medium,
    elevation: 3,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  tabText: {
    fontSize: theme.typography.fontSizes.small,
    color: theme.colors.textPrimary,
    fontWeight: '600',
  },
  activeTabText: {
    color: theme.colors.textPrimary, // Active tab text color
    fontWeight: theme.typography.fontWeights.bold,
  },
  recordsContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  sectionContainer: {
    marginVertical: 10,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.semilarge,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSizes.medium,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.textPrimary,
    marginBottom: 10,
  },
  recordItem: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
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
  separator: {
    height: 1,
    backgroundColor: theme.colors.black + '30',
  },
});

export default MedicalRecordsScreen;
