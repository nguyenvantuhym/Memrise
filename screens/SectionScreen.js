import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  PixelRatio,
  Image,
} from 'react-native';
import icon from './../asset/demo2.png';
import LinearGradient from 'react-native-linear-gradient';
const deviceHeight = Dimensions.get('window').height;

const screenHeight = percent => (percent * deviceHeight) / 100;

import firestore from '@react-native-firebase/firestore';

const Content = props => (
  <View style={styleContent.containerContent}>
    <View style={{flex: 2}}>
      <Image source={icon} style={{width: PixelRatio.getPixelSizeForLayoutSize(20), height: PixelRatio.getPixelSizeForLayoutSize(25)}} />
    </View>

    <View style={{flex: 5}}>
      <View style={styleContent.titleContent}>
        <Text style={{fontSize: 17, color: '#373a3c'}}>世話</Text>
      </View>
      <View style={styleContent.descriptionContent}>
        <Text>Trông nom, giúp đỡ</Text>
      </View>
    </View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styleContent.titleContent}>
        <Text>世話</Text>
      </View>
    </View>
  </View>
);
const styleContent = StyleSheet.create({
  titleContent: {
    marginRight: 10,
    justifyContent: 'center',
  },
  containerContent: {
    marginTop: 5,
    padding: 5,
    width: '96%',
    backgroundColor: '#fdfaf3',
    flexDirection: 'row',
    //alignItems: 'center',
  },
  descriptionContent: {
    marginTop: 5,
  },
});

const HeaderSection = props => (
  <View style={styles.headerSection}>
    <View style={styles.containerHeader}>
      <View style={styles.leftHeader}>
        <Text style={{textAlign: 'center', color: '#fdfaf3'}}>1</Text>
      </View>
      <View style={styles.titleHeader}>
        <Text style={{marginLeft: 10}}>{props.headerName}</Text>
      </View>
    </View>
    <View style={{width: '100%', height: 10, backgroundColor: '#afdae3'}} />
  </View>
);

class SectionScreen extends React.Component {
  componentDidMount = async () => {
    // const user = await firestore()
    //   .collection('Users')
    //   .doc('us')
    //   .get();
    // console.log(user.data());
  };

  render() {
    return (
      <View style={styles.screen}>
        <ScrollView>
          <View style={styles.listSectionCourse}>
            <HeaderSection headerName="UNIT02 - Động từ" />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
          </View>
        </ScrollView>
        <LinearGradient
          colors={['transparent', '#fff']}
          style={styles.LinearGradientStyle}>
          <View />
        </LinearGradient>
      </View>
    );
  }
}
export default SectionScreen;
const styles = StyleSheet.create({
  listSectionCourse: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  screen: {
    position: 'relative',
    backgroundColor: '#fdfaf3',
  },
  LinearGradientStyle: {
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '100%',
  },
  containerHeader: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
  },
  headerSection: {
    flexDirection: 'column',
    marginVertical: 15,
    width: '96%',
  },
  titleHeader: {
    flex: 10,
    backgroundColor: '#fff',
  },
  leftHeader: {
    flex: 1,
    backgroundColor: '#afdae3',
  },
});
