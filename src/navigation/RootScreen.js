/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
  TransitionPresets,
} from '@react-navigation/stack';
import Account from '../screen/Login/Account';
import Resgister from '../screen/Resgister/Resgister';
import {verticalScale} from 'react-native-size-matters';
import {RFValue} from 'react-native-responsive-fontsize';
import ActionListView from '../screen/Login/ActionListView';
import Modalbottom from '../screen/Login/Modalbottom';
import Login from '../screen/Login/Login';
import {transform} from '@babel/core';

const Stack = createStackNavigator();

const {width, height} = Dimensions.get('window');
const RootScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        headerMode={false}
        initialRouteName={'Home'}
        screenOptions={{
          cardStyle: {backgroundColor: 'transparent'},
          cardStyleInterpolator: ({current, next, layouts}) => {
            return {
              cardStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.View, 1],
                    }),
                  },
                ],
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            };
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Account}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Resgister"
          component={Resgister}
          options={{
            headerStyle: {
              height: verticalScale(70),
            },
            headerTitleStyle: {
              fontSize: RFValue(24, height),
            },
            headerShown: true,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Modal" component={Modalbottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootScreen;
