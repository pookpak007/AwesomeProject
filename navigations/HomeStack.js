import * as React from 'react';

import BmiScreen from '../screens/BmiScreen';
import NetworkScreen from '../screens/NetworkScreen';
import HomeScreen from '../screens/HomeScreen';
import MidtermFirstScreen from '../screens/MidtermFirstScreen';
import MidtermTab from '../screens/MidtermTab';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{  title: 'Home Title'  }} 
                />
            <Stack.Screen 
                name="BmiScreen" 
                component={BmiScreen} 
                options={{  title: 'Bmi Network Title'  }} 
                />
            <Stack.Screen 
                name="NetworkScreen" 
                component={NetworkScreen} 
                options={{ title: 'Network Screen Title' }} 
                />

            <Stack.Screen 
                name="MidtermFirstScreen" 
                component={MidtermFirstScreen} 
                options={{ title: 'Midterm First Screen Title' }} 
                />
            
            <Stack.Screen 
                name="MidtermTab" 
                component={MidtermTab} 
                options={{ title: 'Midterm Tab' }} 
                />
            
        </Stack.Navigator>
    );

  
}
