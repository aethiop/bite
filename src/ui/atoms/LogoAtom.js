import * as React from 'react';
import {useTheme} from 'react-native-paper';
import Svg, {Rect, Circle} from 'react-native-svg';

const Logo = props => {
  const {colors} = useTheme();
  return (
    <Svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Rect width={40} height={40} rx={10.909} fill={colors.primary} />
      <Circle cx={24} cy={24.727} r={5.818} fill={colors.background} />
      <Rect
        x={10.182}
        y={30.546}
        width={23.273}
        height={6.545}
        rx={3.273}
        transform="rotate(-90 10.182 30.546)"
        fill={colors.background}
      />
    </Svg>
  );
};

export {Logo};
