import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

type FormFieldWrapperProps = {
  style?: StyleProp<ViewStyle>;
};

const FormFieldWrapper: React.FC<
  React.PropsWithChildren<FormFieldWrapperProps>
> = ({ style, children }) => {
  return (
    <View style={{ flexDirection: "row", ...(style as Object) }}>
      {children}
    </View>
  );
};

export default FormFieldWrapper;
