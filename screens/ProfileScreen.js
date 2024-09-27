import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/style';

const ProfileScreen = ({  }) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.innerContainer}>  
        {/* Header */}
        <View style={globalStyles.header}>
          <Ionicons name="arrow-back-outline" size={24} style={globalStyles.headerIcon} onPress={() => navigation.goBack()} />
          <Text style={globalStyles.headerTitle}>My Profile</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()} >
          <MaterialIcons name="more-vert" size={24} style={globalStyles.headerIcon} />
          </TouchableOpacity>
        </View>

        {/* Profile Picture and Name */}
        <View style={globalStyles.profileInfo}>
          <Image 
            source={require('../assets/arab-man2.webp')} 
            style={globalStyles.profileImage}
          />
          <TouchableOpacity style={globalStyles.editButton}>
          <MaterialIcons name="edit" style={globalStyles.editIcon} />
            <Text style={globalStyles.editText}>Edit</Text>
          </TouchableOpacity>
          <Text style={globalStyles.profileName}>Youssef Amir Al-Saleh</Text>
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
              <MaterialIcons name="edit" size={24} style={globalStyles.headerIcon} />
            </TouchableOpacity>
          </View>
          <View style={globalStyles.infoBox}>
            <Text style={globalStyles.infoTitle}>First name</Text>
            <Text style={globalStyles.infoValue}>Youssef</Text>
          </View>
          <View style={globalStyles.infoBox}>
            <Text style={globalStyles.infoTitle}>Middle name</Text>
            <Text style={globalStyles.infoValue}>Amir</Text>
          </View>
          <View style={globalStyles.infoBox}>
            <Text style={globalStyles.infoTitle}>Last name</Text>
            <Text style={globalStyles.infoValue}>Al-Saleh</Text>
          </View>
          <View style={globalStyles.infoBox}>
            <Text style={globalStyles.infoTitle}>Iqama number</Text>
            <Text style={globalStyles.infoValue}>1234568790</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
