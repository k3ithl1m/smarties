import React, { Component } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import Icon from "react-native-elements";

var categories = require("../data/general/categoryArray.json");
var jon = require("../assets/Images/CategoriesPhotos/technology.jpeg");
class CategoriesBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: categories
    };
  }

  renderGallery() {
    var count = 0;
    var previous_item = "";
    var pairs = this.getPairsArray(this.state.photos);

    return pairs.map((item, index) => {
      var str1 = item[0].img;
      var str2 = item[1].img;
      return (
        <View style={styles.item} key={index}>
          <Image
            resizeMode={Image.resizeMode.cover}
            style={styles.photo}
            source={require("../assets/Images/CategoriesPhotos/sports.jpeg")}
          />
          <Image
            resizeMode={Image.resizeMode.cover}
            style={styles.photo}
            source={require("../assets/Images/CategoriesPhotos/sports.jpeg")}
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
          <Image style={styles.photo} source={jon} />
        </ScrollView>
        <Text> Hey</Text>
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
    height: 100,
    width: 50
  }
};

export default CategoriesBlock;
