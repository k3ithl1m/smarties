import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { YHeader, CategoriesBlock } from "../../components";
import { Icon } from "react-native-elements";
import { ComponentStyle } from "../../styling";

class SUSelectInterestsScreen extends Component {
  render() {
    return (
      <View>
        <YHeader leftComponent={<Icon name="chevron-left" size={30} />} />
        <Text style={ComponentStyle.subTitle}>
          What are some of your interests?
        </Text>
        <CategoriesBlock />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: "#333"
  },
  box2: {
    backgroundColor: "green"
  },
  box3: {
    backgroundColor: "orange"
  }
});

export default SUSelectInterestsScreen;
