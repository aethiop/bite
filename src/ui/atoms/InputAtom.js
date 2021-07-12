import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
const Input = ({...rest}) => {
  return <TextInput mode="outlined" style={styles.input} {...rest} />;
};
const IconInput = ({name, style, ...rest}) => {
  const {colors} = useTheme();
  return (
    <TextInput
      mode="outlined"
      left={<TextInput.Icon style={styles.icon} name={name} size={20} />}
      style={[styles.input, style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: Dimensions.get('screen').height / 18,
    fontWeight: '700',
  },
  icon: {
    paddingTop: 7,
  },
});

export {Input, IconInput};
