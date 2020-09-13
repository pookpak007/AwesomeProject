import * as React from 'react';
import { View, Text, Button , Image} from 'react-native';
import { TouchableOpacity } from 'react-native';


export default function FlexScreen({navigation}) {

    return (
        <View style={{ flex: 1 }}>
             

            <TouchableOpacity  onPress={() => navigation.navigate('Ex01Screen') } >                    
                    <Text style={{ padding : 5 }}>Ex01</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Ex02Screen') } >                    
                    <Text style={{ padding : 5 }}>Ex02</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Ex03Screen') } >                    
                    <Text style={{ padding : 5 }}>Ex03</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Ex04Screen') } >                    
                    <Text style={{ padding : 5 }}>Ex04</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Ex05Screen') } >                    
                    <Text style={{ padding : 5 }}>Ex05</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Ex06Screen') } >                    
                    <Text style={{ padding : 5 }}>Ex06</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Ex07Screen') } >                    
                    <Text style={{ padding : 5 }}>Ex07</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Ex08Screen') } >                    
                    <Text style={{ padding : 5 }}>Ex08</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Ex09Screen') } >                    
                    <Text style={{ padding : 5 }}>Ex09</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Ex10Screen') } >                    
                    <Text style={{ padding : 5 }}>Ex10</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Ex11Screen') } >                    
                    <Text style={{ padding : 5 }}>Ex11</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Ex12Screen') } >                    
                    <Text style={{ padding : 5 }}>Ex12</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('ExSpacialScreen') } >                    
                    <Text style={{ padding : 5 }}>ExSpacial</Text>
            </TouchableOpacity>

            
                                       
        </View>
        
        
    );
}
