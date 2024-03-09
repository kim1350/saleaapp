import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const SVGComponent = () => {
  return (
    <View style={styles.container}>
      <Svg width={375} height={169} viewBox="0 0 375 169" fill="none">
        <Defs>
          <LinearGradient
            id="paint0_linear_1_433"
            x1="888.778"
            y1="0"
            x2="888.778"
            y2="268.888"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#3664BC" />
            <Stop offset="1" stopColor="#0F623F" stopOpacity="0.93" />
          </LinearGradient>
          <Filter
            id="filter0_i_1_433"
            x="-382"
            y="0"
            width="2541.56"
            height="272.888"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="22" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.382124 0 0 0 0 0.740492 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="shape" />
          </Filter>
        </Defs>
        <Path
          d="M-159 52.3885C-218.6 83.9885 -332.5 73.5552 -382 64.3885V224.388L2150.5 268.888C2157.33 196.722 2166.9 52.3885 2150.5 52.3885C2130 52.3885 1985.5 15.3885 1869 31.8885C1752.5 48.3885 1579 52.3885 1537 31.8885C1495 11.3885 1441.5 1.38849 1407 15.3885C1372.5 29.3885 1295.5 31.8885 1218.5 15.3885C1141.5 -1.11152 974.5 -14.6115 854 31.8885C733.5 78.3885 559 78.3885 384.5 31.8885C210 -14.6115 -84.5 12.8885 -159 52.3885Z"
          fill="url(#paint0_linear_1_433)"
          filter="url(#filter0_i_1_433)"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SVGComponent;
