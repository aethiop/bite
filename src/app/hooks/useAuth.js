import React, {useMemo, useReducer, useEffect} from 'react';
import useGun from './useGun';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {tagUsernameId} from './useHelper';

const ACTIONS = {
  ADD_USER: 'add_user',
  REMOVE_USER: 'remove_user',
};

const useAuth = () => {
  const {gun, app, user, SEA} = useGun();

  const [state, dispatch] = useReducer(
    (s, action) => {
      switch (action.type) {
        case ACTIONS.ADD_USER:
          return {...s, profile: {...action.payload}};
        case ACTIONS.REMOVE_USER:
          return {...s, profile: undefined};
      }
    },
    {profile: undefined},
  );

  // register an account
  const register = name => {
    return SEA.pair().then(async key => {
      console.log('KEY CREATED: ', key);
      login(key);
      var taggedId = tagUsernameId(name);
      user.get('profile').get('name').put(name);
      user.get('profile').get('id').put(taggedId.slice(-4));
      app
        .get('users')
        .set({userId: taggedId, meta: {pub: key.pub, epub: key.epub}});
      console.log(tagUsernameId(name));
    });
  };

  // login to account
  const login = key => {
    user.auth(key);

    if (user.is) {
      console.log('PROFILE AUTHENTICATED');
      user
        .get('profile')
        .get('name')
        .on(name => {
          // get account info
          console.log('PROFILE FOUND:', name);
          dispatch({
            type: ACTIONS.ADD_USER,
            payload: {username: name, pair: key},
          });
          AsyncStorage.setItem(
            'user',
            JSON.stringify({username: name, pair: key}),
          );
        });
    }
  };

  const logout = () => {
    // logout
    console.log('LOGGED OUT');
    AsyncStorage.removeItem('user');
    user.leave();
    dispatch({type: ACTIONS.REMOVE_USER});
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const auth = useMemo(() => ({
    register: register,

    login: login,

    logout: logout,
  }));
  useEffect(() => {
    AsyncStorage.getItem('user').then(u => {
      if (!state.user && u) {
        dispatch({type: ACTIONS.ADD_USER, payload: JSON.parse(u)});
      }
    });
  });

  return {auth, state, app, user, gun};
};

export default useAuth;
