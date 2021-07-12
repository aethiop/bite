/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Surface, useTheme} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {IconButton} from './ButtonAtom';
const BottomNav = ({state, descriptors, navigation, iconNames}) => {
  const {colors} = useTheme();
  return (
    <Surface
      style={{
        backgroundColor: colors.surface,
        position: 'absolute',
        bottom: Dimensions.get('window').width / 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        borderRadius: 18,
        width: '80%',
        marginLeft: 40,
        marginRight: 40,
        elevation: 6,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <IconButton
            name={isFocused ? iconNames[index] : `${iconNames[index]}-outline`}
            key={index}
            color={isFocused ? null : colors.onSurface}
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              width: (Dimensions.get('window').width * 13) / 25 / 2,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              flexDirection: 'row',
              fontSize: 15,
            }}
          />
        );
      })}
    </Surface>
  );
};

export {BottomNav};
