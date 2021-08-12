/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Images} from '../../../assets';
import {colors} from '../../Config/style';
import RBSheet from 'react-native-raw-bottom-sheet';
import Login from './Login';
import {useNavigation} from '@react-navigation/native';
import {BottomSheet} from 'react-native-elements';
// import {Modalize} from 'react-native-modalize';

const {width, height} = Dimensions.get('window');
const Account = props => {
  const RBSheetRef = useRef(null);
  const navigation = useNavigation();
  const closeBootom = () => {
    RBSheetRef.current.close();
  };
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.colorGrayBgr,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: verticalScale(5),
          paddingHorizontal: scale(15),
          justifyContent: 'space-between',
          backgroundColor: colors.white,
        }}>
        <Image
          source={Images.imgProfile}
          style={{
            width: scale(80),
            height: verticalScale(80),
            resizeMode: 'contain',
          }}
        />
        <View style={{paddingHorizontal: scale(20)}}>
          <Text style={{fontSize: RFValue(22, height)}}>
            {'Welcome to bTaskee'}
          </Text>
          <View style={{height: verticalScale(15)}} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              backgroundColor: colors.colorGrayBgr,
              padding: moderateVerticalScale(12),
            }}>
            <Text
              style={{
                fontSize: RFValue(18, height),
                color: colors.greenFE,
                fontWeight: 'bold',
              }}>
              {'Login/Create account >'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}} />
      </View>
      <View />
    </View>
  );
};

export default Account;
