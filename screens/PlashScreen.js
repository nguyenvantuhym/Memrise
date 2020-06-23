import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import logo from './../images/logos.png';
import Cancel from './../images/cancel.png';
import {
  LOGIN_SCREEN,
  COURSE_SCREEN,
  MY_COURSE_SCREEN,
} from '../config/ScreenName';
import { Context } from './../context/ContextUser';
import { screenWidth, screenHeight } from './../helper/SizeScreen';

export default function PlashScreen({ navigation }) {
  const { setUser } = useContext(Context);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: ' ',
      headerStyle: {
        backgroundColor: '#80d0bb',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(COURSE_SCREEN);
          }}>
          <Image style={styles.cancel} source={Cancel} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.scores}>
          <Text style={styles.number}>10</Text>
        </View>
      ),
    });
  }, [navigation]);

  function onAuthStateChanged(userRes) {
    if (userRes) {
      setUser(userRes);
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: MY_COURSE_SCREEN }],
        }),
      );
    } else {
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoImage} source={logo} />
      </View>
      <View style={styles.containerSlogan}>
        <Text style={styles.slogan}>Học một ngoại ngữ. Gặp gỡ cả thế giới</Text>
      </View>
      <View style={styles.buttomLogin}>
        <TouchableOpacity>
          <View style={styles.btnSelectLanguage}>
            <Text style={styles.btnText}>Chọn một ngôn ngữ để học</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerlogin}>
          <Text>Đã có tài khoản</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.replace(LOGIN_SCREEN);
            }}>
            <Text style={styles.LoginText}>Đăng nhập ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc000',
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
  },
  logoImage: {
    height: screenWidth(40),
    width: screenWidth(40),
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: screenHeight(2),
  },
  containerSlogan: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slogan: {
    width: '80%',
    color: '#2b3648',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  buttomLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  containerlogin: {
    marginTop: 30,
  },
  LoginText: {
    fontWeight: '700',
    marginTop: 10,
  },
  btnSelectLanguage: {
    backgroundColor: '#2b3648',
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  scores: {
    paddingHorizontal: screenWidth(7),
    paddingTop: screenWidth(1),
    paddingBottom: screenWidth(1),
    backgroundColor: '#78c5b0',
    marginRight: 10,
    borderRadius: screenWidth(4),
  },
  number: {
    color: '#2a3546',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cancel: {
    height: 24,
    width: 24,
    marginLeft: screenWidth(4),
  },
});
