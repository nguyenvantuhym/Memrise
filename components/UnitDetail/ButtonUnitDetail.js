import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements';
import {Icon} from 'react-native-elements';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const screenWidth = percent => (deviceWidth * percent) / 100;
const screenHeight = percent => (deviceHeight * percent) / 100;

export default function ButtonUnitDetail() {
  return (
    <View style={styles.container}>
      <View>
        <Button
          buttonStyle={{
            backgroundColor: '#ffc000',
            height: screenHeight(7),
            marginTop: screenHeight(1),
            borderRadius: screenWidth(50),
            paddingHorizontal: screenWidth(5),
          }}
          title="Ôn tập"
          titleStyle={{fontSize: 20}}
        />
      </View>
      <View>
        <Button
          buttonStyle={{
            backgroundColor: '#ffc000',
            height: screenHeight(7),
            marginTop: screenHeight(1),
            borderRadius: screenWidth(7),
            paddingHorizontal: screenWidth(5),
          }}
          title="Từ và cụm từ"
          titleStyle={{fontSize: 20}}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: screenWidth(80),
    marginLeft: screenWidth(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: screenWidth(3),
    paddingTop: screenWidth(1),
  },
});

