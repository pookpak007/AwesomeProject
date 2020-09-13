import * as React from 'react';
import { View, Text, Button , Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';


export default function MidtermFirstScreen() {
    const [cha , setCha] = useState("");
    const [charac , setCharac] = useState("");
    const compute = () => {
        
        console.log(cha);
        setCharac(cha); 
       
        
       };

    return (
        <View style={{ flex: 1,flexDirection:'column',justifyContent:'space-around'}}>
            
            <View style={{flex:1,flexDirection:'column',alignItems:'flex-end',backgroundColor:"#50E3C2",padding:20}}>
                <Text>Text</Text>
                
    <Text>{charac.length}Characters</Text>
                

            </View>

            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Text>Your Name</Text>

                <TextInput style={{height:60,width:200,borderWidth:1}} 
                value={cha}
                onChangeText={ (text) => setCha(text) }
                
                />
                <Button title="SAVE" onPress={compute} />
            </View> 

            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                
            </View> 

            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                
            </View>  

                    
        </View>
    );
}
