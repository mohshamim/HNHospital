import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/style';
import theme from '../styles/theme';

const Timeline = ({ }) => {
    const Data = [1, 2, 3, 4, 5]
    const navigation = useNavigation();
    const renderItem = ({ item, index }) => (
        <View style={styles.mainContainer}>
            <View>
                <View style={styles.stepperCircle} />
                {Data.length != index + 1 && <View style={styles.stepperline} />}
            </View>
            {/* <View style ={styles.infoContainer}> */}
            <View style={styles.infoSubContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                    <FontAwesome5 name='tablets' size={10} color={theme.colors.seagreen} />
                    <Text style={{ left: 5, color: theme.colors.seagreen, fontSize: 10 }}>Prescription</Text>
                </View>
                <View>
                    <Text style={styles.titleText}>Panadol Cold and Flu F.C. Tablets (24 Tabs),
                        Aspirin, Acetaminophen (4 Tabs)</Text>
                </View>
                <View style={{ paddingTop: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name='user' size={13} color={theme.colors.seagreen} />
                        <Text style={{ paddingHorizontal: 5, color: theme.colors.seagreen, fontSize: 12, fontWeight: 500 }}>John Mathew</Text>
                        <Text style={{ color: theme.colors.lightgreen, fontSize: 12, fontWeight: 400 }}>Cardiologist</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name='clock-time-four' size={12} color={theme.colors.seagreen} />
                        <Text style={{ paddingHorizontal: 2, color: theme.colors.seagreen, fontSize: 12, fontWeight: 500 }}>John Mathew</Text>
                        <Text style={{ color: theme.colors.lightgreen, fontSize: 12, fontWeight: 400 }}>Cardiologist</Text>
                    </View>
                </View>
            </View>
            {/* </View> */}
        </View>
    )
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.innerContainer}>
                {/* Header */}
                <View style={globalStyles.header}>
                    <Ionicons name="arrow-back-outline" size={24} style={globalStyles.headerIcon} onPress={() => navigation.goBack()} />
                    <Text style={globalStyles.headerTitle}>Timeline</Text>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} >
                        <Feather name="phone-call" size={24} style={globalStyles.headerIcon} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.toString()}
                    contentContainerStyle={{ paddingBottom: 50 }}
                />
            </View>
        </View>
    );
};

export default Timeline;

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        margin: 16
    },
    stepperCircle: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: theme.colors.stepper,
        top: 10
    },
    stepperline: {
        width: 1,
        height: 110,
        left: 10,
        borderRadius: 10,
        backgroundColor: theme.colors.stepper,
        top: 25
    },
    infoContainer: {
        flex: 1,
        marginLeft: 20,
    },
    infoSubContainer: {
        width: '100%',
        borderRadius: 15,
        backgroundColor: theme.colors.white,
        padding: 15,
        flex: 1,
        marginLeft: 20,
    },
    titleText: {
        fontSize: theme.typography.fontSizes.small,
        fontFamily: theme.typography.fontFamily.regular,
        fontWeight: theme.typography.fontWeights.regular,
        lineHeight: theme.typography.lineHeights.xsmall
    }
})
