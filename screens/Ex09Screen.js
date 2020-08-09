import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function Ex09Screen({ navigation }) {
    

    return (
        <View style={{ flex : 1 , flexDirection : 'column', alignContent:'space-between' }}>
            <View style={{ flex : 1 , flexDirection : 'row',justifyContent:"space-between" ,
                alignItems:'center', alignContent:'space-between' }}>
                <View style={{ backgroundColor : '#50E3C2' , width : 90, height:90 }}></View>
                <View style={{ backgroundColor : '#50E3C2' , width : 90, height:90 }}></View>
                <View style={{ backgroundColor : '#50E3C2' , width : 90, height:90 }}></View>
            </View>
                <View style={{ flex : 1 , flexDirection : 'row',justifyContent:"space-between" ,
                alignItems:'center', alignContent:'space-between' }}>
                <View style={{ backgroundColor : '#4A90E2' , width : 90, height:90 }}></View>
                <View style={{ backgroundColor : '#4A90E2' , width : 90, height:90 }}></View>
                <View style={{ backgroundColor : '#4A90E2' , width : 90, height:90 }}></View>
            </View>
                <View style={{ flex : 1 , flexDirection : 'row',justifyContent:"space-between" ,
                alignItems:'center', alignContent:'space-between' }}>
                <View style={{ backgroundColor : '#9013FE' , width : 90, height:90 }}></View>
                <View style={{ backgroundColor : '#9013FE' , width : 90, height:90 }}></View>
                <View style={{ backgroundColor : '#9013FE' , width : 90, height:90 }}></View>
            </View>
      </View>
    );
}
