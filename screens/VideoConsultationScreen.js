import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme';

const VideoConsultationScreen = () => {
  const doctorImage = { uri: 'https://via.placeholder.com/500x500.png?text=Dr.+Farooque' };
  const patientImage = { uri: 'https://via.placeholder.com/150x150.png?text=You' };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} style={styles.headerIcon} />
        <Text style={styles.headerTitle}>Telehealth</Text>
        <Ionicons name="search-outline" size={24} style={styles.headerIcon} />
      </View>

      {/* Subheader */}
      <Text style={styles.subheader}>Your session is being recorded</Text>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        {/* Doctor's Video */}
        <Image source={doctorImage} style={styles.doctorVideo} />

        {/* Doctor's Label */}
        <View style={styles.doctorLabelContainer}>
          <Text style={styles.doctorLabel}>Dr. Farooque</Text>
          <Ionicons name="volume-high-outline" size={16} color={theme.colors.textPrimary} />
        </View>

        {/* Patient's Floating Video */}
        <View style={styles.patientVideoContainer}>
          <Image source={patientImage} style={styles.patientVideo} />
          <Text style={styles.patientLabel}>You</Text>
        </View>
      </View>

      {/* Call Controls */}
      <View style={styles.controlsContainer}>
        <Pressable style={styles.controlButton}>
          <Ionicons name="mic-outline" size={24} color={theme.colors.textPrimary} />
        </Pressable>

        <Pressable style={styles.controlButton}>
          <Ionicons name="videocam-outline" size={24} color={theme.colors.textPrimary} />
        </Pressable>

        {/* Attach Media Button */}
        <Pressable style={styles.attachButton}>
          <Ionicons name="attach-outline" size={24} style={styles.attachIcon} />
          <Text style={styles.attachText}>Attach Media</Text>
        </Pressable>

        {/* End Call Button */}
        <Pressable style={styles.endCallButton}>
          <Ionicons name="call-outline" size={24} style={styles.endCallIcon} />
          <Text style={styles.endCallText}>End Call</Text>
        </Pressable>
      </View>

      {/* Message Section */}
      <View style={styles.messageContainer}>
        <Pressable style={styles.messageInput}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color={theme.colors.textSecondary} />
          <Text style={styles.messageText}>Send Message</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerIcon: {
    color: theme.colors.textPrimary,
  },
  headerTitle: {
    fontSize: theme.typography.fontSizes.large,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  subheader: {
    textAlign: 'center',
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSizes.small,
    marginBottom: 10,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorVideo: {
    width: '90%',
    height: '65%',
    borderRadius: theme.borderRadius.medium,
    backgroundColor: theme.colors.white,
  },
  doctorLabelContainer: {
    position: 'absolute',
    top: 10,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  doctorLabel: {
    fontSize: theme.typography.fontSizes.small,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
    marginRight: 5,
  },
  patientVideoContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
  },
  patientVideo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  patientLabel: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizes.xsmall,
    marginTop: 5,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  controlButton: {
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    padding: 15,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  attachButton: {
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  attachText: {
    color: theme.colors.primary,
    marginLeft: 10,
    fontSize: theme.typography.fontSizes.small,
    fontWeight: 'bold',
  },
  attachIcon: {
    color: theme.colors.primary,
  },
  endCallButton: {
    backgroundColor: '#ff6b6b',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  endCallText: {
    color: theme.colors.white,
    marginLeft: 10,
    fontSize: theme.typography.fontSizes.small,
    fontWeight: 'bold',
  },
  endCallIcon: {
    color: theme.colors.white,
  },
  messageContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  messageInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  messageText: {
    color: theme.colors.textSecondary,
    marginLeft: 10,
  },
});

export default VideoConsultationScreen;
