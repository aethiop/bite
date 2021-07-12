/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  configureFonts,
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const fontConfig = {
  ios: {
    black: {
      fontFamily: 'Dosis-ExtraBold',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Dosis-Bold',
      fontWeight: 'normal',
    },
    semiBold: {
      fontFamily: 'Dosis-SemiBold',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Dosis-Medium',
      fontWeight: 'normal',
    },
    regular: {
      fontFamily: 'Dosis-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Dosis-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Dosis-ExtraLight',
      fontWeight: 'normal',
    },
  },
  android: {
    black: {
      fontFamily: 'Dosis-ExtraBold',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Dosis-Bold',
      fontWeight: 'normal',
    },
    semiBold: {
      fontFamily: 'Dosis-SemiBold',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Dosis-Medium',
      fontWeight: 'normal',
    },
    regular: {
      fontFamily: 'Dosis-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Dosis-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Dosis-ExtraLight',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  ...DarkTheme,
  roundness: 16,
  fonts: configureFonts(fontConfig),
  dark: false,
  colors: {
    ...DarkTheme.colors,
    ...DefaultTheme.colors,
  },
  animation: {
    scale: 1,
  },
};
export default function Main() {
  return (
    <PaperProvider
      settings={{
        icon: props => <Icon {...props} />,
      }}
      theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
