import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/Components/SplashScreen';
import OnboardingScreen1 from './src/Components/OnboardingScreen1';
import OnboardingScreen2 from './src/Components/OnboardingScreen2';
import OnboardingScreen3 from './src/Components/OnboardingScreen3';
import RegistrationScreen from './src/Components/RegistrationScreen';
import TidioChat from './src/Components/TidioChat';

// import HomeScreen from './src/Components/HomeScreen';
import Login from './src/Pages/Login' // Import your LoginScreen component

import Home from './src/Pages/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
        <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="TidioChat" component={TidioChat} />

        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> Include HomeScreen in your navigation stack */}


        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
