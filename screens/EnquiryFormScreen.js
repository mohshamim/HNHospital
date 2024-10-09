import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme';

const EnquiryFormScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={24} style={styles.headerIcon} />
                <Text style={styles.headerTitle}>Enquiry Form</Text>
                <Ionicons name="search-outline" size={24} style={styles.headerIcon} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Enquiry Type */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Enquiry type</Text>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="General Enquiry"
                            placeholderTextColor={theme.colors.textSecondary}
                            style={styles.inputText}
                            editable={false}
                        />
                    </View>
                </View>

                {/* Query Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Type your queries</Text>
                    <View style={styles.queryInputContainer}>
                        <TextInput
                            placeholder="Type your message or question here..."
                            placeholderTextColor={theme.colors.textSecondary}
                            multiline={true}
                            style={styles.queryInput}
                        />
                        <Pressable style={styles.attachMedia}>
                            <Ionicons name="attach-outline" size={20} color={theme.colors.textSecondary} />
                            <Text style={styles.attachText}>Attach media</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Guidelines */}
                <View style={styles.guidelines}>
                    <Text style={styles.guidelineText}>• Be Specific and Clear.</Text>
                    <Text style={styles.guidelineText}>• Write Your Query Briefly.</Text>
                    <Text style={styles.guidelineText}>• Provide Relevant Details.</Text>
                    <Text style={styles.guidelineText}>• State Your Preferred Outcome.</Text>
                    <Text style={styles.guidelineText}>• Include Any Attachments If Necessary.</Text>
                    <Text style={styles.guidelineText}>• Review Before Submitting.</Text>
                </View>

                {/* Submit Button */}
                <Pressable style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Send request</Text>
                </Pressable>

                {/* Previous Enquiries */}
                <View style={styles.previousEnquiries}>
                    <Text style={styles.previousEnquiriesTitle}>Previous Enquiries</Text>
                    <View style={styles.enquiryCard}>
                        <Text style={styles.enquiryTitle}>Enquiry Title here</Text>
                        <Text style={styles.enquiryDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    headerIcon: {
        color: theme.colors.textPrimary,
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
        fontWeight: theme.typography.fontWeights.medium,
        color: theme.colors.textPrimary,
        marginBottom: 10,
    },
    input: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        borderWidth: 1,
        borderColor: theme.colors.primaryBorder,
        padding: 15,
    },
    inputText: {
        color: theme.colors.textPrimary,
        fontSize: theme.typography.fontSizes.small,
    },
    queryInputContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        borderWidth: 1,
        borderColor: theme.colors.primaryBorder,
        padding: 15,
        minHeight: 120,
    },
    queryInput: {
        color: theme.colors.textPrimary,
        fontSize: theme.typography.fontSizes.small,
        flex: 1,
    },
    attachMedia: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    attachText: {
        color: theme.colors.textSecondary,
        marginLeft: 5,
    },
    guidelines: {
        marginBottom: 20,
    },
    guidelineText: {
        color: theme.colors.textSecondary,
        fontSize: theme.typography.fontSizes.small,
        marginBottom: 5,
    },
    submitButton: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.large,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 30,
    },
    submitButtonText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
    },
    previousEnquiries: {
        marginBottom: 20,
    },
    previousEnquiriesTitle: {
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
        color: theme.colors.textPrimary,
        marginBottom: 10,
    },
    enquiryCard: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    enquiryTitle: {
        fontSize: theme.typography.fontSizes.small,
        fontWeight: theme.typography.fontWeights.bold,
        color: theme.colors.textPrimary,
        marginBottom: 5,
    },
    enquiryDescription: {
        color: theme.colors.textSecondary,
        fontSize: theme.typography.fontSizes.small,
    },
});

export default EnquiryFormScreen;
