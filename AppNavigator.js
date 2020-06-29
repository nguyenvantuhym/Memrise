import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CourseScreen from './screens/CourseScreen';
import SelectCourseScreen from './screens/ListCourseScreent';
import LoginScreen from './screens/LoginScreen';
import FlashScreen from './screens/PlashScreen';
import SectionScreen from './screens/UnitScreen';
import TestScreen from './screens/TestScreent';
import ProfileScreen from './screens/ProfileScreen';
import WordDetailScreen from './screens/WordDetailScreen';
import SettingScreen from './screens/SettingScreen';
import MyCourseScreen from './screens/MyCourseScreen';
import ChooseWordTestScreen from './screens/ChooseWordTestScreen';

import {
  COURSE_SCREEN,
  LIST_COURSE_SCREEN,
  LOGIN_SCREEN,
  TEST_SCREEN,
  UNIT_SCREEN,
  SELECT_LANGUAGE,
  MY_COURSE_SCREEN,
  FLASH_SCREEN,
  WORD_DETAIL_SCREEN,
  PROFILE_SCREEN,
  SETTING_SCREEN,
  CHOOSE_WORD_TEST_SCREEN,
} from './config/ScreenName';
import MenuIMG from './asset/menu.png';
import ProfileIMG from './images/user.png';
import SettingsIMG from './images/gear.png';
import Cancel from './images/cancel.png';
import { screenHeight, screenWidth } from './helper/SizeScreen';

const StackRoot = createStackNavigator();
const StackMain = createStackNavigator();
const StackLogin = createStackNavigator();

function StackMainScreen() {
  return (
    <StackMain.Navigator>
      <StackMain.Screen
        name={MY_COURSE_SCREEN}
        component={MyCourseScreen}
        options={({ navigation }) => ({
          title: 'Các khóa học của bạn',
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
                navigation.navigate(LIST_COURSE_SCREEN);
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
      <StackMain.Screen
        name={TEST_SCREEN}
        component={TestScreen}
        options={({ navigation }) => ({
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
      <StackMain.Screen
        name={UNIT_SCREEN}
        component={SectionScreen}
        options={({ navigation }) => ({
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
      <StackMain.Screen
        name={COURSE_SCREEN}
        component={CourseScreen}
        options={({ navigation }) => ({
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
                navigation.navigate(MY_COURSE_SCREEN);
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

      <StackMain.Screen
        name={LIST_COURSE_SCREEN}
        component={SelectCourseScreen}
        options={({ navigation }) => ({
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
      <StackMain.Screen
        name={WORD_DETAIL_SCREEN}
        component={WordDetailScreen}
        options={({ navigation }) => ({
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
      <StackMain.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={({ navigation }) => ({
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
                navigation.navigate(CHOOSE_WORD_TEST_SCREEN);
              }}>
              <Image style={styles.settings} source={SettingsIMG} />
            </TouchableOpacity>
          ),
        })}
      />
      <StackMain.Screen
        name={SETTING_SCREEN}
        component={SettingScreen}
        options={({ navigation }) => ({
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
      <StackMain.Screen
        name={CHOOSE_WORD_TEST_SCREEN}
        component={ChooseWordTestScreen}
        options={({ navigation }) => ({
          title: ' ',
          headerStyle: {
            backgroundColor: '#95d9e6',
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
            <View style={styles.scoresChoose}>
              <Text style={styles.number}>10</Text>
            </View>
          ),
        })}
      />
    </StackMain.Navigator>
  );
}
function LoginStackScreen() {
  return (
    <StackLogin.Navigator mode="modal" headerMode="none">
      <StackLogin.Screen name={FLASH_SCREEN} component={FlashScreen} />
      <StackLogin.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    </StackLogin.Navigator>
  );
}

function RootStackScreen() {
  return (
    <NavigationContainer>
      <StackRoot.Navigator mode="modal" headerMode="none">
        <StackRoot.Screen name={'STACK_LOGIN'} component={LoginStackScreen} />
        <StackRoot.Screen
          name="StackMainScreen"
          component={StackMainScreen}
          options={{ headerShown: false }}
        />
      </StackRoot.Navigator>
    </NavigationContainer>
  );
}

export default RootStackScreen;

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
  scoresChoose: {
    paddingHorizontal: screenWidth(7),
    paddingTop: screenWidth(1),
    paddingBottom: screenWidth(1),
    backgroundColor: '#ace6f1',
    marginRight: 10,
    borderRadius: screenWidth(4),
  },
  number: {
    color: '#2a3546',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
