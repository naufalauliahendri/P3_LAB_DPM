import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import styles from '../styles/LoginStyles';
import { authenticateUser } from '../services/AuthService';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Lifecycle methods
  useEffect(() => {
    console.log('LoginScreen Mounted');
    return () => {
      console.log('LoginScreen Unmounted');
    };
  }, []);

  const handleLogin = () => {
    const isAuthenticated = authenticateUser(username, password);
    if (isAuthenticated) {
      Alert.alert('Success', 'Login successful');
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
