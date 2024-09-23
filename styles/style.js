// styles/styles.js
import { StyleSheet } from 'react-native';
import theme from './theme';  // Import the theme file

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.typography.fontSizes.large,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.primary,
  },
  bodyText: {
    fontSize: theme.typography.fontSizes.medium,
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.colors.textPrimary,
  },
  button: {
    backgroundColor: theme.colors.accent,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    shadowColor: theme.shadows.light.shadowColor,
    shadowOffset: theme.shadows.light.shadowOffset,
    shadowOpacity: theme.shadows.light.shadowOpacity,
    elevation: theme.shadows.light.elevation, // Android shadow
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F0F4F8',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#155E75',
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  editButton: {
    position: 'absolute',
    right: 40,
    top: 70,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.small,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  editText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizes.small,
    fontWeight: theme.typography.fontWeights.bold,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#155E75',
    marginTop: 10,
  },
  addressText: {
    fontSize: 12,
    color: '#475569',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  section: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.medium,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoBox: {
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 14,
    color: theme.colors.textPrimary,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: 5,
  },
});

export default globalStyles;
