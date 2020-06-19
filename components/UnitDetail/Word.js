import React from 'react';;
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import tree0 from './../../images/tree0.png';
import thunder from './../../images/thunder.png';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const screenWidth = percent => (deviceWidth * percent) / 100;
const screenHeight = percent => (deviceHeight * percent) / 100;

export default function Word() {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.container}>
        <View>
          <Image style={styles.wordImage} source={tree0} />
        </View>

        <View style={styles.wordContainer}>
          <Text style={styles.word}> 大丈夫 </Text>
          <Text style={styles.mean}> An toàn, chắc chắn </Text>
        </View>
        <View>
          <Image style={styles.thunderImage} source={thunder} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: screenHeight(0.5),
    paddingBottom: screenHeight(1.5),
    borderBottomColor: '#000',
    borderBottomWidth: 0.3,
    paddingLeft: screenWidth(4),
    paddingRight: screenWidth(4),
    marginHorizontal: screenWidth(2),
},
  wordImage: {
    width: 40,
    height: 40,
  },
  thunderImage: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  wordContainer: {
    flexGrow: 1,
    marginLeft: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: screenWidth(3),
  },
  word: {
    textTransform: 'lowercase',
    fontWeight: '700',
    fontSize: 30,
    marginBottom: 3,
  },
  mean: {
    textTransform: 'lowercase',
    fontWeight: '500',
    fontSize: 15,
    paddingLeft: screenWidth(1),
  },
});

