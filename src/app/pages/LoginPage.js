import React, {useContext, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {FilledButton, TextButton} from '../../ui/atoms/ButtonAtom';
import {IconInput} from '../../ui/atoms/InputAtom';
import {SubHeading} from '../../ui/atoms/TypoAtom';
import {Auth} from '../core/auth';
import {LogoTitle} from '../../ui/molecules/Title';
import Scaffold from '../../ui/molecules/Scaffold';
import {Text, Heading} from '../../ui/atoms/TypoAtom';

const LoginScreen = ({navigation}) => {
  const [key, setKey] = useState('');
  const {login} = useContext(Auth);

  return (
    <Scaffold topBar={<LogoTitle />}>
      <SubHeading style={{marginTop: Dimensions.get('screen').height / 5}}>
        Enter your key !
      </SubHeading>
      <IconInput
        style={{marginTop: 10}}
        name="finger-print"
        onChangeText={text => setKey(text)}
        placeholder={'Paste your key...'}
      />
      <TextButton
        style={{marginTop: 20}}
        full={true}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        New User?
      </TextButton>
      <FilledButton
        full={true}
        onPress={() => {
          try {
            login(JSON.parse(key));
          } catch (e) {
            console.log(e);
          }
        }}>
        Login
      </FilledButton>
    </Scaffold>
  );
};

export default LoginScreen;
