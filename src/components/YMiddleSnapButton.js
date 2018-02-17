import React, { Component } from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const YMiddleSnapButton = props => {
  const { onPress } = props;

  return (
    <TouchableOpacity
      style={{
        justifyContent: "flex-end",
        alignSelf: "center",
        position: "absolute"
      }}
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: "#a2a2a2",
          opacity: 0.5,
          height: 60,
          width: 60,
          borderRadius: 60,
          alignSelf: "center",
          position: "absolute",
          top: SCREEN_HEIGHT * 0.8531
        }}
      />
      <View
        style={{
          backgroundColor: "#dddddd",
          opacity: 0.5,
          borderRadius: 50,
          height: 50,
          width: 50,
          position: "absolute",
          top: SCREEN_HEIGHT * 0.86,
          alignSelf: "center"
        }}
      >
        <Icon name="add" size={50} color="#FFF" />
      </View>
    </TouchableOpacity>
  );
};

export default YMiddleSnapButton;
