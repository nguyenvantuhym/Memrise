import React from 'react';
import {Context} from './../context/context';
import {LOGIN_SCREEN} from './../config/ScreenName';
import auth from '@react-native-firebase/auth';

class Navigate extends React.Component {
  componentDidMount = () => {
    auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.navigation.navigate(LOGIN_SCREEN);
      }
      console.log('user nhu naof roi');
    });
  };

  render() {
    return (
      <Context.Consumer>
        {({loginState, user}) => {
          console.log(loginState);
          if (loginState === false) {
            //
          }
          return this.props.children;
        }}
      </Context.Consumer>
    );
  }
}

export default Navigate;
