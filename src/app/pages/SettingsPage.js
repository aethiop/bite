import React, {useState} from 'react';
import {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Auth} from '../core/auth';
import {User} from '../core/user';
import Scaffold from '../../ui/molecules/Scaffold';
import {Logo} from '../../ui/atoms/LogoAtom';
import {Heading} from '../../ui/atoms/TypoAtom';
import {Avatar} from 'react-native-paper';

const SettingsPage = ({navigation}) => {
  const {profile} = useContext(User);
  const {logout} = useContext(Auth);
  const {username, pair} = profile;
  return (
    <Scaffold topBar={<Logo />}>
      <Avatar.Text
        size={70}
        style={{borderRadius: 18, marginTop: 20}}
        label={username.substring(0, 2).toUpperCase()}
      />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Heading>{username}</Heading>
      </View>
      <TouchableOpacity
        size={25}
        onPress={() => {
          logout();
        }}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle} selectable={true}>
        {JSON.stringify(pair)}
      </Text>
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

export default SettingsPage;
