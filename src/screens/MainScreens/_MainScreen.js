import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import { Icon, Header, List } from "react-native-elements";
import { YHeader, ActivityCard, YMiddleSnapButton } from "../../components";

const list = require("../../data/sample/EventData.json");
const SCREEN_HEIGHT = Dimensions.get("window").height;

class _MainScreen extends Component {
  render() {
    console.log(list);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {list.map((l, i) => <ActivityCard eventDetail={l} key={i} />)}
        </ScrollView>
        <YMiddleSnapButton />
      </View>
    );
  }
}

export default _MainScreen;
