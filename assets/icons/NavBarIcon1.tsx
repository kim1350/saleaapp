import React, {type FC} from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
import {type IconProps} from '../../models/Icon';

const NavBarIcon1: FC<IconProps> = ({width = 26, height = 26}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 26" fill="none">
      <Path
        d="M24 13.2336C24 13.2336 21.3995 14.5787 20.5924 14.4293C19.7853 14.2798 16.6703 11.1726 16.054 11.2415C15.4378 11.3103 16.1087 12.9048 15.5707 12.7853C14.339 12.5363 13.7361 11.6101 13.3161 10.5126C12.8961 9.41503 12.4405 9.12614 11.9867 9.09806C11.5329 9.06998 11.4638 11.1707 11.2065 11.3505C10.9492 11.5302 10.1378 11.0382 9.99305 10.2004C9.78433 8.99223 9.53592 7.4628 9.20712 7.37312C8.87831 7.28345 8.72554 8.33146 8.15761 8.27167C7.58967 8.21189 5.68176 6.94226 5.32306 7.00205C4.96437 7.06183 5.1087 7.43472 4.63044 7.52439C4.15217 7.61406 2 7.28526 2 7.28526C2 7.28526 3.88315 8.39124 4.92935 9.31787C5.97554 10.2445 10.4891 14.3695 13 15.1168C15.5109 15.8641 17.6033 15.9836 18.7092 15.6847C19.8152 15.3858 23.6413 13.5923 23.6413 13.5923L24 13.2336Z"
        fill="url(#paint0_linear_24_1224)"
      />
      <Path
        d="M23.1485 14.5934C23.1485 14.5934 21.703 15.8766 18.9488 16.9548C16.1945 18.033 14.9879 17.7294 13.8045 18.1005C12.621 18.4716 11.9816 19.5257 11.6517 19.259C11.2981 18.9732 12.3851 17.7903 11.8161 17.2862C11.2471 16.7821 8.48938 18.9055 8.13068 18.3375C7.77199 17.7696 9.02486 16.7755 8.5167 16.2823C8.00855 15.7891 4.89986 16.3271 5.06426 15.6844C5.22866 15.0418 6.43051 15.431 6.24497 14.6382C6.05943 13.8455 3.67327 13.6651 3.83978 12.9972C4.00629 12.3294 4.308 11.3967 3.83763 10.6363C3.36728 9.87578 2.51001 8.60357 2.52347 8.6002C2.52347 8.6002 5.73679 10.8869 7.61994 12.4711C9.50309 14.0554 11.177 15.52 13.2395 16.073C15.302 16.626 17.6186 16.7306 19.0384 16.3421C20.4583 15.9535 23.1485 14.5934 23.1485 14.5934H23.1485Z"
        fill="url(#paint1_linear_24_1224)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_24_1224"
          x1="13"
          y1="7"
          x2="13"
          y2="15.8364"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" />
          <Stop offset="1" stopColor="white" stopOpacity="0.74" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_24_1224"
          x1="12.8359"
          y1="8.6002"
          x2="12.8359"
          y2="19.3017"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" />
          <Stop offset="1" stopColor="white" stopOpacity="0.74" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default NavBarIcon1;
