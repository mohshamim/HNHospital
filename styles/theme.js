const theme = {
  colors: {
    primary: '#155E75',
    secondary: '#2ecc71',    // Secondary color 
    background: '#e2e8f0',   // Background color 
    textPrimary: '#475569',  // Primary text color
    textSecondary: '#0E7490', // Secondary text color
    accent: '#e74c3c',       // Accent color for buttons, highlights, etc.
    white: '#ffffff',
    black: '#000000',
    iconColor: '#334155',
    profileBorder: '#0E7490',
    drawerIcon: '#0E7490',
    logout: '#FF6B6B',
    stepper: '#94A3B8',
    seagreen: '#0E7490',
    lightgreen: '#155E75'
  },

  // Font and Typography
  typography: {
    fontFamily: {
      regular: 'Roboto', // Roboto Regular
    },
    fontSizes: {
      xsmall: 12,
      small: 14, // 14px font size
      medium: 18,
      large: 24,
    },
    fontWeights: {
      regular: '400',  // 400 for regular weight
      bold: '700',
      light: '300',
    },
    lineHeights: {
      xsmall: 18,
      small: 22,   // Line height of 22px
      medium: 28,
      large: 32,
    },
  },

  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },

  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
  },

  shadows: {
    light: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,  // Android
    },
  },
};

export default theme;