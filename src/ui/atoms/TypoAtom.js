import React from 'react';
import {StyleSheet} from 'react-native';
import {Title, Paragraph, useTheme} from 'react-native-paper';

const Heading = ({children, style}) => {
  return <Title style={[styles.head, style]}>{children}</Title>;
};
const SubHeading = ({children, style}) => {
  const {colors} = useTheme();
  return (
    <Title
      style={[
        {
          fontWeight: '700',
          fontSize: 24,
        },
        style,
      ]}>
      {children}
    </Title>
  );
};

const styles = StyleSheet.create({
  head: {
    fontWeight: '900',
    fontSize: 32,
  },
});
export {Heading, SubHeading};
