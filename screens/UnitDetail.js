import React from 'react'
import {
    Text ,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from "react-native";

import Word from '../components/UnitDetail/Word';
import TitleUnitDetail from '../components/UnitDetail/TitleUnitDetail';
import ButtonUnitDetail from '../components/UnitDetail/ButtonUnitDetail.js';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (deviceWidth * percent)/100;
const screenHeight = (percent) => (deviceHeight * percent)/100;

export default function UnitDetail () {
    return (
        <View>
          <ScrollView style={{height: screenHeight(90)}}>
            <TitleUnitDetail/>
                <Word/>
                <Word/>
                <Word/>
                <Word/>
                <Word/>
                <Word/>
                <Word/>
                <Word/>
        </ScrollView>
    
            <View>
                <ButtonUnitDetail/>
            </View>
        </View>
    )
}