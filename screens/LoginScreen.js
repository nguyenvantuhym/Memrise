import React from 'react';
import {Button, View, StyleSheet, Dimensions, Image} from 'react-native';
import logo from './../images/unnamed.png';
import facebook from './../images/facebook.png';
import gg from './../images/symbol.png';
// import email from '../../images/mail.png';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const screenWidth = percent => (percent * deviceWidth) / 100;
const screenHeight = percent => (percent * deviceHeight) / 100;

import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '350479807541-rmgoa2v72ij7f0nakcjn1c1nc4junuml.apps.googleusercontent.com',
});

class CourseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  componentDidMount = async () => {
    LoginManager.logOut();
    // auth()
    //   .signOut()
    //   .then(() => console.log('User signed out!'));
    const user = await firestore()
      .collection('Users')
      .doc('us')
      .get();
    console.log(user.data());
  };

  onFacebookButtonPress = async () => {
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
  onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={styles.logoImage} source={logo} />
        </View>
        <View style={styles.buttonLogin}>
          <View style={styles.btnF}>
            <Image style={styles.img} source={facebook} alt="facebook" />
            <Button
              title="Đăng nhập bằng facebook"
              color="#485a96"
              onPress={() => {
                this.onFacebookButtonPress().then(user => {
                  console.log(user.user.displayName);
                  this.setState({name: user.user.displayName});
                });
              }}
            />
          </View>
          <View style={styles.btnG}>
            <Image style={styles.img} source={gg} alt="google" />
            <Button
              title="Đăng nhập bằng google"
              color="#dc4e41"
              onPress={() => {
                this.onGoogleButtonPress().then(user => {
                  console.log(user.user.displayName);
                  this.setState({name: user.user.displayName});
                });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default CourseScreen;

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
