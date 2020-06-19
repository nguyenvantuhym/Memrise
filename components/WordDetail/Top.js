import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import tree0 from '../../images/demo.png';
import speaker from './../../images/speaker.png';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const screenWidth = percent => (deviceWidth * percent) / 100;
const screenHeight = percent => (deviceHeight * percent) / 100;

const Top = props => (
  <View style={styles.top}>
    <View style={styles.topLeft}>
      <Text style={styles.kanjiText}>Kanji</Text>
      <Text>y nghia</Text>
      <Image source={speaker} style={styles.speaker} />
      <View>
        <Text style={{color: 'red', fontWeight: 'bold'}}>KANJI</Text>
        <Text>Mean</Text>
      </View>
    </View>
    <Image style={styles.wordImage} source={tree0} />
  </View>
);

const Center = props => (
  <View style={styles.center}>
    <View
      style={{
        height: screenWidth(60),
        width: screenWidth(94),
        backgroundColor: '#FFF',
        justifyContent:'center',
        alignItems: 'center'
      }}>
      <Text>sdkskdfj</Text>
    </View>
    <View style={{height: screenHeight(8)}} />
  </View>
);

const ButtonBottom = props => (
  <View style={styles.bottom}>
    <Button
      title="TIẾP TỤC"
      type="outline"
      buttonStyle={{
        backgroundColor: '#ffc000',
        borderRadius: 15,
        width: screenWidth(90),
        height: screenHeight(8),
      }}
      titleStyle={{fontSize: 20, color: '#000', fontWeight: '700'}}
    />
  </View>
);
export default function WordDetail() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: '#f3f3f3',
      }}>
      <View style={styles.container}>
        <Top />
        <Center />
      </View>
      <ButtonBottom/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  topLeft: {
    flexDirection: 'column',
    flex: 8,
  },
  top: {
    flex: 2,
    flexDirection: 'row',
    width: '90%',
  },
  speaker: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  bottom: {
    flex: 3,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    bottom: screenHeight(2.5),
  },
  kanjiText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  wordImage: {
    flex: 2,
    width: 90,
    height: 85,
  },
  center: {
    flex: 4,
    width: '90%',
    alignItems: 'center',
  },
});
