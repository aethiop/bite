import * as React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {IconButton as IB, Button, useTheme} from 'react-native-paper';
const IconButton = ({name, color, ...rest}) => {
  const {colors} = useTheme();
  return <IB icon={name} color={color || colors.primary} size={24} {...rest} />;
};
const FilledButton = ({children, full, ...rest}) => {
  const {colors} = useTheme();
  return (
    <Button
      mode="contained"
      color={colors.primary}
      uppercase={false}
      contentStyle={styles.filled}
      style={{width: full ? '80%' : 'auto'}}
      labelStyle={{fontWeight: '600'}}
      {...rest}>
      {children}
    </Button>
  );
};

const TextButton = ({children, full, ...rest}) => {
  const {colors} = useTheme();
  return (
    <Button
      mode="text"
      color={colors.primary}
      uppercase={false}
      contentStyle={styles.filled}
      style={{width: full ? '80%' : 'auto'}}
      labelStyle={{fontWeight: '600'}}
      {...rest}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  icon: {},
  filled: {
    height: Dimensions.get('screen').height / 18,
    fontWeight: '600',
  },
});
export {IconButton, FilledButton, TextButton};
