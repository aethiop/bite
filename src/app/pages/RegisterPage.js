import React, {useContext, useState} from 'react';

import {TouchableOpacity, View, Text} from 'react-native';
import {IconInput} from '../../ui/atoms/InputAtom';
import {FilledButton, TextButton, IconButton} from '../../ui/atoms/ButtonAtom';
import {SubHeading} from '../../ui/atoms/TypoAtom';
import {Auth} from '../core/auth';
import {LogoTitle} from '../../ui/molecules/Title';

const RegisterScreen = ({navigation}) => {
  const {register} = useContext(Auth);
  const [username, setUsername] = useState('');

  return (
    <View style={{marginTop: 40, alignItems: 'center'}}>
      <LogoTitle />
      <SubHeading>What's your name ?</SubHeading>
      <IconInput
        name="finger-print"
        onChangeText={text => setUsername(text)}
        placeholder={'Type your name...'}
      />
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
      <TextButton
        full={true}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        I already have an account
      </TextButton>
    </View>
  );
};

export default RegisterScreen;
