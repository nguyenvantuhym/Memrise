import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HeaderUnit = props => {
  const { headerName } = props;
  return (
    <View style={styles.headerSection}>
      <View style={styles.containerHeader}>
        <View style={styles.leftHeader}>
          <Text style={{ textAlign: 'center', marginTop: 5, color: '#fdfaf3' }}>
            1
          </Text>
        </View>
        <View style={styles.titleHeader}>
          <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 15 }}>
            {headerName}
          </Text>
        </View>
      </View>
      <View style={{ width: '100%', height: 10, backgroundColor: '#afdae3' }} />
    </View>
  );
};
const styles = StyleSheet.create({
  headerSection: {
    flexDirection: 'column',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  containerHeader: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
  },
  leftHeader: {
    flex: 1,
    backgroundColor: '#afdae3',
  },
  titleHeader: {
    flex: 10,
    backgroundColor: '#fff',
  },
});
export default HeaderUnit;
