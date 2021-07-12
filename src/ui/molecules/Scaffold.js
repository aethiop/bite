/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Platform} from 'react-native';
import {useTheme} from 'react-native-paper';

const Scaffold = ({topBar, children}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',

        backgroundColor: colors.background,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}>
      <View
        syle={{
          height: 32,
          flex: 1,
          flexDirection: 'row',
          alignContent: 'center',
        }}>
        {topBar}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Scaffold;
