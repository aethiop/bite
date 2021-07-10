import React, {useContext, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {FilledButton, TextButton} from '../../ui/atoms/ButtonAtom';
import {IconInput} from '../../ui/atoms/InputAtom';
import {SubHeading} from '../../ui/atoms/TypoAtom';
import {Auth} from '../core/auth';
import {LogoTitle} from '../../ui/molecules/Title';

const LoginScreen = ({navigation}) => {
  const [key, setKey] = useState('');
  const {login} = useContext(Auth);

  return (
    <View style={{marginTop: 40, alignItems: 'center'}}>
      <LogoTitle />
      <SubHeading>Enter your key !</SubHeading>
      <IconInput
        name="finger-print"
        onChangeText={text => setKey(text)}
        placeholder={'Paste your key here...'}
      />
      <FilledButton
        full={true}
        onPress={async () => {
          try {
            console.log('FROM LOGIN SCREEN: ', key);
            login(JSON.parse(key));
          } catch (e) {
            console.log(e);
          }
        }}>
        Login
      </FilledButton>

      <TextButton
        full={true}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        Create an account..
      </TextButton>
    </View>
  );
};

export default LoginScreen;
