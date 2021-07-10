import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsPage from '../pages/SettingsPage';
import HomePage from '../pages/HomePage';
import NotificationPage from '../pages/NotificationPage';
import FriendPage from '../pages/FriendPage';
import {BottomNav} from '../../ui/atoms/NavAtom';
const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => (
        <BottomNav
          iconNames={['home', 'people', 'md-notifications', 'settings']}
          {...props}
        />
      )}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Friend" component={FriendPage} />
      <Tab.Screen name="Notification" component={NotificationPage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
    </Tab.Navigator>
  );
};
