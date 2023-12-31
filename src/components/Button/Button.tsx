import React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
  PressableProps,
} from "react-native";
import Text from "../Text/Text";

export interface ButtonProps extends PressableProps {
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  disabledBgColor?: string;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  const {
    style,
    children,
    text,
    textStyle,
    disabledBgColor,
    ...pressableProps
  } = props;
  const customStyle = style as ViewStyle;
  return (
    <Pressable
      style={({ pressed }) => [
        {
          justifyContent: "center",

          padding: 10,
          borderRadius: 5,
          alignItems: "center",
          opacity: pressed ? 0.5 : 1,
          ...customStyle,
          backgroundColor: pressableProps.disabled
            ? disabledBgColor
              ? disabledBgColor
              : "rgba(0,0,0,0.2)"
            : pressed
            ? customStyle?.backgroundColor
              ? customStyle?.backgroundColor
              : "rgba(0,0,0,0.1)"
            : customStyle?.backgroundColor || "#fff",
        },
        ,
      ]}
      {...pressableProps}
    >
      {children ? (
        children
      ) : (
        <Text style={{ color: "black", ...(textStyle as TextStyle) }}>
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
