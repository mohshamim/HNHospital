// navigation/CustomDrawerContent.js
import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../styles/theme';
import globalStyles from '../styles/style';

const CustomDrawerContent = (props) => {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={globalStyles.drawerHeader}>
          <Image
            source={require('../assets/arab-man2.webp')}
            style={globalStyles.drawerProfileImage}
          />
          <View>
            <Text
              numberOfLines={2}
              style={{
                width: 120,
                fontSize: theme.typography.fontSizes.small,
                fontFamily: theme.typography.fontFamily.bold,
              }}
            >
              Youssef Amir Al-Saleh
            </Text>
            <Text
              style={{
                fontSize: theme.typography.fontSizes.xsmall,
                fontFamily: theme.typography.fontFamily.regular,
                lineHeight: theme.typography.lineHeights.small,
              }}
            >
              56565656
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons name="logout" size={20} color={theme.colors.logout} />
            <Text
              style={{
                fontSize: theme.typography.fontSizes.xsmall,
                fontFamily: theme.typography.fontFamily.regular,
                lineHeight: theme.typography.lineHeights.small,
              }}
            >
              Logout
            </Text>
          </View>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '90%',
            borderBottomWidth: 0.5,
            borderColor: theme.colors.primaryBorder,
          }}
        ></View>
        <DrawerItemList {...props} />

        {/* Custom drawer items */}
        {drawerItems.map((item, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              globalStyles.drawerItem,
              pressed && { backgroundColor: theme.colors.lightgreen },
            ]}
            onPress={() => props.navigation.navigate(item.navigateTo)}
          >
            <item.icon name={item.iconName} size={15} color={theme.colors.drawerIcon} />
            <Text style={globalStyles.itemText}>{item.label}</Text>
          </Pressable>
        ))}
      </DrawerContentScrollView>
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: theme.spacing.medium }}>
        <Text>Version 1.1.0</Text>
        <Text>Copyright HNH 2024</Text>
      </View>
    </>
  );
};

// Data for drawer items
const drawerItems = [
  { label: 'My Profile', icon: FontAwesome, iconName: 'user', navigateTo: 'Profile' },
  { label: 'Timeline', icon: MaterialCommunityIcons, iconName: 'timeline', navigateTo: 'Timeline' },
  { label: 'Medical Records', icon: FontAwesome, iconName: 'book', navigateTo: 'Profile' },
  { label: 'Complaints', icon: FontAwesome, iconName: 'warning', navigateTo: 'Fe' },
  { label: 'Visits', icon: FontAwesome5, iconName: 'walking', navigateTo: 'MyVisit' },
  { label: 'Book Appointment', icon: FontAwesome, iconName: 'calendar-plus-o', navigateTo: 'BookAppointmentScreen' },
  { label: 'Follow up', icon: Entypo, iconName: 'chat', navigateTo: 'Profile' },
  { label: 'Change Language', icon: FontAwesome5, iconName: 'globe', navigateTo: 'Profile' },
  { label: 'Other Screens', icon: Entypo, iconName: 'code', navigateTo: 'Demo' },
];

export default CustomDrawerContent;
