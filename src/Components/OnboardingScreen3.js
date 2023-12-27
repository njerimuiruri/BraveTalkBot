import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LastOnboardingScreen = () => {
    const navigation = useNavigation();

    const handleGetStarted = () => {
        navigation.navigate('RegistrationScreen'); // Navigate to your app's main interface
    };
    const Skipfornow = () => {
        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imagesContainer}>
                    <View style={styles.imageCardRow}>
                        <View style={styles.imageCard}>
                            <Image
                                source={require('../../assets/mediate.png')}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.imageCard}>
                            <Image
                                source={require('../../assets/call.png')}
                                style={styles.image}
                            />
                        </View>
                    </View>
                    <View style={styles.imageCard}>
                        <Image
                            source={require('../../assets/24.png')}
                            style={styles.largeImage} // Increased width and height
                        />
                    </View>
                </View>

                <Text style={styles.header}>Get Started with BraveTalkBot!</Text>

                <Text style={styles.subheading}>Your Personal Assistant for Every Situation</Text>

                <Text style={styles.description}>
                    Explore a world of possibilities with BraveTalkBot. Our friendly chatbot is here to assist and support you in various situations. Whether it's answering questions, providing recommendations, or simply having a chat, we've got you covered.
                </Text>

                {/* Call to Action */}
                <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>

                {/* Skip Option */}
                <TouchableOpacity style={styles.skipButton} onPress={Skipfornow}>
                    <Text style={styles.skipButtonText}>Skip for now</Text>
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
    content: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    imagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    imageCardRow: {
        flexDirection: 'column',
        alignItems: 'center', // Center the images vertically
    },
    imageCard: {
        backgroundColor: '#FFCCCa',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    largeImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: '#333',
    },
    subheading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#555',
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#555',
    },
    button: {
        backgroundColor: '#DF0a0a',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    skipButton: {
        marginBottom: 20,
    },
    skipButtonText: {
        color: '#555',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default LastOnboardingScreen;
