// RegistrationScreenB.js
import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme';

const RegistrationScreenB = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={24} style={styles.headerIcon} />
                <Text style={styles.headerTitle}>Register User</Text>
            </View>

            {/* OTP Fields */}
            <View style={styles.otpContainer}>
                <Text style={styles.label}>Enter received OTP</Text>
                <View style={styles.otpInputContainer}>
                    {[...Array(4)].map((_, index) => (
                        <TextInput key={index} style={styles.otpInput} maxLength={1} keyboardType="number-pad" />
                    ))}
                </View>
            </View>

            {/* Spacer to push content to the bottom */}
            <View style={{ flex: 1 }} />

            {/* Step Indicator */}
            <View style={styles.stepIndicatorContainer}>
                <Text style={styles.stepText}>Step 2/3</Text>
                <View style={styles.stepBarContainer}>
                    <View style={[styles.stepBar, { backgroundColor: theme.colors.primary }]} />
                    <View style={[styles.stepBar, { backgroundColor: theme.colors.primary }]} />
                    <View style={[styles.stepBar, { backgroundColor: theme.colors.stepper }]} />
                </View>
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <Pressable style={({ pressed }) => [styles.buttonOutline, pressed && { opacity: 0.8 }]}>
                    <Text style={styles.buttonOutlineText}>Resend OTP</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}>
                    <Text style={styles.buttonText}>Verify OTP</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 20,
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
    otpContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textPrimary,
        marginBottom: 10,
    },
    otpInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    otpInput: {
        width: 50,
        height: 50,
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        textAlign: 'center',
        fontSize: theme.typography.fontSizes.medium,
        borderColor: theme.colors.primaryBorder,
        borderWidth: 1,
    },
    stepIndicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    stepText: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textPrimary,
    },
    stepBarContainer: {
        flexDirection: 'row',
        flex: 1,
        marginLeft: 10,
        alignItems: 'center',
    },
    stepBar: {
        height: 4,
        borderRadius: 2,
        flex: 1,
        marginHorizontal: 2,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    buttonOutline: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.large,
        paddingVertical: 15,
        paddingHorizontal: 20,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
    buttonOutlineText: {
        color: theme.colors.primary,
        fontSize: theme.typography.fontSizes.small,
        fontWeight: theme.typography.fontWeights.bold,
    },
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.large,
        paddingVertical: 15,
        paddingHorizontal: 20,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizes.small,
        fontWeight: theme.typography.fontWeights.bold,
    },
});

export default RegistrationScreenB;
