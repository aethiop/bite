import React, {useState} from 'react';
import {useContext} from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {Auth} from '../core/auth';
import {User} from '../core/user';
import {Logo} from '../../ui/atoms/LogoAtom';
import Scaffold from '../../ui/molecules/Scaffold';
import {Text, Heading} from '../../ui/atoms/TypoAtom';

const FriendPage = ({navigation}) => {
  const {profile} = useContext(User);
  const {logout} = useContext(Auth);
  const {username, pair} = profile;
  return (
    <Scaffold topBar={<Logo />}>
      <Heading>Friends</Heading>
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

export default FriendPage;
