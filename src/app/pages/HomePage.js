import React, {useState} from 'react';
import {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Auth} from '../core/auth';
import {User} from '../core/user';

const HomePage = ({navigation}) => {
  const {profile} = useContext(User);
  const {logout} = useContext(Auth);
  const {username, pair} = profile;
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
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
