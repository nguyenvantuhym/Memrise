import React from 'react'
import {
    Text ,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
} from "react-native";

import f from '../../images/facebook.png'
import planet from '../../images/planet.png';
import flash from '../../images/splash.png';
import wateringCan from '../../images/watering-can.png';

export default function Unit(){
    
    return( 
        <TouchableOpacity 
            activeOpacity ={0.5}
        >
            <View style ={styles.container}>
                    <Image style={styles.unitImange} source = {planet} />
                    <Text style={styles.unitTitle}> name</Text>
            </View>
        </TouchableOpacity>

    )
  
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:16,
        borderRadius:4,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOpacity:0.3,
        shadowRadius: 1,
        shadowOffset:{width:0, height:0},
        marginBottom :2,
        // backgroundColor :'#00f'
    },
    unitImange:{
        width:100,
        height:100,
        marginBottom:10

    },
    unitTitle:{
        textTransform:'uppercase',
        marginTop :10 ,
        fontWeight: '700',
        fontSize:30
    }
});