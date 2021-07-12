import React, {useContext, useState} from 'react';

import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {IconInput} from '../../ui/atoms/InputAtom';
import {FilledButton, TextButton, IconButton} from '../../ui/atoms/ButtonAtom';
import {SubHeading} from '../../ui/atoms/TypoAtom';
import {Auth} from '../core/auth';
import {LogoTitle} from '../../ui/molecules/Title';
import Scaffold from '../../ui/molecules/Scaffold';

const RegisterScreen = ({navigation}) => {
  const {register} = useContext(Auth);
  const [username, setUsername] = useState('');

  return (
    <Scaffold topBar={<LogoTitle />}>
      <SubHeading style={{marginTop: Dimensions.get('screen').height / 5}}>
        What's your name ?
      </SubHeading>
      <IconInput
        style={{marginTop: 10}}
        name="person-outline"
        onChangeText={text => setUsername(text)}
        placeholder={'Type your name...'}
      />
      <TextButton
        style={{marginTop: 20}}
        full={true}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        I already have an account
      </TextButton>
      <FilledButton
        full={true}
        onPress={() => {
          try {
            register(username);
          } catch (e) {
            console.log(e);
          }
        }}>
        Register
      </FilledButton>
    </Scaffold>
  );
};

export default RegisterScreen;
