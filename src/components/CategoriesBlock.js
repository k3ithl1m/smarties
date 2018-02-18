import React, { Component } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  Image,
  Dimensions
} from "react-native";
import Icon from "react-native-elements";


var categories = require("../data/general/categoryArray");
const SCREEN_WIDTH = Dimensions.get("window").width;


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

    return (
      <View style={styles.container}>
        <ScrollView style={styles.gallery}>
          {this.state.photos.map((item, i) => (
            <View key={i}>
              <Image
                resizeMode={Image.resizeMode.cover}
                style={styles.photo}
                source={item.img}
              />
              <Text
                style={{
                  fontSize: 40,
                  color: "#bbb",
                  fontWeight: "800",
                  justifyContent: "center",
                  alignSelf: "center"
                }}
              >
                {item.label}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
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
    height: 70,
    width: SCREEN_WIDTH
  }
};

export default CategoriesBlock;
