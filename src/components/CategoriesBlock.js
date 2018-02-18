import React, { Component } from "react";
import { View, ScrollView, ImageBackground, Text, Image } from "react-native";
import Icon from "react-native-elements";

const categories = require("../data/general/categoryArray");

class CategoriesBlock extends Component {
  test(props) {
    const item = categories.categories.map(list => (
      <View
        key={list.img}
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <ImageBackground style={{ height: 120, flex: 0.5 }} source={list.img}>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              alignSelf: "center",
              marginTop: 50
            }}
          >
            {list.description}
          </Text>
        </ImageBackground>
      </View>
    ));
    return <View>{item}</View>;
  }

  render() {
    return <ScrollView>{this.test(categories)}</ScrollView>;
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    height: 100
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "red",
    padding: 20
  },
  tab: {
    flex: 1
  },
  icon: {
    textAlign: "center"
  },
  item: {
    flex: 1,
    flexDirection: "row"
  },
  photo: {
    flex: 1,
    height: 200,
    width: 200
  }
};

export default CategoriesBlock;
