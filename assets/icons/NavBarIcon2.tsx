import React, {type FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {type IconProps} from '../../models/Icon';

const NavBarIcon2: FC<IconProps> = ({
  width = 20,
  height = 17,
  color = 'white',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 17" fill="none">
      <Path
        d="M2.52941 5.29412C3.05882 7 4.58824 8.23529 6.47059 8.23529C8.35294 8.23529 9.88235 7 10.4118 5.29412H18.2353C18.5473 5.29412 18.8466 5.17017 19.0672 4.94954C19.2878 4.72891 19.4118 4.42967 19.4118 4.11765C19.4118 3.80563 19.2878 3.50639 19.0672 3.28576C18.8466 3.06513 18.5473 2.94118 18.2353 2.94118H10.4118C9.88235 1.23529 8.35294 0 6.47059 0C4.58824 0 3.05882 1.23529 2.52941 2.94118H1.17647C0.864451 2.94118 0.565211 3.06513 0.34458 3.28576C0.123949 3.50639 0 3.80563 0 4.11765C0 4.42967 0.123949 4.72891 0.34458 4.94954C0.565211 5.17017 0.864451 5.29412 1.17647 5.29412H2.52941ZM6.47059 2.35294C6.81961 2.35294 7.1608 2.45644 7.45101 2.65035C7.74121 2.84426 7.9674 3.11987 8.10096 3.44232C8.23453 3.76478 8.26948 4.1196 8.20139 4.46192C8.13329 4.80424 7.96522 5.11868 7.71842 5.36548C7.47163 5.61228 7.15718 5.78035 6.81487 5.84844C6.47255 5.91654 6.11772 5.88159 5.79526 5.74802C5.47281 5.61446 5.1972 5.38827 5.00329 5.09807C4.80938 4.80786 4.70588 4.46667 4.70588 4.11765C4.70157 3.88472 4.74427 3.65331 4.83143 3.43726C4.91859 3.22121 5.04842 3.02495 5.21315 2.86021C5.37789 2.69548 5.57415 2.56565 5.7902 2.47849C6.00625 2.39133 6.23766 2.34863 6.47059 2.35294ZM18.8235 11.1765H17.4706C16.9412 9.47059 15.4118 8.23529 13.5294 8.23529C11.6471 8.23529 10.1176 9.47059 9.58823 11.1765H1.76471C1.45269 11.1765 1.15345 11.3004 0.932816 11.5211C0.712184 11.7417 0.588235 12.0409 0.588235 12.3529C0.588235 12.665 0.712184 12.9642 0.932816 13.1848C1.15345 13.4055 1.45269 13.5294 1.76471 13.5294H9.58823C10.1176 15.2353 11.6471 16.4706 13.5294 16.4706C15.4118 16.4706 16.9412 15.2353 17.4706 13.5294H18.8235C19.1355 13.5294 19.4348 13.4055 19.6554 13.1848C19.8761 12.9642 20 12.665 20 12.3529C20 12.0409 19.8761 11.7417 19.6554 11.5211C19.4348 11.3004 19.1355 11.1765 18.8235 11.1765ZM13.5294 14.1176C13.1804 14.1176 12.8392 14.0141 12.549 13.8202C12.2588 13.6263 12.0326 13.3507 11.899 13.0283C11.7655 12.7058 11.7305 12.351 11.7986 12.0087C11.8667 11.6663 12.0348 11.3519 12.2816 11.1051C12.5284 10.8583 12.8428 10.6902 13.1851 10.6221C13.5275 10.5541 13.8823 10.589 14.2047 10.7226C14.5272 10.8561 14.8028 11.0823 14.9967 11.3725C15.1906 11.6627 15.2941 12.0039 15.2941 12.3529C15.2984 12.5859 15.2557 12.8173 15.1686 13.0333C15.0814 13.2494 14.9516 13.4456 14.7868 13.6104C14.6221 13.7751 14.4259 13.9049 14.2098 13.9921C13.9937 14.0793 13.7623 14.122 13.5294 14.1176Z"
        fill={color}
      />
    </Svg>
  );
};

export default NavBarIcon2;
