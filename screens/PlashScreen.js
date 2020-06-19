import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import logo from './../images/unnamed.png';
// import Navigate from './../../helper/navigage';
import {LOGIN_SCREEN, COURSE_SCREEN} from '../config/ScreenName';

const deviceWidth = Dimensions.get('window').width;
const screenWidth = percent => (percent * deviceWidth) / 100;

export default function PlashScreen({navigation}) {
  const [user, setUser] = React.useState();
  function onAuthStateChanged(user) {
    if (user) {
      setUser(user);
      //console.log(user);
      // navigation.navigate(COURSE_SCREEN);
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: COURSE_SCREEN}],
        }),
      );
    } else {
    }
  }
  React.useEffect(() => {
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
        <TouchableOpacity
          onPress={() => {
            // auth()
            //   .signOut()
            //   .then(() => {
            //     console.log('User signed out!');
            //   });
          }}>
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
    height: screenWidth(90),
    width: screenWidth(90),
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
