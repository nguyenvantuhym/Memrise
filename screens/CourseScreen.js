/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressSection from './../components/progressSection';
import firestore from '@react-native-firebase/firestore';

function MyCourseScreen({route, navigation}) {
  const [listSection, setListSection] = useState([]);
  const id = route.params?.id;
  useEffect(() => {
    if (id !== undefined) {
      firestore().collection('units').where('courseId', '==', id).get()
        .then(res1 => {
          let resListSection = [];
          res1.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            resListSection.push({ id: doc.id, ...doc.data() });
          });
          resListSection.sort((a, b) => a.index - b.index);
          setListSection(resListSection);
        });
    }
  }, [id, setListSection]);

  return (
    <View style={styles.screen}>
      <View style={styles.listSectionCourse}>
        <FlatList
          contentContainerStyle={{paddingBottom: 130}}
          ListEmptyComponent={()=> <View><Text>vantu</Text></View>}
          data={listSection}
          renderItem={({item}) => {
            return <ProgressSection navigation={navigation} unit={item} />;
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <LinearGradient
        colors={['transparent', '#fff']}
        style={styles.LinearGradientStyle}>
        <View />
      </LinearGradient>
    </View>
  );
}
export default MyCourseScreen;

const styles = StyleSheet.create({
  listSectionCourse: {
    height: '100%',
    flex: 1,
  },
  screen: {
    position: 'relative',
    backgroundColor: '#fdfaf3',
    height: '100%',
  },
  LinearGradientStyle: {
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '100%',
  },
});
