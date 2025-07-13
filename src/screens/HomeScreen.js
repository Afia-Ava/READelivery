import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen({
  onDeliveriesPress,
  onStartRoutePress,
  onProfilePress,
  onNotificationsPress,
  theme,
}) {
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.statusBar}
        barStyle={theme.colors.statusBarContent}
      />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity
          style={styles.notificationButton}
          onPress={onNotificationsPress}
        >
          <Image
            source={require('../../assets/notification.png')}
            style={styles.notificationIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Greeting */}
        <Text style={styles.greeting}>Hi Afia</Text>
        <Text style={styles.greeting}>Ready for today's deliveries?</Text>

        {/* Pending Delivery Card */}
        <View style={styles.deliveriesCard}>
          <View style={styles.cardLeft}>
            <Text style={styles.cardTitle}>Pending Delivery</Text>
            <Text style={styles.cardSubtitle}>2/5 completed</Text>

            {/* Progress Bar */}
            <View style={styles.progressSection}>
              <Text style={styles.progressLabel}>Completed</Text>
              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>
              <Text style={styles.progressText}>2/5</Text>
            </View>
          </View>
          <View style={styles.cardRight}>
            <Image
              source={require('../../assets/delivery.png')}
              style={styles.cardImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Start Route Button */}
        <TouchableOpacity
          style={styles.startRouteButton}
          onPress={onStartRoutePress}
        >
          <Text style={styles.startRouteText}>🚚 Start Delivery</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Image
            source={require('../../assets/home.png')}
            style={[styles.homeNavIcon, styles.activeNavIcon]}
            resizeMode="contain"
          />
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={onDeliveriesPress}>
          <Image
            source={require('../../assets/delivery.png')}
            style={styles.deliveryNavIcon}
            resizeMode="contain"
          />
          <Text style={styles.navLabel}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={onProfilePress}>
          <Image
            source={require('../../assets/user.png')}
            style={styles.profileNavIcon}
            resizeMode="contain"
          />
          <Text style={styles.navLabel}>Profile</Text>
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
    notificationButton: {
      padding: 8,
    },
    notificationIcon: {
      width: 24,
      height: 24,
      tintColor: theme.colors.text,
    },
    content: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 24,
    },
    greeting: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.text,
      lineHeight: 30,
      marginLeft: 8,
    },
    deliveriesCard: {
      backgroundColor: theme.colors.cardBackground,
      borderRadius: 16,
      padding: 20,
      marginTop: 24,
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
      borderWidth: theme.isDark ? 1 : 0,
      borderColor: theme.colors.cardBorder,
    },
    cardLeft: {
      flex: 1,
    },
    cardRight: {
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 4,
    },
    cardSubtitle: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginBottom: 12,
    },
    cardImage: {
      width: 60,
      height: 60,
      tintColor: theme.colors.primary,
    },
    progressSection: {
      marginTop: 12,
    },
    progressLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 8,
    },
    progressBar: {
      height: 8,
      backgroundColor: theme.isDark ? '#444' : '#e5e7eb',
      borderRadius: 4,
      marginBottom: 8,
    },
    progressFill: {
      height: '100%',
      width: '40%',
      backgroundColor: theme.colors.primary,
      borderRadius: 4,
    },
    progressText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      textAlign: 'right',
    },
    startRouteButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      marginTop: 24,
      alignItems: 'center',
    },
    startRouteText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
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
    deliveryNavIcon: {
      width: 28,
      height: 28,
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
