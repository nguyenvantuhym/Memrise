import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, Button} from 'react-native';
import logo from '../../images/unnamed.png';
import facebook from '../../images/facebook.png';
import gg from '../../images/symbol.png';
import email from '../../images/mail.png';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const screenWidth = percent => (percent * deviceWidth) / 100;
const screenHeight = percent => (percent * deviceHeight) / 100;

export default function Loginfg() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoImage} source={logo} />
      </View>
      <View style={styles.buttonLogin}>
        <View style={styles.btnF}>
          <Image style={styles.img} source={facebook} alt="facebook" />
          <Button title="Đăng nhập bằng facebook" color="#485a96" />
        </View>
        <View style={styles.btnG}>
          <Image style={styles.img} source={gg} alt="google" />
          <Button title="Đăng nhập bằng google" color="#dc4e41" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc000',
    height: screenHeight(100),
    width: screenWidth(100),
  },
  logoImage: {
    height: screenWidth(70),
    width: screenWidth(70),
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: screenWidth(5),
    paddingTop: screenHeight(20),
  },
  btnF: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: screenHeight(6),
    width: screenWidth(80),
    borderRadius: 5,
    marginLeft: screenWidth(10),
    paddingLeft: screenWidth(5),
    marginBottom: screenHeight(1),
  },
  btnG: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: screenHeight(6),
    width: screenWidth(80),
    borderRadius: 5,
    marginLeft: screenWidth(10),
    paddingLeft: screenWidth(5),
  },
  buttonLogin: {
    flex: 1,
    flexDirection: 'column',
  },
  img: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
