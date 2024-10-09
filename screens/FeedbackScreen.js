import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme';

const FeedbackScreen = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    const tags = ['Professional', 'Respectful', 'Hard-Working', 'Attentive', 'Communicative'];

    const toggleTagSelection = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((item) => item !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleStarPress = (index) => {
        setRating(index + 1);
    };


    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={24} style={styles.headerIcon} />
                <Text style={styles.headerTitle}>Provide Feedback</Text>
            </View>

            {/* Rating Section */}
            <Text style={styles.label}>Rating</Text>
            <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                    <Ionicons
                        key={index}
                        name={index < rating ? 'star' : 'star-outline'}
                        size={28}
                        color={theme.colors.rating}
                        onPress={() => handleStarPress(index)}
                        style={styles.starIcon}
                    />
                ))}
            </View>

            {/* Feedback Input */}
            <Text style={styles.label}>Feedback</Text>
            <TextInput
                style={styles.feedbackInput}
                multiline={true}
                placeholder="Share your experience with Dr. Farooque..."
                value={feedback}
                onChangeText={setFeedback}
                placeholderTextColor={theme.colors.textSecondary}
            />

            {/* Feedback Tags */}
            <View style={styles.tagContainer}>
                {tags.map((tag) => (
                    <Pressable
                        key={tag}
                        style={[
                            styles.tag,
                            selectedTags.includes(tag) && styles.tagSelected,
                        ]}
                        onPress={() => toggleTagSelection(tag)}
                    >
                        <Text
                            style={[
                                styles.tagText,
                                selectedTags.includes(tag) && styles.tagTextSelected,
                            ]}
                        >
                            {tag}
                        </Text>
                    </Pressable>
                ))}
            </View>

            {/* Submit Button */}
            <Pressable style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit Feedback</Text>
            </Pressable>
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
    label: {
        fontSize: theme.typography.fontSizes.medium,
        color: theme.colors.textPrimary,
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    starIcon: {
        marginRight: 5, // Adjust spacing between stars
    },
    feedbackInput: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.medium,
        padding: 15,
        textAlignVertical: 'top',
        height: 100, // Adjust height for input field
        borderColor: theme.colors.primaryBorder,
        borderWidth: 1,
        marginBottom: 20,
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Make sure tags wrap to the next line
        justifyContent: 'space-between', // Adjust spacing between tags
        marginBottom: 20,
    },
    tag: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.large,
        borderWidth: 1,
        borderColor: theme.colors.primaryBorder,
        marginBottom: 10,
        minWidth: '30%', // Adjust width for tags to be more compact
        alignItems: 'center',
    },
    tagSelected: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
    },
    tagText: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.textSecondary,
    },
    tagTextSelected: {
        color: theme.colors.white,
    },
    submitButton: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 15,
        borderRadius: theme.borderRadius.large,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', // Position it at the bottom
        bottom: 30, // Adjust bottom padding
        left: 20,
        right: 20,
    },
    submitButtonText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizes.medium,
        fontWeight: theme.typography.fontWeights.bold,
    },
});

export default FeedbackScreen;
