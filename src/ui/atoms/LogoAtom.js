import * as React from 'react';
import {useTheme} from 'react-native-paper';
import Svg, {Rect, Circle} from 'react-native-svg';

const Logo = props => {
  const {colors} = useTheme();
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={35} height={35} rx={9.545} fill={colors.primary} />
      <Circle cx={21} cy={21.636} r={5.091} fill={colors.background} />
      <Rect
        x={8.909}
        y={26.727}
        width={20.364}
        height={5.727}
        rx={2.864}
        transform="rotate(-90 8.91 26.727)"
        fill={colors.background}
      />
    </Svg>
  );
};

export {Logo};
