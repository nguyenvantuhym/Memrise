import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, Button} from 'react-native';

import logo from '../../images/unnamed.png';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const screenWidth = percent => (percent * deviceWidth) / 100;
const screenHeight = percent => (percent * deviceHeight) / 100;

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoImage} source={logo} />
        <Text style={styles.slogan}>Học một ngoại ngữ. Gặp gỡ cả thế giới</Text>
      </View>
      <View style={styles.buttomLogin}>
        <Button title="Chọn một ngôn ngữ để học" color="#2b3648" />
        <View style={styles.login}>
          <Text>Đã có tài khoản</Text>
          <Text style={{fontWeight: '700'}}>Đăng nhập ngay</Text>
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
  slogan: {
    color: '#2b3648',
    fontSize: 20,
    fontWeight: '700',
  },
  buttomLogin: {
    flex: 1,
    justifyContent: 'center',
    width: screenWidth(100),
    paddingTop: screenHeight(40),
  },
  btn: {
    marginHorizontal: screenWidth(5),
    width: screenWidth(80),
    height: screenHeight(10),
  },
  login: {
    marginBottom: screenHeight(10),
    marginLeft: screenWidth(40),
    marginTop: screenHeight(3),
  },
});
