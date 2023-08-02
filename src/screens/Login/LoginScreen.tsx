import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import LoginForm from "./components/LoginForm";
import PinForm from "./components/PinForm";

const WIDTH = Dimensions.get("window").width;

const LoginScreen = () => {
  const login = (v: object) => {
    console.log(v);
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
          <LoginForm handleOnLogin={login} />
          {/* <PinForm /> */}
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
    width: WIDTH * 0.7,
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
