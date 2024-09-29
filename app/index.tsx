import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './(auth)/login'; // Adjust the path as needed
import RegisterScreen from './(auth)/register'; // Adjust the path as needed
import HomeScreen from './(tabs)/homescreen'; // Adjust the path as needed

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> {/* Navigate here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
