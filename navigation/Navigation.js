import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
import ReportsScreen from '../screens/ReportsScreen';
import SearchScreen from '../screens/SearchScreen';
import AlertsScreen from '../screens/AlertsScreen';
import CustomDrawerContent from './CustomDrawer';
import Timeline from '../screens/Timeline';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Bottom Tabs Navigator
const BottomTabs = () => (
  <Tab.Navigator
    initialRouteName="Search"
    screenOptions={{
      tabBarShowLabel: true,
      tabBarStyle: { backgroundColor: '#f8f9fa' },
      tabBarActiveTintColor: '#155E75',
      tabBarInactiveTintColor: '#A0AEC0',
      headerShown: false,
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
      component={ProfileDrawerNavigator}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="person" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

// Profile Drawer Navigator
const ProfileDrawerNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Timeline" component={Timeline} />
  </Stack.Navigator>
);

// Main Navigation
const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerType: 'front',
          overlayColor: 'rgba(0, 0, 0, 0.7)',
          drawerStyle: {
            height: '100%',
            backgroundColor:'#CBD5E1',
          },
          headerShown: false,
        }}
      >
        <Drawer.Screen name="BottomTabs" component={BottomTabs} options={{
      drawerItemStyle: { display: 'none' },
    }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
