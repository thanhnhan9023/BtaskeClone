/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import Icon, {TypeIcon} from '../../Config/Icon';
import {colors} from '../../Config/style';

const ActionListcomponent = props => {
  const {isView = false, height = 0, content = {}} = props;
  return (
    <View
      style={{
        backgroundColor: colors.whiteTwo,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{'Basic InFormation'}</Text>
        {!isView ? (
          <Icon name={'right'} type={TypeIcon.AntDesign} />
        ) : (
          <Icon name={'chevron-down'} type={TypeIcon.Feather} />
        )}
      </View>
      {!isView ? null : (
        <View
          style={{
            backgroundColor: colors.whiteTwo,
          }}>
          {content()}
        </View>
      )}
    </View>
  );
};

export default ActionListcomponent;
