
import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import theme from '../styles/theme';

const RegistrationScreenD = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/icons/success.svg')} style={styles.icon} />
            <Text style={styles.successText}>Success!</Text>
            <Text style={styles.messageText}>User account created successfully.</Text>

            {/* Button */}
            <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}>
                <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    successText: {
        fontSize: theme.typography.fontSizes.large,
        color: theme.colors.primary,
        fontWeight: theme.typography.fontWeights.bold,
        marginBottom: 10,
    },
    messageText: {
        fontSize: theme.typography.fontSizes.medium,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.large,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
    },
});

export default RegistrationScreenD;
