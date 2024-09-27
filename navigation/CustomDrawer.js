// navigation/CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
            <Text numberOfLines={2} style={{ width: 120, fontSize:theme.typography.fontSizes.small, fontFamily: theme.typography.fontFamily.bold }}>Youssef Amir Al-Saleh</Text>
            <Text style={{fontSize:theme.typography.fontSizes.xsmall, fontFamily: theme.typography.fontFamily.regular, lineHeight: theme.typography.lineHeights.small}}>56565656</Text>
        </View>
        <View>
        <MaterialCommunityIcons name='logout' size={20} color={theme.colors.logout} />
        <Text style={{fontSize:theme.typography.fontSizes.xsmall, fontFamily: theme.typography.fontFamily.regular, lineHeight: theme.typography.lineHeights.small}}>Logout</Text>
        </View>
      </View>
      <View style={{ alignSelf: 'center' ,width: '90%', borderBottomWidth: 0.5, borderColor: theme.colors.primaryBorder}}></View>
      <DrawerItemList {...props} />
      
      {/* Add additional items here */}
      <TouchableOpacity style={globalStyles.drawerItem} onPress={() => props.navigation.navigate('Profile')}>
        <FontAwesome name='user' size={15} color={theme.colors.drawerIcon} />
        <Text style={globalStyles.itemText}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.drawerItem} onPress={() => props.navigation.navigate('Profile')}>
        <MaterialCommunityIcons name='timeline' size={15} color={theme.colors.drawerIcon} />
        <Text style={globalStyles.itemText}>Timeline</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.drawerItem} onPress={() => props.navigation.navigate('Profile')}>
        <FontAwesome name='book' size={15} color={theme.colors.drawerIcon} />
        <Text style={globalStyles.itemText}>Medical Records</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.drawerItem} onPress={() => props.navigation.navigate('Profile')}>
        <FontAwesome name='warning' size={15} color={theme.colors.drawerIcon} />
        <Text style={globalStyles.itemText}>Complaints</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.drawerItem} onPress={() => props.navigation.navigate('Profile')}>
        <FontAwesome5 name='walking' size={15} color={theme.colors.drawerIcon} />
        <Text style={globalStyles.itemText}>Visits</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.drawerItem} onPress={() => props.navigation.navigate('Profile')}>
        <FontAwesome name='calendar-plus-o' size={15} color={theme.colors.drawerIcon} />
        <Text style={globalStyles.itemText}>Book Appointment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.drawerItem} onPress={() => props.navigation.navigate('Profile')}>
        <Entypo name='chat' size={15} color={theme.colors.drawerIcon} />
        <Text style={globalStyles.itemText}>Follow up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.drawerItem} onPress={() => props.navigation.navigate('Profile')}>
        <FontAwesome5 name='globe' size={15} color={theme.colors.drawerIcon} />
        <Text style={globalStyles.itemText}>Change Language</Text>
      </TouchableOpacity>
      {/* Add more custom items as needed */}

    </DrawerContentScrollView>
    <View style={{ justifyContent:'center', alignItems:'center', padding:theme.spacing.medium}}>
        <Text>Version 1.1.0</Text>
        <Text>Copyright HNH 2024</Text>
    </View>
    </>
  );
};


export default CustomDrawerContent;
