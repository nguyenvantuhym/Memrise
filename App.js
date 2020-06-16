import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CourseScreen from './screens/CourseScreen';
import SelectCourseScreen from './screens/SelectCourseScreent';
import LoginScreen from './screens/LoginScreen';
import {
  COURSE_SCREEN,
  SELECT_COURSE_SCREENT,
  LOGIN_SCREEN,
} from './config/ScreenName';
import MenuIMG from './asset/menu.png';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={LOGIN_SCREEN}
          component={LoginScreen}
          options={({navigation}) =>
            styleTitle(navigation, SELECT_COURSE_SCREENT)
          }
        />
        <Stack.Screen
          name={COURSE_SCREEN}
          component={CourseScreen}
          options={({navigation}) =>
            styleTitle(navigation, SELECT_COURSE_SCREENT)
          }
        />
        <Stack.Screen
          name={SELECT_COURSE_SCREENT}
          component={SelectCourseScreen}
          options={({navigation}) => styleTitle(navigation, COURSE_SCREEN)}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
      <Image
        style={{
          marginLeft: 25,
          width: 20,
          height: 20,
        }}
        source={MenuIMG}
      />
    </TouchableOpacity>
  ),
});
