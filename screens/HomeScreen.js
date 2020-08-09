import * as React from 'react';
import { View, Text, Button,TouchableOpacity} from 'react-native';



export default function HomeScreen({ navigation }) {
    

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex : 1 , alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('BmiScreen') } >                    
                    <Text style={{ padding : 10 }}>Go to BMI Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('SecondBottomTab') } >                    
                    <Text style={{ padding : 10 }}>Go to Second BottomTab</Text>
                </TouchableOpacity>
            </View>  
            <View>                
                <Button  
                    onPress={() => navigation.navigate('BmiScreen')}
                    title="Next"
                    color=""
                    />
            </View>                            
        </View>
    );
}
