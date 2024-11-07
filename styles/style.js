import { StyleSheet, StatusBar } from 'react-native';
import theme from './theme'; // Import the theme file

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: theme.spacing.small - 5,
    // paddingVertical: theme.spacing.large,
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
    elevation: theme.shadows.light.elevation,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.background,
    marginTop: StatusBar.currentHeight,
  },
  editIcon: {
    fontSize: 15,
    color: theme.colors.white,
  },
  headerIcon: {
    color: theme.colors.textPrimary,
  },
  headerTitle: {
    fontSize: theme.typography.fontSizes.semilarge,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.textPrimary,
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderWidth: 5,
    borderColor: theme.colors.profileBorder,
    borderRadius: 70,
    marginBottom: 10,
  },
  drawerProfileImage: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: theme.colors.profileBorder,
    borderRadius: 70,
    marginBottom: 10,
  },
  editButton: {
    flexDirection: 'row',
    top: -25,
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.large,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  editText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizes.small,
    marginLeft: theme.spacing.small - 7,
    fontWeight: theme.typography.fontWeights.bold,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#155E75',
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
  drawerHeader: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  drawerItem: {
    padding: theme.spacing.large,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    paddingLeft: theme.spacing.small,
  },
});

export default globalStyles;
