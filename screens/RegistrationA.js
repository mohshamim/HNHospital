import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme';

const RegistrationScreenA = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={24} style={styles.headerIcon} />
                <Text style={styles.headerTitle}>Register User</Text>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Iqama number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="1234567890"
                    placeholderTextColor={theme.colors.textSecondary}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Contact number</Text>
                <View style={styles.contactInputContainer}>
                    <Text style={styles.countryCode}>+966</Text>
                    <TextInput
                        style={[styles.input, { flex: 1 }]}
                        placeholder="12-345-6789"
                        placeholderTextColor={theme.colors.textSecondary}
                        keyboardType="phone-pad"
                    />
                </View>
            </View>

            {/* Instruction Text */}
            <View style={styles.instructionContainer}>
                <Ionicons name="information-circle-outline" size={20} color={theme.colors.textSecondary} />
                <Text style={styles.instructionText}>
                    Enter the contact number registered with the Iqama and ensure the device is accessible to receive the OTP for
                    successful user registration.
                </Text>
            </View>

            {/* Step Indicator */}
            <View style={styles.stepIndicatorContainer}>
                <Text style={styles.stepText}>Step 1/3</Text>
                <View style={styles.stepBarContainer}>
                    <View style={[styles.stepBar, { backgroundColor: theme.colors.primary }]} />
                    <View style={[styles.stepBar, { backgroundColor: theme.colors.stepper }]} />
                    <View style={[styles.stepBar, { backgroundColor: theme.colors.stepper }]} />
                </View>
            </View>

            {/* Button */}
            <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}>
                <Text style={styles.buttonText}>Receive OTP</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 20,
        justifyContent: 'space-between', // Adjust spacing to match the design
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
        padding: 12,
        fontSize: theme.typography.fontSizes.small,
        borderColor: theme.colors.primaryBorder,
        borderWidth: 1,
        marginBottom: 15, // Adjust spacing to match the design
    },
    contactInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryCode: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        padding: 12,
        fontSize: theme.typography.fontSizes.small,
        borderColor: theme.colors.primaryBorder,
        borderWidth: 1,
        marginRight: 10,
    },
    instructionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.background, // Adjust background for contrast
        padding: 10,
        borderRadius: theme.borderRadius.small,
    },
    instructionText: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textSecondary,
        marginLeft: 10,
        flex: 1,
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

export default RegistrationScreenA;
