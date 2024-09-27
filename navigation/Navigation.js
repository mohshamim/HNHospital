// navigation/Navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';  // Import icon libraries
import ProfileScreen from '../screens/ProfileScreen';
import ReportsScreen from '../screens/ReportsScreen';
import SearchScreen from '../screens/SearchScreen';
import AlertsScreen from '../screens/AlertsScreen';
import { StatusBar } from 'expo-status-bar';
import CustomDrawerContent from './CustomDrawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const BottomTabs = () => {
  return (
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
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  )
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={BottomTabs} options={{
          drawerItemStyle: { display: 'none' }, // Hide this menu item
        }}  />
      {/* You can add more screens to the Drawer if needed */}
    </Drawer.Navigator>
  );
};

// Stack Navigator to manage both Bottom Tabs and Drawer
const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} /> {/* Ensure this line is correct */}
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#F1F5F9" />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
};

export default Navigation;
