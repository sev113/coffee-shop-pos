import React from "react";
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";

import { Colors } from "styles";
import { Text } from "components/Text";

interface TextInputProps extends RNTextInputProps {
  label?: string;
  inputStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  optional?: boolean;
  // I don't know its usage, so I dropped it.
  // may be later, we will update.
}

export default function TextInput(props: TextInputProps) {
  const { label, style, optional = false, inputStyle, ...inputProps } = props;
  return (
    <View style={[styles.container, style]}>
      {label ? (
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 12 }}>{label}</Text>
          {optional ? (
            <Text
              style={{ fontSize: 12, marginLeft: 5, color: "rgba(0,0,0,0.3)" }}
            >
              (Optional)
            </Text>
          ) : null}
        </View>
      ) : null}
      <View>
        <RNTextInput
          autoCapitalize="none"
          textAlign="left"
          style={[
            styles.input,
            inputStyle,
            inputProps?.editable == false
              ? { backgroundColor: "#f5f5f5", color: "black" }
              : null,
          ]}
          {...inputProps}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    // marginVertical: 5,
  },
  label: {
    fontSize: 12,
  },
  input: {
    fontFamily: "MontserratRegular",
    height: 45,

    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 5,

    padding: 10,
  },
});
