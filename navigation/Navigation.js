import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileScreen from '../screens/ProfileScreen';
import MedicalRecordsScreen from '../screens/MedicalRecordsScreen';
import BookAppointmentScreen from '../screens/BookAppointmentScreen';
import AlertsScreen from '../screens/AlertsScreen';
import CustomDrawerContent from './CustomDrawer';
import Timeline from '../screens/Timeline';
import MyVisit from '../screens/MyVisit';
import Demo from '../screens/Demo';
import FeedbackScreen from '../screens/FeedbackScreen';
import RegistrationA from '../screens/RegistrationA';
import RegistrationB from '../screens/RegistrationB';
import RegistrationC from '../screens/RegistrationC';
import RegistrationD from '../screens/RegistrationD';
import LoginScreenA from '../screens/LoginScreenA';
import LoginScreenB from '../screens/LoginScreenB';
import VideoConsultationScreen from '../screens/VideoConsultationScreen';
import EnquiryFormScreen from '../screens/EnquiryFormScreen';
import DoctorDetailsScreen from '../screens/DoctorDetailsScreen';
import IntroScreenA from '../screens/IntroScreenA';
import IntroScreenB from '../screens/IntroScreenB';
import IntroScreenC from '../screens/IntroScreenC';
import { clearAll } from '../utils/localStorage';

// Initialize Bottom Tab and Stack Navigators
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppointmentStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="BookAppointmentScreen"
      component={BookAppointmentScreen}
    />
    <Stack.Screen name="DoctorDetailsScreen" component={DoctorDetailsScreen} />
    {/* Include this */}
  </Stack.Navigator>
);

const IntroStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="IntroScreenA" component={IntroScreenA} />
    <Stack.Screen name="IntroScreenB" component={IntroScreenB} />
    <Stack.Screen name="IntroScreenC" component={IntroScreenC} />
    <Stack.Screen name="BT" component={BottomTabs} />
  </Stack.Navigator>
);

// Profile Drawer Navigator
const ProfileDrawerNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Timeline" component={Timeline} />
    <Stack.Screen name="MyVisit" component={MyVisit} />
    <Stack.Screen name="Demo" component={Demo} />
    <Stack.Screen
      name="BookAppointmentScreen"
      component={BookAppointmentScreen}
    />
    <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
    <Stack.Screen name="RegistrationA" component={RegistrationA} />
    <Stack.Screen name="RegistrationB" component={RegistrationB} />
    <Stack.Screen name="RegistrationC" component={RegistrationC} />
    <Stack.Screen name="RegistrationD" component={RegistrationD} />
    <Stack.Screen name="LoginScreenA" component={LoginScreenA} />
    <Stack.Screen name="LoginScreenB" component={LoginScreenB} />
    <Stack.Screen
      name="VideoConsultationScreen"
      component={VideoConsultationScreen}
    />
    <Stack.Screen name="EnquiryFormScreen" component={EnquiryFormScreen} />
    <Stack.Screen name="IntroScreenA" component={IntroScreenA} />
    <Stack.Screen name="IntroScreenB" component={IntroScreenB} />
    <Stack.Screen name="IntroScreenC" component={IntroScreenC} />
  </Stack.Navigator>
);
// Drawer Navigation
const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="BookAppointmentStack"
      component={AppointmentStackNavigator}
    />
    {/* Add other drawer screens here */}
  </Drawer.Navigator>
);
// Bottom Tabs Navigator
const BottomTabs = () => (
  <Tab.Navigator
    initialRouteName="Profile"
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
      component={AppointmentStackNavigator} // Use Appointment stack
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <Feather name="search" color={color} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="Reports"
      component={MedicalRecordsScreen}
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

// Main Navigation
const Navigation = () => {
  const [showIntro, setShowIntro] = useState(false);
  useEffect(() => {
    (async () => {
      const introFlag = await AsyncStorage.getItem('introFlag');
      if (introFlag) {
        setShowIntro(false);
      } else {
        setShowIntro(true);
      }
    })();
  }, [showIntro]);

  // useEffect(() => {
  //   (async () => {
  //     await clearAll();
  //   })();
  // }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerType: 'front',
          overlayColor: 'rgba(0, 0, 0, 0.7)',
          drawerStyle: {
            height: '100%',
            backgroundColor: '#CBD5E1',
          },
          headerShown: false,
        }}
      >
        {showIntro ? (
          <Drawer.Screen
            name="IntroStackNavigator"
            component={IntroStackNavigator}
            options={{
              drawerItemStyle: { display: 'none' },
            }}
          />
        ) : (
          <Drawer.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{
              drawerItemStyle: { display: 'none' },
            }}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
