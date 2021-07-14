import React, {useState} from 'react';
import {useContext} from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {Auth} from '../core/auth';
import {User} from '../core/user';
import useFriend from '../hooks/useFriend';
import useGun from '../hooks/useGun';
import Scaffold from '../../ui/molecules/Scaffold';
import {Logo} from '../../ui/atoms/LogoAtom';
import {Text, Heading} from '../../ui/atoms/TypoAtom';
import {Input} from '../../ui/atoms/InputAtom';
import {FilledButton, TextButton} from '../../ui/atoms/ButtonAtom';
import {Avatar} from '../../ui/atoms/AvatarAtom';
import {useEffect} from 'react';

const HomePage = ({navigation}) => {
  const {profile} = useContext(User);
  const {logout} = useContext(Auth);
  const {username, pair} = profile;
  const [userId, setUserId] = useState('');
  const {addFriend, recieveNotif} = useFriend();

  useEffect(() => {
    recieveNotif(pair);
  });

  return (
    <Scaffold topBar={<Logo />}>
      {/* <Heading style={{marginTop: 20}}>Home</Heading> */}
      <Heading style={{marginVertical: 20}}>Welcome, {username}</Heading>
      <Input onChangeText={name => setUserId(name)} placeholder="Add Friend" />
      <FilledButton style={{marginTop: 20}} onPress={() => addFriend(userId)}>
        Add Friend
      </FilledButton>
      <TextButton style={{marginTop: 20}} onPress={() => logout()}>
        Log Out
      </TextButton>
      <Avatar />
    </Scaffold>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '100',
  },
});

export default HomePage;
