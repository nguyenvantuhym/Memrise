import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { Button } from 'react-native-elements';
import logo from "../../images/unnamed.png";
import facebook from "../../images/facebook.png";
import gg from from "../../images/symbol.png";
import email from "../../images/mail.png"

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const screenWidth = (percent) => (percent * deviceWidth) / 100;
const screenHeight = (percent) => (percent * deviceHeight) / 100;

export default function Loginfg() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={logo} />

            </View>
            <View style={styles.buttonLogin}>
                <View>
                    <Image style={styles.img} source={facebook} alt="facebok"/>
                    <Button 
                        title="Đăng nhập bằng facebook"
                        color="#2b3648"
                        />
                </View>
                <View>
                    <Image style={styles.img} source={gg} alt="google"/>
                    <Button 
                        title="Đăng nhập bằng google"
                        color="#2b3648"
                        />
                </View>
                <View>
                    <Image style={styles.img} source={email} alt="email"/>
                    <Button 
                        title="Đăng nhập bằng email"
                        color="#2b3648"
                        />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffc000',
        height: screenHeight(100),
        width: screenWidth(100)
    },
    logoImage: {
        height: screenWidth(70),
        width: screenWidth(70)
    },
    logo: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: screenWidth(5),
        paddingTop: screenHeight(20)
    },
    btn: {
        marginHorizontal: screenWidth(5),
        width: screenWidth(80),
        height: screenHeight(10)
    },
    buttonLogin: {
        flex: 1,
        flexDirection: 'column'
    }
    ,
    img: {
        width: 16,
        height: 16
    }
})