import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme';

const LoginScreenA = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Ionicons name="arrow-back-outline" size={24} style={styles.headerIcon} />
                    <Text style={styles.headerTitle}>Login User</Text>
                </View>

                {/* Input Fields */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Iqama number</Text>
                    <TextInput style={styles.input} placeholder="1234567890" placeholderTextColor={theme.colors.textSecondary} />

                    <Text style={styles.label}>Contact number</Text>
                    <View style={styles.contactInputContainer}>
                        <Text style={styles.countryCode}>+966</Text>
                        <TextInput
                            style={[styles.input, { flex: 1 }]}
                            placeholder="12-345-6789"
                            placeholderTextColor={theme.colors.textSecondary}
                        />
                    </View>
                </View>

                {/* Instruction Text */}
                <View style={styles.instructionContainer}>
                    <Ionicons name="information-circle-outline" size={20} color={theme.colors.textSecondary} />
                    <Text style={styles.instructionText}>
                        Enter the contact number registered with the Iqama and ensure the device is accessible to receive the OTP for
                        successful user login.
                    </Text>
                </View>
            </ScrollView>

            {/* Button */}
            <View style={styles.buttonContainer}>
                <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}>
                    <Text style={styles.buttonText}>Receive OTP</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 100, // Add padding to prevent content from being hidden behind the button
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerIcon: {
        color: theme.colors.textPrimary,
        marginRight: 10,
    },
    headerTitle: {
        fontSize: theme.typography.fontSizes.large,
        fontWeight: theme.typography.fontWeights.bold,
        color: theme.colors.textPrimary,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textPrimary,
        marginBottom: 5,
    },
    input: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        padding: 10,
        fontSize: theme.typography.fontSizes.small,
        borderColor: theme.colors.primaryBorder,
        borderWidth: 1,
        marginBottom: 10,
    },
    contactInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryCode: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        padding: 10,
        fontSize: theme.typography.fontSizes.small,
        borderColor: theme.colors.primaryBorder,
        borderWidth: 1,
        marginRight: 10,
    },
    instructionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    instructionText: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textSecondary,
        marginLeft: 10,
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: theme.colors.background,
    },
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.large,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
    },
});

export default LoginScreenA;
