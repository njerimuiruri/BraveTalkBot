import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

const Home = ({ navigation }) => {
    const [greeting, setGreeting] = useState('');
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        const currentHour = new Date().getHours();
        let newGreeting = '';

        if (currentHour >= 0 && currentHour < 12) {
            newGreeting = 'Good morning';
        } else if (currentHour >= 12 && currentHour < 17) {
            newGreeting = 'Good afternoon';
        } else {
            newGreeting = 'Good evening';
        }

        setGreeting(`${newGreeting}, User`);
    }, []);

    // Define slide content
    const slides = [
        { title: 'Safety Tips', content: 'Offer safety tips and educational content related to gender-based violence.' },
        { title: 'Support Resources', content: 'Showcase available support resources such as helplines, organizations, and services.' },
        { title: 'User Testimonials', content: 'Share stories and testimonials from users who have found help or support through your app.' },
        { title: 'News and Updates', content: 'Provide news articles, updates, and information related to gender-based violence and awareness.' },
        { title: 'Community Engagement', content: 'Highlight community forums, discussions, or community-led initiatives.' },
    ];

    const handleSlideChange = (index) => {
        setCurrentSlideIndex(index);
    };

    const navigateToChat = () => {
        // Navigate to the TidioChat screen or trigger any other logic as needed
        navigation.navigate('TidioChat'); // Assuming 'TidioChat' is the route name for your TidioChat.js
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/24.png')} // Replace with the path to your app's logo
                    style={styles.logo}
                />
                <Text style={styles.greeting}>{greeting}</Text>
            </View>

            <Swiper
                style={styles.swiper}
                showsButtons={false}
                loop={false}
                ref={swiperRef}
                autoplay={3000} // Change slides every 3 seconds
                autoplayDirection={true} // true for forward, false for backward
                onIndexChanged={handleSlideChange}
            >
                {slides.map((slide, index) => (
                    <View style={styles.slide} key={index}>
                        <Ionicons name="ios-information-circle" size={40} color="#3498db" />
                        <Text style={styles.slideTitle}>{slides[currentSlideIndex].title}</Text>
                        <Text style={styles.slideContent}>{slides[currentSlideIndex].content}</Text>
                    </View>
                ))}
            </Swiper>

            <View style={styles.medicalServices}>
                <Text style={styles.medicalServicesTitle}>Medical Services</Text>
                <Text style={styles.medicalServiceItem}>Service 1: Description of the service.</Text>
                <Text style={styles.medicalServiceItem}>Service 2: Description of the service.</Text>
                <Text style={styles.medicalServiceItem}>Service 3: Description of the service.</Text>
                {/* Add more medical service items as needed */}
            </View>

            <View style={styles.iconRow}>
                <TouchableOpacity style={styles.iconContainer}>
                    <Ionicons name="ios-home" size={30} color="#3498db" />
                    <Text style={styles.iconText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={navigateToChat}>
                    <Ionicons name="ios-chatbubbles" size={30} color="#3498db" />
                    <Text style={styles.iconText}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Ionicons name="ios-robot" size={30} color="#3498db" />
                    <Text style={styles.iconText}>Chatbot</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#3498db',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    logo: {
        width: 60,
        height: 60,
    },
    greeting: {
        fontSize: 20,
        color: '#fff',
    },
    swiper: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    slideContent: {
        fontSize: 18,
        textAlign: 'center',
        color: '#555',
    },
    medicalServices: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    medicalServicesTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    medicalServiceItem: {
        fontSize: 18,
        color: '#555',
        marginBottom: 10,
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#3498db',
        padding: 10,
    },
    iconContainer: {
        alignItems: 'center',
    },
    iconText: {
        fontSize: 14,
        color: '#fff',
        marginTop: 5,
    },
});

export default Home;
