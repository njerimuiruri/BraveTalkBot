import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add your login logic here
        console.log('Login Data:', { email, password });
        // Implement your authentication logic to check the user's credentials
        // Redirect to the appropriate screen upon successful login
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Login</Text>
            <View style={styles.form}>
                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
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
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 30,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    input: {
        fontSize: 16,
        padding: 10,
    },
    button: {
        backgroundColor: '#DF0a0a',
        paddingVertical: 14,
        borderRadius: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default LoginScreen;
