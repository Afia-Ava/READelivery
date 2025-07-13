import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function WelcomeScreen({ onLoginPress, theme }) {
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.statusBar}
        barStyle={theme.colors.statusBarContent}
      />
      <Image
        source={require('../../assets/logo-icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>READelivery</Text>
      <Text style={styles.subtitle}>A Nonprofit Children's Bookshop</Text>
      <Text style={styles.tagline}>
        growing minds and hearts, one book at a time
      </Text>
      <TouchableOpacity style={styles.button} onPress={onLoginPress}>
        <Text style={styles.buttonText}>Log in / Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
    },
    logo: {
      width: 140,
      height: 140,
      marginTop: -60,
      marginBottom: 36,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 6,
      color: theme.colors.text,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 15,
      color: theme.colors.textSecondary,
      marginBottom: 10,
      textAlign: 'center',
      fontWeight: '400',
    },
    tagline: {
      fontSize: 12,
      color: theme.colors.textTertiary,
      marginBottom: 40,
      textAlign: 'center',
      fontWeight: '300',
    },
    button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 10,
      paddingVertical: 14,
      paddingHorizontal: 32,
      width: '85%',
      alignSelf: 'center',
      elevation: 2,
    },
    buttonText: {
      color: '#fff',
      fontSize: 17,
      textAlign: 'center',
      fontWeight: '500',
    },
  });
