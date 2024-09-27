// navigation/Navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';  // Import icon libraries
import ProfileScreen from '../screens/ProfileScreen';
import ReportsScreen from '../screens/ReportsScreen';
import SearchScreen from '../screens/SearchScreen';
import AlertsScreen from '../screens/AlertsScreen';
import { StatusBar } from 'expo-status-bar';
import Layout from './_layout';
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <>
    <StatusBar style="dark" backgroundColor="#F1F5F9" />
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={{
          tabBarShowLabel: true,  // Show the label under the icons
          tabBarStyle: { backgroundColor: '#f8f9fa' },  // Style the tab bar
          tabBarActiveTintColor: '#155E75',  // Color when a tab is active
          tabBarInactiveTintColor: '#A0AEC0',  // Color when a tab is inactive
          headerShown: false, // Hide the default header
        }}
      >
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Reports"
          component={ReportsScreen}
          options={{
            tabBarLabel: 'Reports',
            tabBarIcon: ({ color, size }) => (
              <Feather name="file-text" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Alerts"
          component={AlertsScreen}
          options={{
            tabBarLabel: 'Alerts',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            // headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      <Layout />
    </NavigationContainer>
    </>
  );
};

export default Navigation;