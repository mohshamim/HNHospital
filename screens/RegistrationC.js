import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme';

const RegistrationScreenC = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={24} style={styles.headerIcon} />
                <Text style={styles.headerTitle}>Register User</Text>
            </View>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Input Fields */}
                {['First name', 'Middle name', 'Last name', 'Date of birth', 'Address Line 1', 'Address Line 2', 'Address Line 3'].map((label, index) => (
                    <View key={index} style={styles.inputContainer}>
                        <Text style={styles.label}>{label}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={label}
                            placeholderTextColor={theme.colors.textSecondary}
                        />
                    </View>
                ))}

                {/* Step Indicator */}
                <View style={styles.stepIndicatorContainer}>
                    <Text style={styles.stepText}>Step 3/3</Text>
                    <View style={styles.stepBarContainer}>
                        <View style={[styles.stepBar, { backgroundColor: theme.colors.primary }]} />
                        <View style={[styles.stepBar, { backgroundColor: theme.colors.primary }]} />
                        <View style={[styles.stepBar, { backgroundColor: theme.colors.primary }]} />
                    </View>
                </View>

                {/* Button */}
                <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}>
                    <Text style={styles.buttonText}>Register User</Text>
                </Pressable>
            </ScrollView>
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
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    inputContainer: {
        marginBottom: 15,
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
        marginTop: 20,
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
    },
});

export default RegistrationScreenC;
