import React from "react";
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
  Dimensions,
  Text
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const YTextInput = props => {
  const { title, keyboardType, value, returnKeyType } = props;
  return (
    <View style={{ flex: 1, alignSelf: "center" }}>
      <TextInput
        placeholder={title}
        style={{ height: 50 }}
        keyboardType={keyboardType}
        value={value}
        returnKeyType={returnKeyType}
      />
      <View
        style={{
          height: 2.5,
          width: SCREEN_WIDTH * 0.9,
          backgroundColor: "#606160"
        }}
      />
    </View>
  );
};

export default YTextInput;
