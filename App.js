import React, {Component} from 'react';
import {Text, View} from 'react-native';
import RootScreen from './src/navigation/RootScreen';

const App = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <RootScreen />
    </View>
  );
};

export default App;
