import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import PinForm from "./components/PinForm";

const WIDTH = Dimensions.get("window").width;

type FromNameType = "LOGIN_FORM" | "PIN_FORM";

const LoginScreen = () => {
  const [formName, setFormName] = useState("LOGIN_FORM");

  const login = (v: object) => {
    setFormName("PIN_FORM");
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("assets/images/dejabrew-express.jpg")}
        style={styles.bg_img}
      >
        <View style={styles.form_container}>
          <View style={styles.logo_container}>
            <Image
              source={require("assets/icons/logo.png")}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          {formName == "LOGIN_FORM" && <LoginForm handleOnLogin={login} />}
          {formName == "PIN_FORM" && (
            <PinForm handleOnSuccess={() => alert("good")} />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bg_img: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form_container: {
    width: WIDTH * 0.75,
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 20,
    borderRadius: 10,
    // justifyContent: "center",
  },
  logo_container: {
    height: WIDTH * 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    flex: 1,
  },
});
