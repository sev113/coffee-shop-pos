import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, TextInput, PasswordInput } from "components";
import { Colors } from "styles";

type LoginFormProp = {
  handleOnLogin: (data: object) => void;
};

const LoginForm = ({ handleOnLogin }: LoginFormProp) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" onChangeText={(v) => setUsername(v)} />
      <PasswordInput
        placeholder="Password"
        onChangeText={(v) => setPassword(v)}
      />
      <Button
        text="Log In"
        textStyle={{ color: "#fff" }}
        style={styles.login_btn}
        disabled={username && password ? false : true}
        onPress={() => {
          let FORM_DATA = {
            username: username,
            password: password,
          };
          handleOnLogin(FORM_DATA);
        }}
      />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  login_btn: {
    // height: 50,
    marginTop: 20,
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 5,
  },
});
