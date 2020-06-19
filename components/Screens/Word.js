import React from 'react'
import {
    Text ,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

export default function Word (){
    return( 
        <TouchableOpacity 
            activeOpacity ={0.5}
        >
            <View style ={styles.container}>
                    <Image style={styles.wordImage}  />
                    <View style ={styles.wordContainer}>
                     
                        <Text style={styles.word} >  {word} </Text>
                        <Text style={styles.mean} > {mean} </Text>
                    </View>
                            


            {  miss&&<Image style={styles.thunderImage} source = {thunder}   />}
                   
                    
            </View>
           

        </TouchableOpacity>

    )
  
}

const styles = StyleSheet.create({
    container:{
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'#fff',
        marginTop:5,
        marginBottom :5,
        paddingBottom :3,
        borderBottomColor: '#000',
        borderBottomWidth:0.3,
       
    },
    wordImage:{
        width:40,
        height:40,
    },
    thunderImage:{
        width:30,
        height:30,
        marginRight:5
    },
    wordContainer:{
        flexGrow :1,
        marginLeft :3
    },
    word:{
        textTransform:'lowercase',           
        fontWeight: '700',
        fontSize:30,
        marginBottom :3,
    },
    mean:{
        textTransform:'lowercase',           
        fontWeight: '500',
        fontSize:15
    }

});