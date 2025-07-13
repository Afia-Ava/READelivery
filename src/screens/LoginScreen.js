import { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen({
  onBack,
  onSignupPress,
  onContinue,
  theme,
}) {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');
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
        <Text style={styles.headerTitle}>READelivery</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome to READelivery</Text>

        <TextInput
          style={styles.input}
          placeholder="Phone number or email"
          value={phoneOrEmail}
          onChangeText={setPhoneOrEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Please sign in or </Text>
          <TouchableOpacity onPress={onSignupPress}>
            <Text style={styles.signUpLinkText}>sign up</Text>
          </TouchableOpacity>
          <Text style={styles.signUpText}> to continue</Text>
        </View>

        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            By continuing, you agree to our{'\n'}
            <Text style={styles.link}>Terms of Service</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>
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
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0',
    },
    backButton: {
      padding: 8,
    },
    backArrow: {
      fontSize: 24,
      color: '#000',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 16,
    },
    content: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 40,
      textAlign: 'center',
      color: '#000',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 14,
      fontSize: 16,
      marginBottom: 16,
      backgroundColor: '#f9f9f9',
    },
    continueButton: {
      backgroundColor: '#6a0080',
      borderRadius: 8,
      paddingVertical: 16,
      marginTop: 24,
      marginBottom: 24,
    },
    continueButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
    signUpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
      flexWrap: 'wrap',
    },
    signUpText: {
      fontSize: 14,
      color: '#666',
      textAlign: 'center',
    },
    signUpLink: {
      paddingHorizontal: 2,
    },
    signUpLinkText: {
      fontSize: 14,
      color: '#6a0080',
      textDecorationLine: 'underline',
    },
    forgotPasswordContainer: {
      alignItems: 'center',
      marginBottom: 30,
      paddingVertical: 10,
    },
    forgotPasswordText: {
      fontSize: 14,
      color: '#6a0080',
      textDecorationLine: 'underline',
    },
    footer: {
      marginTop: 'auto',
      paddingBottom: 20,
    },
    footerText: {
      fontSize: 12,
      color: '#888',
      textAlign: 'center',
      lineHeight: 18,
    },
    link: {
      color: '#6a0080',
      textDecorationLine: 'underline',
    },
  });
