import React from 'react';
import {Logo} from '../atoms/LogoAtom';
import {Heading} from '../atoms/TypoAtom';
import {View} from 'react-native';
import {name as appName} from '../../../app.json';
import {useTheme} from 'react-native-paper';

const makeTitle = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const LogoTitle = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Logo style={{marginRight: 10}} />
      <Heading style={{paddingTop: 7}}>{makeTitle(appName)}</Heading>
    </View>
  );
};
const TextTitle = () => {
  const {colors} = useTheme();
  return <Heading>{makeTitle(appName)}</Heading>;
};

export {LogoTitle, TextTitle};
