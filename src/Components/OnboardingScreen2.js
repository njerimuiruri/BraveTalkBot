import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const OnboardingScreen2 = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleOnboardingComplete = () => {
        navigation.navigate('Onboarding3');
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { marginBottom: 20 }]}>Explore BraveBot's Features</Text>

            {/* Card for Bright Ideas */}
            <View style={styles.card}>
                <Image
                    source={require('../../assets/light.png')} // Replace with your image source
                    style={styles.image}
                />
                <Text style={styles.cardText}>
                    Expect creative and innovative solutions from our chatbot to assist you effectively.
                </Text>
            </View>

            {/* Card for User Satisfaction */}
            <View style={styles.card}>
                <Image
                    source={require('../../assets/user.png')} // Replace with your image source
                    style={styles.image}
                />
                <Text style={styles.cardText}>
                    Our chatbot aims to make you smile with its helpful and user-friendly responses.
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleOnboardingComplete}>
                    <Text style={styles.buttonText}>Next</Text>
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
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
    },
    image: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
    },
    card: {
        backgroundColor: '#F0F0F0',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    cardText: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        color: '#333',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    backButton: {
        backgroundColor: '#333',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        flex: 1,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#DF0a0a',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        flex: 1,
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
















});

export default OnboardingScreen2;
