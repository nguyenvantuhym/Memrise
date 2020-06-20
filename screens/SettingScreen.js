import React, {useState} from 'react';;
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Switch,
  Picker,
} from 'react-native';

import facebook from './../images/facebook-7d.png';;
import edit from '../images/edit.png';;
import lightDark from '../images/half.png';;
import star from '../images/star.png';;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const screenWidth = percent => (deviceWidth * percent) / 100;
const screenHeight = percent => (deviceHeight * percent) / 100;

export default function SettingScreen({naviagtion}) {
  const [selectedValue, setSelectedValue] = useState('3');
  const [selectedValueReview, setSelectedValueReview] = useState('5');
  const [isEnabledFacebook, setIsEnabledFacebook] = useState(false);
  const [isEnabledLight, setIsEnabledLight] = useState(false);
  const [isEnabledSort, setIsEnabledSort] = useState(false);
  const [isEnabledAuto, setIsEnabledAuto] = useState(false);
  const toggleSwitchFacebook = () =>
    setIsEnabledFacebook(previousState => !previousState);
  const toggleSwitchLight = () =>
    setIsEnabledLight(previousState => !previousState);
    const toggleSwitchSort = () =>
    setIsEnabledSort(previousState => !previousState);
  const toggleSwitchAuto = () =>
    setIsEnabledAuto(previousState => !previousState);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.first}>
          <View style={styles.content}>
            <Image style={styles.logo} source={star} alt="free" />
            <Text style={styles.title}>
              Tài khoản của bạn: Miễn phí(nâng cấp)
            </Text>
          </View>
          <View style={styles.content}>
            <Image style={styles.logo} source={facebook} alt="free" />
            <Text style={styles.title}>Kết nối với facebook</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabledFacebook ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchFacebook}
              value={isEnabledFacebook}
            />
          </View>
          <View style={styles.content}>
            <Image style={styles.logo} source={edit} alt="free" />
            <Text style={styles.title}>Sửa hồ sơ</Text>
          </View>
          <View style={styles.content}>
            <Image style={styles.logo} source={lightDark} alt="free" />
            <Text style={styles.title}>Chế độ Nền tối</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabledLight ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchLight}
              value={isEnabledLight}
            />
          </View>
        </View>
        <View style={styles.first}>
          <View style={styles.content}>
            <Text style={styles.titleBlock}>HÌNH THỨC KIỂM TRA</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.titleSecond}>Kiểm tra sắp xếp từ</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabledSort ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchSort}
              value={isEnabledSort}
            />
          </View>
        </View>
        <View style={styles.first}>
          <View style={styles.content}>
            <Text style={styles.titleBlock}>CHẾ ĐỘ HỌC TẬP</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.titleSecond}>Từ mỗi tiết học</Text>
            <Picker
              selectedValue={selectedValue}
              style={{height: 20, width: 85}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="3" value="1" />
              <Picker.Item label="5" value="2" />
              <Picker.Item label="7" value="3" />
              <Picker.Item label="10" value="4" />
            </Picker>
          </View>
          <View style={styles.content}>
            <Text style={styles.titleSecond}>Từ mỗi tiết ôn tập</Text>
            <Picker
              selectedValue={selectedValueReview}
              style={{height: 20, width: 85}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValueReview(itemValue)
              }>
              <Picker.Item label="5" value="1" />
              <Picker.Item label="10" value="2" />
              <Picker.Item label="25" value="3" />
              <Picker.Item label="50" value="4" />
            </Picker>
          </View>
          <View style={styles.content}>
            <Text style={styles.titleSecond}>Tự động phát hiện</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabledAuto ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchAuto}
              value={isEnabledAuto}
            />
          </View>
        </View>

        <View style={styles.first}>
          <View style={styles.content}>
            <Text style={styles.titleBlock}>PHIÊN BẢN</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.titleSecond}>1.0_MemriseJP_AT </Text>
          </View>
        </View>
        <View style={styles.first}>
          <View style={styles.content}>
            <Text style={styles.titleSecond}>Điều khoản sử dụng </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.titleSecond}>Chính sách Bảo Mật</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.titleSecond}>Trợ giúp</Text>
          </View>
        </View>
        <View style={styles.first}>
          <View style={styles.content}>
            <Text style={styles.logout}>Đăng xuất</Text>
          </View>
        </View>
      </View>
    </ScrollView>

    );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcfaf2',
    paddingBottom: screenHeight(2),
  },
  first: {
    backgroundColor: '#fff',
    paddingTop: screenHeight(2),
    marginTop: screenHeight(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: screenWidth(5),
    paddingBottom: screenHeight(3),
  },
  logo: {
    height: 25,
    width: 25,
  },
  title: {
    flex: 3,
    marginLeft: 10,
  },
  titleSecond: {
    flex: 3,
  },
  titleBlock: {
    flex: 3,
    color: '#2a3546',
    fontWeight: 'bold',
  },
  logout: {
    color: '#ad0707',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

;