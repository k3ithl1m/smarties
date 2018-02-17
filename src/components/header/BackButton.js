import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Icon from "react-native-elements";

const BackButton = props => {
  const { icon, ...attributes } = props;
  return (
    <View style={{ flexDirection: "row" }}>
      <Icon name="chevron-left" size={30} />
      <Text>Back</Text>
    </View>
  );
};

BackButton.propTypes = {
  icon: PropTypes.string
};

export default BackButton;
