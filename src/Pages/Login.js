import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        // Add your login logic here
        console.log('Login Data:', { email, password });
        // Implement your authentication logic to check the user's credentials
        // If login is successful, navigate to the homepage
        // For now, simulate a successful login
        const loginSuccessful = true;

        if (loginSuccessful) {
            navigation.navigate('Home'); // Navigate to the homepage
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Login</Text>
            <View style={styles.form}>
                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <Ionicons name="mail" size={24} color="gray" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={24} color="gray" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={setPassword}
                        value={password}
                    />
                </View>

                {/* Login Button */}
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.separator}>
                    <Text style={styles.orText}>OR</Text>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="mail" size={24} color="white" style={styles.icon} />
                        <Text style={styles.iconButtonText}>Login with Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} >
                        <Ionicons name="logo-google" size={24} color="white" style={styles.icon} />
                        <Text style={styles.iconButtonText}>Login with Google</Text>
                    </TouchableOpacity>
                </View>



            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        width: '80%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 30,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
    },
    button: {
        backgroundColor: '#DF0a0a',
        paddingVertical: 14,
        borderRadius: 30,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    iconButtonText: {
        fontSize: 16,
        color: 'white',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    orText: {
        color: 'gray',
        fontSize: 16,
    },
});

export default LoginScreen;
