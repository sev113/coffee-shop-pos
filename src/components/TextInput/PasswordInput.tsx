import React, { useState } from "react";
import {
  View,
  Image,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import TextInput from "./TextInput";
import IconButton from "../Button/IconButton";
import FormLabel from "../Form/FormLabel";

interface PasswordInputProps extends TextInputProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function PasswordInput(props: PasswordInputProps) {
  const [secureInput, setSecureInput] = useState(true);
  const { label, containerStyle, ...inputProps } = props;
  return (
    <View style={{ padding: 5, ...(containerStyle as Object) }}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <View>
        <TextInput
          style={{ padding: 0 }}
          placeholder="password"
          secureTextEntry={secureInput}
          {...inputProps}
        />

        <IconButton
          style={{ position: "absolute", right: 10 }}
          onPress={() => {
            setSecureInput((prev) => !prev);
          }}
        >
          {secureInput ? (
            <Image
              source={require("assets/icons/hidden.png")}
              style={{ width: 23, height: 23 }}
            />
          ) : (
            <Image
              source={require("assets/icons/view.png")}
              style={{ width: 23, height: 23 }}
            />
          )}
        </IconButton>
      </View>
    </View>
  );
}
