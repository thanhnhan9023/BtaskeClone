/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../Config/style';
import Icon, {TypeIcon} from '../../Config/Icon';
import ActionListcomponent from './ActionListcomponent';
import Resgister from '../Resgister/Resgister';
import { useNavigation } from '@react-navigation/native';

const View1 = () => {
  return <View style={{paddingVertical: verticalScale(200)}} />;
};

const ActionListView = () => {
  const datanew = [
    {
      tile: 'Basic InFormation',
      content: View1,
      check: false,
    },
    {
      tile: 'Basic InFormation',
      content: View1,
      check: false,
    },
    {
      tile: 'Basic InFormation',
      content: View1,
      check: false,
    },
  ];
  const [data, setData] = useState(datanew);
  const [isView, setIsView] = useState(false);
  const [high, setHigh] = useState(0);
  const navigation = useNavigation();
  console.log(data);
  return (
    <View style={{flex: 1, backgroundColor: colors.colorGrayBgr}}>
      <View
        style={{height: verticalScale(80), backgroundColor: colors.greenE}}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
        <Text>{'Nhan modal'}</Text>
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: scale(20),
          paddingVertical: verticalScale(20),
        }}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                let a = [...data];
                a[index] = {...a[index], check: !a[index].check};
                setData(a);
              }}>
              <ActionListcomponent
                isView={item.check}
                height={70}
                content={item.content}
              />

              <View style={{height: verticalScale(20)}} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ActionListView;
