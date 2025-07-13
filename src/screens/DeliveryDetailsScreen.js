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

export default function DeliveryDetailsScreen({
  onBack,
  onHomePress,
  onProfilePress,
  delivery,
  theme,
}) {
  const styles = createStyles(theme);

  // Default delivery data if none provided
  const deliveryData = delivery || {
    recipient: 'Sophia Carter',
    address: '123 Maple Street, Anytown, USA 44023',
    date: 'July 26, 2023',
    time: '10:00 AM - 12:00 PM',
    instructions: 'Leave the books at the front gate',
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.statusBar}
        barStyle={theme.colors.statusBarContent}
      />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delivery Details</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Delivery Information</Text>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Recipient</Text>
          <Text style={styles.value}>{deliveryData.recipient}</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>{deliveryData.address}</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Delivery Information</Text>
          <Text style={styles.value}>
            {deliveryData.date} {deliveryData.time}
          </Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Special Instructions</Text>
          <Text style={styles.value}>{deliveryData.instructions}</Text>
        </View>

        <Text style={styles.sectionTitle}>Location Map</Text>

        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapText}>Map View</Text>
            <Text style={styles.mapSubtext}>Location preview</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Delivery Status</Text>

        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusButtonText}>Mark as Delivered</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Reschedule Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Report a Problem</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadIcon}>📷</Text>
          <Text style={styles.uploadButtonText}>Upload Photo</Text>
        </TouchableOpacity>
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
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../../assets/delivery.png')}
            style={styles.navIconImage}
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
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      backgroundColor: theme.colors.background,
    },
    backButton: {
      padding: 8,
    },
    backArrow: {
      fontSize: 24,
      color: theme.colors.text,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 16,
      color: theme.colors.text,
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.text,
      marginTop: 24,
      marginBottom: 16,
    },
    infoSection: {
      marginBottom: 20,
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
    mapContainer: {
      marginBottom: 24,
    },
    mapPlaceholder: {
      height: 200,
      backgroundColor: theme.isDark ? '#1a365d' : '#e3f2fd',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#2196f3',
      borderStyle: 'dashed',
    },
    mapText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#2196f3',
      marginBottom: 4,
    },
    mapSubtext: {
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
    statusButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      paddingVertical: 16,
      marginBottom: 12,
      alignItems: 'center',
    },
    statusButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    actionButton: {
      backgroundColor: theme.colors.cardBackground,
      borderRadius: 8,
      paddingVertical: 16,
      marginBottom: 12,
      alignItems: 'center',
      borderWidth: theme.isDark ? 1 : 0,
      borderColor: theme.colors.cardBorder,
    },
    actionButtonText: {
      color: theme.colors.text,
      fontSize: 16,
      fontWeight: '500',
    },
    uploadButton: {
      backgroundColor: theme.colors.cardBackground,
      borderRadius: 8,
      paddingVertical: 16,
      marginBottom: 100,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      borderWidth: theme.isDark ? 1 : 0,
      borderColor: theme.colors.cardBorder,
    },
    uploadIcon: {
      fontSize: 20,
      marginRight: 8,
    },
    uploadButtonText: {
      color: theme.colors.text,
      fontSize: 16,
      fontWeight: '500',
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
  });
