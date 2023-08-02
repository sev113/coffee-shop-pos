import { ActivityIndicator, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "react-native/Libraries/NewAppScreen";

import AppRoot from "index";

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    PyidaungsuRegular: require("./assets/fonts/Pyidaungsu-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color={Colors.primaryColor} size="large" />
      </View>
    );
  }
  return <AppRoot />;
}
