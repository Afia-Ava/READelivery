import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function DeliveriesScreen({
  onBack,
  onDeliveryPress,
  onHomePress,
  onProfilePress,
  theme,
}) {
  const styles = createStyles(theme);
  const upcomingDeliveries = [
    {
      id: 1,
      name: 'Kai Ling',
      address: '123 Long St, CA',
      recipient: 'Kai Ling',
      date: 'July 26, 2023',
      time: '10:00 AM - 12:00 PM',
      instructions: 'Leave the package at the front door',
    },
    {
      id: 2,
      name: 'Emma Donald',
      address: '89 Mission Street, CA',
      recipient: 'Emma Donald',
      date: 'July 26, 2023',
      time: '2:00 PM - 4:00 PM',
      instructions: 'Ring the doorbell twice',
    },
    {
      id: 3,
      name: 'Aria Ava',
      address: '765 Pine st, CA',
      recipient: 'Aria Ava',
      date: 'July 27, 2023',
      time: '11:00 AM - 1:00 PM',
      instructions: 'Leave with building concierge',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.statusBar}
        barStyle={theme.colors.statusBarContent}
      />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Delivery</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Dashboard</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Total Deliveries</Text>
            <Text style={styles.statNumber}>15</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Completed</Text>
            <Text style={styles.statNumber}>5</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Upcoming Deliveries</Text>

        <View style={styles.deliveriesList}>
          {upcomingDeliveries.map(delivery => (
            <TouchableOpacity
              key={delivery.id}
              style={styles.deliveryItem}
              onPress={() => onDeliveryPress && onDeliveryPress(delivery)}
            >
              <View style={styles.locationIcon}>
                <Image
                  source={require('../../assets/maps-and-flags.png')}
                  style={styles.locationIconImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.deliveryInfo}>
                <Text style={styles.deliveryName}>{delivery.name}</Text>
                <Text style={styles.deliveryAddress}>{delivery.address}</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={onHomePress}>
          <Image
            source={require('../../assets/home.png')}
            style={styles.homeNavIcon}
            resizeMode="contain"
          />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Image
            source={require('../../assets/delivery.png')}
            style={[styles.deliveryNavIcon, styles.activeNavIcon]}
            resizeMode="contain"
          />
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Delivery</Text>
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
      paddingHorizontal: 16,
    },
    pageTitle: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.colors.text,
      marginTop: 20,
      marginBottom: 24,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 32,
    },
    statBox: {
      flex: 1,
      marginHorizontal: 8,
      backgroundColor: theme.colors.cardBackground,
      borderRadius: 12,
      paddingVertical: 20,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: theme.colors.cardBorder,
    },
    statLabel: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginBottom: 8,
      textAlign: 'center',
    },
    statNumber: {
      fontSize: 32,
      fontWeight: '700',
      color: theme.colors.text,
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 16,
    },
    deliveriesList: {
      marginBottom: 100, // Space for bottom navigation
    },
    deliveryItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    locationIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.cardBackground,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
      borderWidth: 1,
      borderColor: theme.colors.cardBorder,
    },
    locationIconImage: {
      width: 20,
      height: 20,
    },
    deliveryInfo: {
      flex: 1,
    },
    deliveryName: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 4,
    },
    deliveryAddress: {
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
    chevron: {
      fontSize: 20,
      color: theme.colors.textTertiary,
      marginLeft: 8,
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
    navIcon: {
      fontSize: 20,
      marginBottom: 4,
      lineHeight: 20,
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
