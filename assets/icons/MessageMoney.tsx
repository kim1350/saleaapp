import React, {type FC} from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
import {type IconProps} from '../../models/Icon';

const MessageMoney: FC<IconProps> = ({
  width = 26,
  height = 26,
  color = 'white',
}) => {
  return (
    <Svg width="196" height="156" viewBox="0 0 196 156" fill="none">
      <Path
        d="M-6.10352e-05 20C-6.10352e-05 8.9543 8.95424 0 19.9999 0H176C187.046 0 196 8.95431 196 20V123C196 134.046 187.046 143 176 143H23.4322C18.9417 143 14.5819 144.511 11.0547 147.29L-6.10352e-05 156V20Z"
        fill="url(#paint0_linear_1_891)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_891"
          x1="50.2894"
          y1="7.43327e-07"
          x2="118.417"
          y2="132.502"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" />
          <Stop offset="1" stopColor="#E7F1F9" stopOpacity="0.91" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default MessageMoney;
