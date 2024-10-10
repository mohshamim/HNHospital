import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../styles/theme'; // Assuming you have a theme file

const DemoScreen = () => {
    const navigation = useNavigation();

    const buttons = [
        { title: 'REGISTRATION A', route: 'RegistrationA' },
        { title: 'REGISTRATION B', route: 'RegistrationB' },
        { title: 'REGISTRATION C', route: 'RegistrationC' },
        { title: 'REGISTRATION D', route: 'RegistrationD' },
        { title: 'LOGIN A', route: 'LoginScreenA' },
        { title: 'LOGIN B', route: 'LoginScreenB' },
        { title: 'VIDEO CONSULATION ', route: 'VideoConsultationScreen' },
        { title: 'ENQUIRY FORM ', route: 'EnquiryFormScreen' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Other Screens</Text>

            {buttons.map((button, index) => (
                <Pressable
                    key={index}
                    style={({ pressed }) => [
                        styles.button,
                        pressed && { backgroundColor: theme.colors.secondary },
                    ]}
                    onPress={() => navigation.navigate(button.route)}
                >
                    <Text style={styles.buttonText}>{button.title}</Text>
                </Pressable>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: theme.colors.background,
    },
    title: {
        fontSize: theme.typography.fontSizes.large,
        fontWeight: theme.typography.fontWeights.bold,
        color: theme.colors.textPrimary,
        marginBottom: 20,
    },
    button: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: theme.borderRadius.medium,
        marginVertical: 10,
        alignItems: 'center',
        width: '80%',
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
    },
});

export default DemoScreen;
