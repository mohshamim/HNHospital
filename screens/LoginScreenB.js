import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme';

const LoginScreenB = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={24} style={styles.headerIcon} />
                <Text style={styles.headerTitle}>Login User</Text>
            </View>

            {/* OTP Input */}
            <View style={styles.otpContainer}>
                <Text style={styles.otpLabel}>Enter received OTP</Text>
                <View style={styles.otpInputRow}>
                    {Array(4).fill().map((_, index) => (
                        <TextInput
                            key={index}
                            style={styles.otpInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            placeholder="•"
                            placeholderTextColor={theme.colors.textSecondary}
                        />
                    ))}
                </View>
            </View>

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
                <View style={styles.buttonRow}>
                    <Pressable style={({ pressed }) => [styles.button, styles.resendButton, pressed && { opacity: 0.8 }]}>
                        <Text style={[styles.buttonText, styles.resendButtonText]}>Resend OTP</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                </View>
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
    otpLabel: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textPrimary,
        marginBottom: 10,
    },
    otpInputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    otpInput: {
        width: 50,
        height: 50,
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        borderColor: theme.colors.primaryBorder,
        borderWidth: 1,
        textAlign: 'center',
        fontSize: theme.typography.fontSizes.medium,
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
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: theme.colors.background,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.large,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    resendButton: {
        backgroundColor: theme.colors.white,
        marginRight: 10,
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
    },
    resendButtonText: {
        color: theme.colors.primary,
    },
});

export default LoginScreenB;
