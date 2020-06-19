import * as React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CourseScreen from './screens/CourseScreen';
import SelectCourseScreen from './screens/SelectCourseScreent';
import LoginScreen from './screens/LoginScreen';
import Provider from './context/context';
import FlashScreen from './screens/PlashScreen';
import SectionScreen from './screens/SectionScreen';
import TestScreen from './screens/TestScreent';
import ProfieScreen from './screens/ProfileScreen';

import {
  COURSE_SCREEN,
  SELECT_COURSE_SCREENT,
  LOGIN_SCREEN,
  TEST_SCREEN,
  SECTION_SCREEN,
  SELECT_LANGUAGE,
  FLASH_SCREEN,
} from './config/ScreenName';
import MenuIMG from './asset/menu.png';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'PROFILE_SCREEN'}
            component={ProfieScreen}
            options={({navigation}) => styleTitle(navigation, TEST_SCREEN)}
          />
          <Stack.Screen
            name={TEST_SCREEN}
            component={TestScreen}
            options={({navigation}) => styleTitle(navigation, SECTION_SCREEN)}
          />
          <Stack.Screen
            name={SECTION_SCREEN}
            component={SectionScreen}
            options={({navigation}) => styleTitle(navigation, FLASH_SCREEN)}
          />
          <Stack.Screen
            name={FLASH_SCREEN}
            component={FlashScreen}
            options={({navigation}) => styleTitle(navigation, COURSE_SCREEN)}
          />
          <Stack.Screen
            name={COURSE_SCREEN}
            component={CourseScreen}
            options={({navigation}) => styleTitle(navigation, LOGIN_SCREEN)}
          />
          <Stack.Screen
            name={LOGIN_SCREEN}
            component={LoginScreen}
            options={({navigation}) =>
              styleTitle(navigation, SELECT_COURSE_SCREENT)
            }
          />
          <Stack.Screen
            name={SELECT_COURSE_SCREENT}
            component={SelectCourseScreen}
            options={({navigation}) => styleTitle(navigation, TEST_SCREEN)}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const styleTitle = (navigation, ScreenName) => ({
  title: 'Tên khóa học',
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
        navigation.navigate(ScreenName);
      }}>
      <Image style={styles.header} source={MenuIMG} />
    </TouchableOpacity>
  ),
});

const styles = StyleSheet.create({
  header: {
    marginLeft: 25,
    width: 20,
    height: 20,
  },
});
