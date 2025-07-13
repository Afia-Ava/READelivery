import { useState } from 'react';
import DashboardScreen from './src/screens/DashboardScreen'; // This is now DeliveriesScreen
import DeliveryDetailsScreen from './src/screens/DeliveryDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

// Theme configurations
const lightTheme = {
  isDark: false,
  colors: {
    background: '#fff',
    cardBackground: '#f8f9fa',
    text: '#000',
    textSecondary: '#666',
    textTertiary: '#999',
    border: '#f0f0f0',
    cardBorder: '#e9ecef',
    primary: '#6a0080',
    activeNav: '#2c2c2c',
    inactiveNav: '#999',
    statusBar: '#fff',
    statusBarContent: 'dark-content',
  },
};

const darkTheme = {
  isDark: true,
  colors: {
    background: '#121212',
    cardBackground: '#1e1e1e',
    text: '#ffffff',
    textSecondary: '#b3b3b3',
    textTertiary: '#666',
    border: '#333',
    cardBorder: '#444',
    primary: '#8a4fa0',
    activeNav: '#ffffff',
    inactiveNav: '#666',
    statusBar: '#121212',
    statusBarContent: 'light-content',
  },
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Welcome');
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigateToLogin = () => {
    setCurrentScreen('Login');
  };

  const navigateToSignup = () => {
    setCurrentScreen('Signup');
  };

  const navigateToHome = () => {
    setCurrentScreen('Home');
  };

  const navigateToDeliveries = () => {
    setCurrentScreen('Deliveries');
  };

  const navigateToProfile = () => {
    setCurrentScreen('Profile');
  };

  const navigateToNotifications = () => {
    setCurrentScreen('Notifications');
  };

  const navigateToWelcome = () => {
    setCurrentScreen('Welcome');
  };

  const navigateToDeliveryDetails = delivery => {
    setSelectedDelivery(delivery);
    setCurrentScreen('DeliveryDetails');
  };

  if (currentScreen === 'Login') {
    return (
      <LoginScreen
        onBack={navigateToWelcome}
        onSignupPress={navigateToSignup}
        onContinue={navigateToHome}
        theme={theme}
      />
    );
  }

  if (currentScreen === 'Signup') {
    return (
      <SignupScreen
        onBack={navigateToWelcome}
        onLoginPress={navigateToLogin}
        onContinue={navigateToHome}
        theme={theme}
      />
    );
  }

  if (currentScreen === 'Home') {
    return (
      <HomeScreen
        onDeliveriesPress={navigateToDeliveries}
        onStartRoutePress={navigateToDeliveries}
        onProfilePress={navigateToProfile}
        onNotificationsPress={navigateToNotifications}
        theme={theme}
      />
    );
  }

  if (currentScreen === 'Notifications') {
    return (
      <NotificationsScreen
        onBack={navigateToHome}
        theme={theme}
      />
    );
  }

  if (currentScreen === 'Deliveries') {
    return (
      <DashboardScreen
        onBack={navigateToWelcome}
        onDeliveryPress={navigateToDeliveryDetails}
        onHomePress={navigateToHome}
        onProfilePress={navigateToProfile}
        theme={theme}
      />
    );
  }

  if (currentScreen === 'DeliveryDetails') {
    return (
      <DeliveryDetailsScreen
        onBack={navigateToDeliveries}
        onHomePress={navigateToHome}
        onProfilePress={navigateToProfile}
        delivery={selectedDelivery}
        theme={theme}
      />
    );
  }

  if (currentScreen === 'Profile') {
    return (
      <ProfileScreen
        onHomePress={navigateToHome}
        onDeliveriesPress={navigateToDeliveries}
        theme={theme}
        toggleDarkMode={toggleDarkMode}
      />
    );
  }

  return <WelcomeScreen onLoginPress={navigateToLogin} theme={theme} />;
}
