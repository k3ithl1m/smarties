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
  constructor(props) {
    super(props);
    this.state = {
      photos: categories.categories
    };
  }

  renderGallery() {
    return this.state.photos.map((item, index) => {
      return (
        <View style={styles.item} key={index}>
          <ImageBackground
            resizeMode={Image.resizeMode.cover}
            style={styles.photo}
            source={item.img}
          />
        </View>
      );
    });
  }

  getPairsArray(photos) {
    var pairs_r = [];
    var pairs = [];
    var count = 0;
    photos.forEach(item => {
      count += 1;
      pairs.push(item);
      if (count == 2) {
        pairs_r.push(pairs);
        count = 0;
        pairs = [];
      }
    });
    return pairs_r;
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
    flexDirection: "column"
  },
  gallery: {
    flexDirection: "column"
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#333",
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
