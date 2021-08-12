/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {Images} from '../../../assets';
import {colors} from '../../Config/style';

const {height} = Dimensions.get('window');
const Resgister = () => {
  const RBSheetRef = useRef();
  const [mobi, setMobi] = useState('84');
  return (
    <View style={{flex: 1}}>
      <View style={{height: verticalScale(10)}} />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          paddingHorizontal: scale(12),
        }}>
        <View style={{paddingVertical: verticalScale(35)}}>
          <Text style={{fontSize: RFValue(20, height), fontWeight: 'bold'}}>
            {'Welcome to bTaskee'}
          </Text>
          <View style={{height: verticalScale(12)}} />
          <Text style={{fontSize: RFValue(18, height)}}>
            {'Create  account to use our service'}
          </Text>
          <View style={{height: verticalScale(12)}} />
          <Text style={{fontSize: RFValue(18, height), fontWeight: 'bold'}}>
            {'Frist and last name'}
          </Text>
          <View style={{height: verticalScale(10)}} />
          <TextInput
            style={{
              borderWidth: moderateVerticalScale(1),
              borderColor: colors.colorGrayBgr,
              borderRadius: moderateVerticalScale(6),
              height: verticalScale(38),
            }}
          />
          <View
            style={{alignItems: 'flex-end', paddingVertical: verticalScale(4)}}>
            <Text
              style={{color: colors.redStar, fontSize: RFValue(13, height)}}>
              {'Required Information'}
            </Text>
          </View>
          <View style={{height: verticalScale(8)}} />
          <Text style={{fontSize: RFValue(18, height), fontWeight: 'bold'}}>
            {'Phone number'}
          </Text>
          <View style={{height: verticalScale(40), flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: '30%',
                height: '100%',
                backgroundColor: colors.colorGrayBgr,
                paddingVertical: verticalScale(10),
                paddingHorizontal: scale(5),
                alignItems: 'center',
              }}>
              <Image
                source={Images.imgProfile}
                style={{
                  width: scale(40),
                  height: verticalScale(30),
                  resizeMode: 'contain',
                }}
              />
              <View style={{width: scale(5)}} />
              <Text>{'+' + mobi}</Text>
            </TouchableOpacity>
            <View style={{width: scale(8)}} />
            <TextInput
              style={{
                flex: 1,
                borderWidth: moderateVerticalScale(1),
                borderColor: colors.colorGrayBgr,
                borderRadius: moderateVerticalScale(6),
                height: verticalScale(38),
              }}
            />
          </View>
          <View style={{height: verticalScale(15)}} />
          <Text>{'Email'}</Text>
          <View style={{height: verticalScale(10)}} />
          <TextInput
            style={{
              borderWidth: moderateVerticalScale(1),
              borderColor: colors.colorGrayBgr,
              borderRadius: moderateVerticalScale(6),
              height: verticalScale(38),
            }}
          />
          <View style={{height: verticalScale(15)}} />
          <Text>{'Referral code'}</Text>
          <View style={{height: verticalScale(10)}} />
          <TextInput
            style={{
              borderWidth: moderateVerticalScale(1),
              borderColor: colors.colorGrayBgr,
              borderRadius: moderateVerticalScale(6),
              height: verticalScale(38),
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            paddingVertical: verticalScale(10),
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              height: verticalScale(30),
            }}>
            <Text style={{fontSize: RFValue(16, height)}}>
              {'I agree with these Terms & Policy of bTaskee'}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              height: verticalScale(35),
              backgroundColor: colors.colorGrayBgr,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Resgister;
