import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen = () => {
    const navigation = useNavigation();

    // useEffect(() => {
    // const timer = setTimeout(() => {
    // navigation.replace('Onboarding1');
    // }, 3000);

    // return () => clearTimeout(timer);
    // }, [navigation]);

    useEffect(() => {
        const timer = setTimeout(() => {
            AsyncStorage.getItem('hasCompletedOnboarding')
                .then((value) => {
                    if (value === 'true') {
                        navigation.replace('Home');
                    } else {
                        navigation.replace('Onboarding1');
                    }
                })
                .catch((error) => {
                    console.error('Error retrieving onboarding status:', error);
                });
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../assets/animation_lmoprkv8.json')}
                autoPlay
                loop={false}
                style={{ width: 400, height: 400 }}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SplashScreen;
