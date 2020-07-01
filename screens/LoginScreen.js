import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import logo from './../images/logos.png';
import facebook from './../images/facebook.png';
import gg from './../images/symbol.png';
import { MY_COURSE_SCREEN } from './../config/ScreenName';
import { screenHeight, screenWidth } from './../helper/SizeScreen';

import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

// import firestore from '@react-native-firebase/firestore';
import { ContextUser } from './../context/ContextUser';
import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '350479807541-rmgoa2v72ij7f0nakcjn1c1nc4junuml.apps.googleusercontent.com',
});

export default function LoginScreen(props) {
  const { user, setUser } = useContext(ContextUser);
  const { navigation } = props;
  function onAuthStateChanged(user) {
    if (user) {
      setUser(user);
      //console.log(user);
      // navigation.navigate(COURSE_SCREEN);
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'StackMainScreen' }],
        }),
      );
    } else {
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  const onFacebookButtonPress = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };
  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoImage} source={logo} />
      </View>
      <View style={styles.buttonLogin}>
        <TouchableOpacity
          style={styles.btnF}
          onPress={() => {
            onFacebookButtonPress().then(user => {
              console.log(user);
              //setUser(user.user);
            });
          }}>
          <Image style={styles.img} source={facebook} alt="facebook" />
          <Text style={styles.title}>Đăng nhập bằng facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnG}
          onPress={() => {
            onGoogleButtonPress().then(user => {
              console.log(user);
              //this.setState({ name: user.user.displayName });
            });
          }}>
          <Image style={styles.img} source={gg} alt="google" />
          <Text style={styles.title}>Đăng nhập bằng google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc000',
    height: screenHeight(101),
    width: screenWidth(100),
  },
  logoImage: {
    height: screenWidth(50),
    width: screenWidth(50),
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: screenWidth(5),
    paddingTop: screenHeight(10),
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
  title: {
    color: '#fff',
    fontSize: 17,
    paddingLeft: screenWidth(1),
    paddingBottom: 1,
  },
});
