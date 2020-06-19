import React from 'react';
import {ActivityIndicator, StyleSheet, Dimensions, View} from 'react-native';
import {Image, ListItem, Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

// // import avatar from '../assets/HoaHuongDuong.jpg';
import userProFile from './../asset/user.png';
import EmailProfile from './../asset/email.png';

const deviceWidth = Dimensions.get('window').width;
const screen = percent => (deviceWidth * percent) / 100;

export default class ProfileScreen extends React.Component {
  // static navigationOptions = () => ({
  //   title: 'Profile',
  //   headerTitleAlign: 'center',
  //   headerTitleStyle: {
  //     color: 'white',
  //   },
  //   headerTintColor: 'white',
  //   headerStyle: {
  //     backgroundColor: '#006265',
  //   },
  // });

  constructor(props) {
    super(props);
    this.state = {infoUser: {username: ''}};
  }

  componentDidMount = () => {
    // const { navigation } = this.props;
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({infoUser: user});
      } else {
        // No user is signed in
      }
    });
  };

  logout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        // navigation.replace(LOGIN_SCREEN);
      });
  };

  render() {
    const {infoUser} = this.state;
    console.log(infoUser.photoURL);
    return (
      <View style={styles.container}>
        <View style={styles.ava}>
          <Image
            source={{uri: `${infoUser.photoURL}?width=800&height=800`}}
            style={styles.image}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View>
          <ListItem
            leftAvatar={
              <Image
                source={userProFile}
                style={styles.email}
                PlaceholderContent={<ActivityIndicator />}
              />
            }
            title="Tên của bạn"
            subtitle={infoUser.displayName}
            bottomDivider
          />
          <ListItem
            leftAvatar={
              <Image
                source={EmailProfile}
                style={styles.email}
                PlaceholderContent={<ActivityIndicator />}
              />
            }
            title="Email"
            subtitle={infoUser.email}
            bottomDivider
          />
        </View>
        <Button
          onPress={this.logout}
          title="Logout"
          type="clear"
          titleStyle={styles.logout}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: screen(2),
  },
  image: {
    width: screen(30),
    height: screen(30),
    borderRadius: screen(50),
  },
  ava: {
    paddingLeft: screen(35),
    paddingTop: screen(2),
    marginBottom: screen(5),
  },
  email: {
    width: screen(10),
    height: screen(10),
  },
  logout: {
    color: '#e22525',
    fontSize: 20,
  },
});
