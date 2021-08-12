/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../Config/style';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const Login = props => {
  const {onPress = () => {}} = props;
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      }}>
      <View
        // view có absolute để ẩn view
        onTouchEnd={() => {
          navigation.goBack();
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'transparent',
        }}
      />
      <View
        style={{
          height: verticalScale(250),
          width: '100%',
          backgroundColor: colors.white,
        }}>
        <Text>{'Login or register'}</Text>
      </View>
    </View>
  );
};

export default Login;

// import React, {Component} from 'react';
// import {StyleSheet, Text, View, Button} from 'react-native';
// import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';
// const renderContent = () => (
//   <View
//     style={{
//       backgroundColor: 'white',
//       padding: 16,
//       height: 450,
//     }}>
//     <Text>Swipe down to close</Text>
//   </View>
// );
// const Login = () => {
//   const sheetRef = React.useRef(null);
//   return (
//     <>
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'papayawhip',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <Button
//           title="Open Bottom Sheet"
//           onPress={() => sheetRef.current.snapTo(0)}
//         />
//       </View>
//       <BottomSheet
//         ref={sheetRef}
//         snapPoints={[450, 300, 0]}
//         borderRadius={10}
//         renderContent={renderContent}
//       />
//     </>
//   );
// };

// export default Login;
