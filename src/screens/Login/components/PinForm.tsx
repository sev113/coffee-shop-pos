import { StyleSheet, View, Image, Dimensions, Alert } from "react-native";
import React, { useState } from "react";

import { Button, Text, TextInput } from "components";
import { Fonts } from "styles";

const WIDTH = Dimensions.get("window").width;

// Data Types
type DataType = {
  id: number;
  type: string;
  value: any;
};
// Data
const NumPadData: DataType[] = [
  {
    id: 1,
    type: "text",
    value: 1,
  },
  {
    id: 2,
    type: "text",
    value: 2,
  },
  {
    id: 3,
    type: "text",
    value: 3,
  },
  {
    id: 4,
    type: "text",
    value: 4,
  },
  {
    id: 5,
    type: "text",
    value: 5,
  },
  {
    id: 6,
    type: "text",
    value: 6,
  },
  {
    id: 7,
    type: "text",
    value: 7,
  },
  {
    id: 8,
    type: "text",
    value: 8,
  },
  {
    id: 9,
    type: "text",
    value: 9,
  },
  {
    id: 10,
    type: "img",
    value: require("assets/icons/back.png"),
  },
  {
    id: 11,
    type: "text",
    value: 0,
  },
  {
    id: 12,
    type: "img",
    value: require("assets/icons/tick.png"),
  },
];

// NumPadTypes
type NumberPadPropsType = {
  data: DataType;
  handleOnPress: (data: DataType) => void;
};

// NumPad Component
const NumberPad = ({ data, handleOnPress }: NumberPadPropsType) => {
  return (
    <Button style={styles.num_pad} onPressIn={() => handleOnPress(data)}>
      {data.type == "text" ? (
        <Text style={styles.num_style}>{data.value.toString()}</Text>
      ) : (
        <Image source={data.value} style={{ width: 20, height: 20 }} />
      )}
    </Button>
  );
};

export default function PinForm({
  handleOnSuccess,
}: {
  handleOnSuccess: () => void;
}) {
  const [pin, setPin] = useState<string>("");

  const handleOnPress = (v: DataType) => {
    if (v.id == 10) {
      setPin(pin.slice(0, -1));
    } else if (v.id == 12) {
      pin.length === 4
        ? handleOnSuccess()
        : Alert.alert("Pin Invalid", "Your pin must be four digits long.");
    } else {
      setPin(pin + v.value.toString());
    }
  };
  return (
    <View>
      <TextInput
        placeholder="pin"
        textAlign="center"
        value={pin}
        editable={false}
        style={{ marginHorizontal: 10 }}
      />

      <View style={styles.num_pad_container}>
        {NumPadData.map((v: DataType, index: number) => {
          return (
            <NumberPad key={index} data={v} handleOnPress={handleOnPress} />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  num_pad: {
    width: WIDTH * 0.15,
    height: WIDTH * 0.15,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elevation: 1,
  },
  num_pad_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  num_style: {
    fontFamily: Fonts.ENBold,
    fontSize: 18,
  },
});
