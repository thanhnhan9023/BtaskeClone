/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const Modalbottom = () => {
  const navigation = useNavigation();
  return (
    <View
      onTouchEnd={() => navigation.goBack()}
      style={{flex:1, backgroundColor: 'red'}}
    />
  );
};

export default Modalbottom;
