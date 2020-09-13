import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function ExSpacialScreen({ navigation }) {
    

    return (
    <View style={{ flex : 1 , flexDirection : 'column' }}>

        <View style={{ flex : 1 , flexDirection : 'column' }}>      
          <View style={{ backgroundColor : '#FFEBB6' , flex : 1  }}></View>
        </View>

        <View style={{ flex : 2 , flexDirection : 'row' }}>  
        
            <View style={{ flex : 1 , flexDirection : 'row' }}>
                <View style={{ backgroundColor : '#8BD7B1' , flex: 1 }}></View>
            </View>
        
            <View style={{ flex : 2 , flexDirection : 'column' }}>
                <View style={{ backgroundColor : '#FE706E' , flex: 2 }}></View>
                <View style={{ flex : 2 , flexDirection : 'row' }}>
                    <View style={{ backgroundColor : '#FFCB65' , flex: 1 }}></View>
                    <View style={{ backgroundColor : '#FE706E' , flex: 1 }}></View>
                </View>
            </View>

        </View>

    </View>
    );
}
