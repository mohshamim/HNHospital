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
        backgroundColor: theme.colors.background, // Use theme background color
    },
    title: {
        fontSize: theme.typography.fontSizes.large, // Use theme for large font size
        fontWeight: theme.typography.fontWeights.bold, // Use theme for bold font weight
        color: theme.colors.textPrimary, // Use theme color
        marginBottom: 20,
    },
    button: {
        backgroundColor: theme.colors.primary, // Use primary color from theme
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: theme.borderRadius.medium, // Use theme's border radius
        marginVertical: 10,
        alignItems: 'center',
        width: '80%', // Make the button take 80% of the screen width
    },
    buttonText: {
        color: theme.colors.white, // Use white color from theme
        fontSize: theme.typography.fontSizes.medium, // Use medium font size from theme
        fontWeight: theme.typography.fontWeights.bold, // Use bold font weight from theme
    },
});

export default DemoScreen;
