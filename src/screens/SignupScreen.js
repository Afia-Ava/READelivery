import { useState } from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SignupScreen({
  onBack,
  onLoginPress,
  onContinue,
  theme,
}) {
  const styles = createStyles(theme);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];

  const selectGender = selectedGender => {
    setGender(selectedGender);
    setShowGenderModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
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
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowGenderModal(true)}
        >
          <Text
            style={[styles.dropdownText, !gender && styles.placeholderText]}
          >
            {gender || 'Select Gender'}
          </Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </TouchableOpacity>

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

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Please </Text>
          <TouchableOpacity onPress={onLoginPress}>
            <Text style={styles.signInLinkText}>sign in</Text>
          </TouchableOpacity>
          <Text style={styles.signUpText}> or sign up to continue</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            By continuing, you agree to our{'\n'}
            <Text style={styles.link}>Terms of Service</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>
      </View>

      <Modal
        visible={showGenderModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowGenderModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Gender</Text>
            <FlatList
              data={genderOptions}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => selectGender(item)}
                >
                  <Text style={styles.modalOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowGenderModal(false)}
            >
              <Text style={styles.modalCloseText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    dropdown: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 14,
      marginBottom: 16,
      backgroundColor: '#f9f9f9',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dropdownText: {
      fontSize: 16,
      color: '#000',
    },
    placeholderText: {
      color: '#999',
    },
    dropdownArrow: {
      fontSize: 12,
      color: '#666',
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
      marginBottom: 40,
      flexWrap: 'wrap',
    },
    signUpText: {
      fontSize: 14,
      color: '#666',
      textAlign: 'center',
    },
    signInLinkText: {
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
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 20,
      width: '80%',
      maxHeight: '60%',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 16,
      textAlign: 'center',
    },
    modalOption: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0',
    },
    modalOptionText: {
      fontSize: 16,
      color: '#000',
      textAlign: 'left',
    },
    modalCloseButton: {
      marginTop: 16,
      paddingVertical: 12,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
    },
    modalCloseText: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
    },
  });
