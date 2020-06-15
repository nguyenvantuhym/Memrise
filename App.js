import * as React from 'react';
import { View, Text,Image,  Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CourseScreen from './screens/CourseScreen';
import { COURSE_SCREEN } from './config/ScreenName';
import MenuIMG from './asset/menu.png';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={COURSE_SCREEN} component={CourseScreen} options={styleTitle.titleCourseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styleTitle = {
  titleCourseScreen : {
    title: 'My home',
    headerStyle: {
      backgroundColor: '#2a3546',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: () => (
      <View style={{marginRight:5,}}>
        <Image
          style={{
            marginLeft: 8,
            width: 20,
            height: 20
          }}
          source={MenuIMG}
        />
      </View>
      
    ),
  },
}