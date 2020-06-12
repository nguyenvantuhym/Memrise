import React from 'react';
import { View, Text} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';


function progressSection() {
    return (
      <View style={{  marginTop: 50, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={10}
            color="#153f35"
            shadowColor="#d9ebe1"
            bgColor="#81d0bb"
          >
          <Text style={{ fontSize: 18 }}>{'30%'}</Text>
          </ProgressCircle>
          <Text style={{marginTop: 20}}> 9 - Unit09 - Danh tu</Text>
      </View>
    );
  }
  export default progressSection;
