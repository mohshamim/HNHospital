// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Import icons

import globalStyles from '../styles/style';  // Import global styles

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      {/* Header */}
      <View style={globalStyles.header}>
        <FontAwesome name="arrow-left" size={24} color={globalStyles.primary} />
        <Text style={globalStyles.headerTitle}>My Profile</Text>
        <MaterialIcons name="more-vert" size={24} color={globalStyles.primary} />
      </View>

      {/* Profile Picture and Name */}
      <View style={globalStyles.profileInfo}>
        <Image 
 source={require('../assets/arab-man2.webp')} 
          style={globalStyles.profileImage}
        />
        <TouchableOpacity style={globalStyles.editButton}>
          <Text style={globalStyles.editText}>Edit</Text>
        </TouchableOpacity>
        <Text style={globalStyles.profileName}>Olivia Wilson</Text>
        <Text style={globalStyles.addressText}>Address Line Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod - 411048</Text>
      </View>

      {/* Medical Information Section */}
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>Medical Information</Text>
        <View style={globalStyles.infoBox}>
          <Text style={globalStyles.infoTitle}>Medical record number</Text>
          <Text style={globalStyles.infoValue}>501846</Text>
        </View>
      </View>

      {/* Personal Information Section */}
      <View style={globalStyles.section}>
        <View style={globalStyles.sectionHeader}>
          <Text style={globalStyles.sectionTitle}>Personal Information</Text>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={24} color={globalStyles.secondary} />
          </TouchableOpacity>
        </View>
        <View style={globalStyles.infoBox}>
          <Text style={globalStyles.infoTitle}>First name</Text>
          <Text style={globalStyles.infoValue}>Olivia</Text>
        </View>
        <View style={globalStyles.infoBox}>
          <Text style={globalStyles.infoTitle}>Middle name</Text>
          <Text style={globalStyles.infoValue}>John</Text>
        </View>
        <View style={globalStyles.infoBox}>
          <Text style={globalStyles.infoTitle}>Last name</Text>
          <Text style={globalStyles.infoValue}>Wilson</Text>
        </View>
        <View style={globalStyles.infoBox}>
          <Text style={globalStyles.infoTitle}>Iqama number</Text>
          <Text style={globalStyles.infoValue}>1234568790</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
