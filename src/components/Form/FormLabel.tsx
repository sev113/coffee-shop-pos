import React from "react";
import { TextProps } from "react-native";

import { Text } from "components/Text";

interface FormLabelProps extends TextProps {}

export default function FormLabel(props: FormLabelProps) {
  const { children, style, ...textProps } = props;
  return (
    <Text style={{ fontSize: 12, ...(style as Object) }} {...textProps}>
      {children}
    </Text>
  );
}
