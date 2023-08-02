import React, { Children } from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from "react-native";

interface TextProps extends RNTextProps {
  style?: StyleProp<TextStyle>;
}

export default function Text(props: TextProps) {
  const { style, children, ...textProps } = props;
  return (
    <RNText
      style={{
        color: "#000",
        fontFamily: "MontserratRegular",
        fontSize: 14,
        ...(style as Object),
      }}
      allowFontScaling={false}
      {...textProps}
    >
      {children}
    </RNText>
  );
}
