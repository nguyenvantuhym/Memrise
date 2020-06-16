import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

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
        <Button
          title="Facebook Sign-In"
          onPress={() => {
            this.onFacebookButtonPress().then(user => {
              console.log(user.user.displayName);
              this.setState({name: user.user.displayName});
            });
          }}
        />
        <Button
          title="Google Sign-In"
          onPress={() => {
            this.onGoogleButtonPress().then(user => {
              console.log(user.user.displayName);
              this.setState({name: user.user.displayName});
            });
          }}
        />
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

export default CourseScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
