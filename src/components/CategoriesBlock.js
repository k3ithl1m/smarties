import React, { Component } from "react";
import { View, ScrollView, ImageBackground, Text, Image } from "react-native";
import Icon from "react-native-elements";

var categories = require("../data/general/categoryArray");

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
        <ScrollView style={styles.gallery}>{this.renderGallery()}</ScrollView>
        <ImageBackground
          resizeMode={Image.resizeMode.cover}
          style={styles.photo}
          source={require("../assets/Images/CategoriesPhotos/animals.jpeg")}
        />
        <View style={styles.tabs} />
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
    height: 200,
    width: 200
  }
};

export default CategoriesBlock;
