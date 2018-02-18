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
  const {
    title,
    keyboardType,
    value,
    returnKeyType,
    secureTextEntry,
    onChangeText,
    autoCorrect
  } = props;
  return (
    <View style={{ flex: 1, alignSelf: "center" }}>
      <TextInput
        placeholder={title}
        style={{ height: 50 }}
        keyboardType={keyboardType}
        value={value}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={autoCorrect}
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

YTextInput.defaultProps = {
  secureTextEntry: false,
  onChangeText: () => {},
  value: "",
  title: "Enter something...",
  autoCorrect: false
};

export default YTextInput;
