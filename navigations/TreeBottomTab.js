import * as React from 'react';
import { View, Text, Button , Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MidtermTab from '../screens/MidtermTab';
const Tab = createBottomTabNavigator();

export default function TreeBottomTab() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch(route.name){
                        case "FlashScreen" :
                            iconName = 'md-flash';
                            break;
                        case "FlameScreen" : 
                            iconName = 'md-flame';
                            break;
                        case "LeafScreen" : 
                            iconName = 'md-leaf';
                            break;       
                    }
                    
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}

            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
            >
            
            <Tab.Screen 
                name="FlashScreen" 
                component={FlashScreen} 
                options={{  title: 'Pikachu'  }} 
                />                
            <Tab.Screen 
                name="FlameScreen" 
                component={FlameScreen} 
                options={{  title: 'Charmander'  }} 
                
                />
            <Tab.Screen 
                name="LeafScreen" 
                component={LeafScreen} 
                options={{  title: 'Ivysour'  }} 
                />  
            
        </Tab.Navigator>    
            
    );
}

function Tab(){
    return(
        <MidtermTab />
    );
}
