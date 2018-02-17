import React from "react-native";
import { Switch } from "react-native";

const YSwitch = props => {
  const { toggleSwitch, switchValue } = props;
  return <Switch onValueChange={toggleSwitch} value={switchValue} />;
};

export default YSwitch;
