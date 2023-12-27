import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper'; // Import the Swiper component

const OnboardingScreen1 = () => {
    const navigation = useNavigation();

    const handleOnboardingComplete = () => {
        navigation.navigate('Onboarding2');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/equity.png')} // Replace with your app's logo image
                style={[styles.logo, { width: 200, height: 200 }]}
            />
            <Text style={styles.title}>
                Welcome to{' '}
                <Text style={{ color: 'red' }}>BraveTalkBot!</Text>
            </Text>
            <Image
                source={require('../../assets/Chatbotrafiki.png')}
                style={styles.image}
            />
            <Text style={styles.description}>
                Discover how our friendly chatbot can assist and support you in various situations.
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleOnboardingComplete}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

// Define styles for your components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        resizeMode: 'contain',
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
        marginTop: 3,
    },
    image: {
        width: 350,
        height: 350,
        resizeMode: 'contain',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginTop: 5,
    },
    button: {
        backgroundColor: '#DF0A0A', // Change to your preferred button color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginTop: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default OnboardingScreen1;
