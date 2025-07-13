import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileScreen({
  onHomePress,
  onDeliveriesPress,
  theme,
  toggleDarkMode,
}) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.statusBar}
        barStyle={theme.colors.statusBarContent}
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>John Doe</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.value}>Male</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>123 Main Street, Anytown, USA</Text>
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>john.doe@example.com</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>+1 (555) 123-4567</Text>
          </View>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>

          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#767577', true: theme.colors.primary }}
              thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
            />
          </View>

          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Switch
              value={theme.isDark}
              onValueChange={toggleDarkMode}
              trackColor={{ false: '#767577', true: theme.colors.primary }}
              thumbColor={theme.isDark ? '#fff' : '#f4f3f4'}
            />
          </View>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLabel}>Language</Text>
            <View style={styles.settingRight}>
              <Text style={styles.settingValue}>English</Text>
              <Text style={styles.settingArrow}>→</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={onHomePress}>
          <Image
            source={require('../../assets/home.png')}
            style={styles.homeNavIcon}
            resizeMode="contain"
          />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={onDeliveriesPress}>
          <Image
            source={require('../../assets/delivery.png')}
            style={styles.navIconImage}
            resizeMode="contain"
          />
          <Text style={styles.navLabel}>Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Image
            source={require('../../assets/user.png')}
            style={[styles.profileNavIcon, styles.activeNavIcon]}
            resizeMode="contain"
          />
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const createStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: 0,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      backgroundColor: theme.colors.background,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.text,
    },
    menuButton: {
      padding: 8,
    },
    menuIcon: {
      fontSize: 20,
      color: theme.colors.text,
    },
    content: {
      flex: 1,
      paddingHorizontal: 20,
    },
    section: {
      marginTop: 24,
      marginBottom: 8,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 16,
    },
    infoItem: {
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginBottom: 4,
    },
    value: {
      fontSize: 16,
      color: theme.colors.text,
      fontWeight: '500',
    },
    settingItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    settingLabel: {
      fontSize: 16,
      color: theme.colors.text,
      fontWeight: '500',
    },
    settingRight: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    settingValue: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      marginRight: 8,
    },
    settingArrow: {
      fontSize: 16,
      color: theme.colors.textSecondary,
    },
    bottomNav: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
      backgroundColor: theme.colors.background,
      paddingVertical: 8,
    },
    navItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      minHeight: 60,
    },
    navIconImage: {
      width: 24,
      height: 24,
      marginBottom: 4,
      tintColor: theme.colors.inactiveNav,
    },
    homeNavIcon: {
      width: 20,
      height: 20,
      marginBottom: 4,
      tintColor: theme.colors.inactiveNav,
    },
    profileNavIcon: {
      width: 20,
      height: 20,
      marginBottom: 4,
      tintColor: theme.colors.inactiveNav,
    },
    navLabel: {
      fontSize: 12,
      color: theme.colors.textSecondary,
      fontWeight: '500',
    },
    activeNavItem: {
      // No background color for active state
    },
    activeNavIcon: {
      tintColor: theme.colors.activeNav,
      opacity: 1,
    },
    activeNavLabel: {
      color: theme.colors.text,
      fontWeight: 'bold',
    },
  });
