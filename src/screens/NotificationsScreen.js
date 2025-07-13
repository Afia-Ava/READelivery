import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function NotificationsScreen({ onBack, theme }) {
  const styles = createStyles(theme);

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
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.headerSpacer} />
      </View>
      <View style={styles.content}>
        <View style={styles.notificationIconContainer}>
          <Image
            source={require('../../assets/notification.png')}
            style={styles.notificationIcon}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.emptyMessage}>You're all caught up!</Text>
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
      marginRight: 8,
    },
    backArrow: {
      fontSize: 24,
      color: theme.colors.text,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.text,
      flex: 1,
      textAlign: 'center',
      marginRight: 40, // Offset for back button
    },
    headerSpacer: {
      width: 40, // Same width as back button for centering
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 32,
    },
    emptyStateContainer: {
      alignItems: 'center',
      maxWidth: 300,
    },
    notificationIconContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: theme.colors.cardBackground,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
      borderWidth: theme.isDark ? 1 : 0,
      borderColor: theme.colors.cardBorder,
    },
    notificationIcon: {
      width: 40,
      height: 40,
      tintColor: theme.colors.textSecondary,
    },
    emptyTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 12,
      textAlign: 'center',
    },
    emptyMessage: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
    },
  });
