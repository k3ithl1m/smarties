import PropTypes from "prop-types";
import React from "react";
import { View, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const YButton = props => {
  const { title, fontColor, onPress } = props;
  return (
    <View>
      <Button
        title={title}
        large
        buttonStyle={{
          backgroundColor: "#D4D5D4",
          width: SCREEN_WIDTH * 0.9,
          height: SCREEN_HEIGHT * 0.08,
          borderRadius: 5
        }}
        color={fontColor ? fontColor : "#686968"}
        onPress={onPress}
        textStyle={{ fontWeight: "700" }}
      />
    </View>
  );
};

YButton.propTypes = {
  title: PropTypes.string,
  fontColor: PropTypes.string,
  onPress: PropTypes.any
};

export default YButton;
