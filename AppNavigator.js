import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CourseScreen from './screens/CourseScreen';
import SelectCourseScreen from './screens/SelectCourseScreent';
import LoginScreen from './screens/LoginScreen';
import FlashScreen from './screens/PlashScreen';
import SectionScreen from './screens/SectionScreen';
import TestScreen from './screens/TestScreent';
import ProfileScreen from './screens/ProfileScreen';
import WordDetailScreen from './screens/WordDetailScreen';
import SettingScreen from './screens/SettingScreen';

import {
  COURSE_SCREEN,
  SELECT_COURSE_SCREENT,
  LOGIN_SCREEN,
  TEST_SCREEN,
  SECTION_SCREEN,
  SELECT_LANGUAGE,
  FLASH_SCREEN,
  WORD_DETAIL_SCREEN,
  PROFILE_SCREEN,
  SETTING_SCREEN,
} from './config/ScreenName';
import MenuIMG from './asset/menu.png';
import ProfileIMG from './images/user.png';
import SettingsIMG from './images/gear.png';
import Cancel from './images/cancel.png';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const screenWidth = percent => (deviceWidth * percent) / 100;
const screenHeight = percent => (deviceHeight * percent) / 100;

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={FLASH_SCREEN}
          component={FlashScreen}
          options={({navigation}) => ({
            title: 'Mimi kara oboeru N3',
            headerStyle: {
              backgroundColor: '#2a3546',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
        <Stack.Screen
          name={TEST_SCREEN}
          component={TestScreen}
          options={({navigation}) => ({
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
          })}
        />
        <Stack.Screen
          name={SECTION_SCREEN}
          component={SectionScreen}
          options={({navigation}) => ({
            title: 'Mimi kara oboeru N3',
            headerStyle: {
              backgroundColor: '#2a3546',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
        <Stack.Screen
          name={COURSE_SCREEN}
          component={CourseScreen}
          options={({navigation}) => ({
            title: 'Mimi kara ooeru N3',
            headerStyle: {
              backgroundColor: '#2a3546',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(SELECT_COURSE_SCREENT);
                }}>
                <Image style={styles.header} source={MenuIMG} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(PROFILE_SCREEN);
                }}>
                <Image style={styles.profile} source={ProfileIMG} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen
          name={SELECT_COURSE_SCREENT}
          component={SelectCourseScreen}
          options={({navigation}) => ({
            title: 'Khóa học',
            headerStyle: {
              backgroundColor: '#2a3546',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
        <Stack.Screen
          name={WORD_DETAIL_SCREEN}
          component={WordDetailScreen}
          options={({navigation}) => ({
            title: '1/380',
            headerStyle: {
              backgroundColor: '#2a3546',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
        <Stack.Screen
          name={PROFILE_SCREEN}
          component={ProfileScreen}
          options={({navigation}) => ({
            title: 'Hồ sơ',
            headerStyle: {
              backgroundColor: '#2a3546',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(SETTING_SCREEN);
                }}>
                <Image style={styles.settings} source={SettingsIMG} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name={SETTING_SCREEN}
          component={SettingScreen}
          options={({navigation}) => ({
            title: 'Cài đặt',
            headerStyle: {
              backgroundColor: '#2a3546',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const styleTitle = (navigation, ScreenName) => ({
//   title: 'Mimi kara oboeru N3',
//   headerStyle: {
//     backgroundColor: '#2a3546',
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
//   // headerLeft: () => (
//   //   <TouchableOpacity
//   //     onPress={() => {
//   //       navigation.navigate(ScreenName);
//   //     }}>
//   //     <Image style={styles.header} source={MenuIMG} />
//   //   </TouchableOpacity>
//   // ),
//   // headerRight: () => (
//   //   <TouchableOpacity
//   //     onPress={() => {
//   //       navigation.navigate(PROFILE_SCREEN);
//   //     }}>
//   //     <Image style={styles.profile} source={ProfileIMG} />
//   //   </TouchableOpacity>
//   // ),
// });

const styles = StyleSheet.create({
  header: {
    marginLeft: 25,
    width: 20,
    height: 20,
  },
  profile: {
    height: 24,
    width: 24,
    marginRight: screenWidth(4),
  },
  settings: {
    height: 24,
    width: 24,
    marginRight: screenWidth(4),
  },
  cancel: {
    height: 24,
    width: 24,
    marginLeft: screenWidth(4),
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
});
