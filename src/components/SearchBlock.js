import React, { Component } from "react";
import { View, Text, Dimensions, ScrollView, StyleSheet } from "react-native";
import { SearchBar, List, ListItem, Avatar } from "react-native-elements";
import AvoidStatusBar from "./AvoidStatusBar";
import UserBlock from "./UserBlock";
import * as Animatable from "react-native-animatable";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const transitionProps = ["top", "height", "width"];
const searchBarTransitionProps = {
  hoverbar: ["top", "left", "height", "width", "shadowRadius"],
  square: ["top", "left"],
  destinationBox: ["left", "height", "opacity"],
  sourceBox: ["top", "opacity"],
  destinationText: ["top", "left", "fontSize", "color", "opacity"],
  sourceText: ["top", "opacity"],
  verticalBar: ["top", "left", "opacity"],
  dot: ["top", "left", "opacity"]
};

const users = [
  {
    name: "Keith Lim",
    img: require("../assets/Images/UserSample/keith.jpg"),
    subtitle: "Sleeping"
  },
  {
    name: "Anne Berry",
    img: require("../assets/Images/UserSample/anne.jpeg"),
    subtitle: "Cooking"
  },
  {
    name: "Jeremy",
    img: require("../assets/Images/UserSample/jeremy.jpg"),
    subtitle: "Probably working out"
  },
  {
    name: "Yacoub",
    img: require("../assets/Images/UserSample/yacoub.jpg"),
    subtitle: "Cooler than you"
  },
  {
    name: "Babbitt Habit",
    img: require("../assets/Images/UserSample/babbitt.jpeg"),
    subtitle: "Gym"
  }
];

class SearchBlock extends Component {
  state = {
    style: {
      top: this.props.visible ? 0 : SCREEN_HEIGHT,
      height: SCREEN_HEIGHT,
      width: SCREEN_WIDTH
    }
  };
  static defaultProps = {
    expanded: false,
    onPress: () => {},
    onSearchTextChange: () => {},
    searchText: "",
    visible: true,
    onCancelPressed: () => {}
  };

  onSearchTextChange = searchText => {
    const { onSearchTextChange } = this.props;

    onSearchTextChange(searchText);
  };

  getAnimatableStyles = () => {
    const { expanded, searchText } = this.props;
    const width = SCREEN_WIDTH - 24 * 2;

    return {
      hoverbar: {
        top: expanded ? 0 : 96,
        left: expanded ? 0 : 24,
        height: expanded ? 136 : 56,
        width: expanded ? windowWidth : width,
        shadowRadius: expanded ? 10 / 2 : 60 / 2
      },
      square: {
        top: expanded ? 109 : 96 + 56 / 2 - SQUARE_SIZE / 2,
        left: expanded ? 29 : 24 + 22
      },
      destinationBox: {
        left: expanded ? 56 : 24,
        right: 24,
        top: 96,
        height: expanded ? 32 : 56,
        opacity: expanded ? 1 : 0
      },
      destinationText: {
        left: expanded ? 65 : 75,
        top: expanded ? 103 : 112,
        fontSize: expanded ? 15 : 20,
        color: expanded ? "#A4A4AC" : "#525760",
        opacity: expanded && searchText.length !== 0 ? 0 : 1
      },
      sourceBox: {
        left: 56,
        right: 24,
        height: 32,
        top: expanded ? 56 : 96,
        opacity: expanded ? 1 : 0
      },
      sourceText: {
        left: 65,
        top: expanded ? 64 : 76,
        opacity: expanded ? 1 : 0
      },
      verticalBar: {
        top: expanded ? 78 : 78 + 22 - 5,
        left: expanded ? 32 : 32 + 22 - 5,
        opacity: expanded ? 1 : 0
      },
      dot: {
        top: expanded ? 69 : 69 + 22 - 5,
        left: expanded ? 29.5 : 29.5 + 22 - 5,
        opacity: expanded ? 1 : 0
      }
    };
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          position: "absolute",
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: "#FFF"
        }}
      >
        <AvoidStatusBar />
        <SearchBar
          lightTheme
          backgroundColor="#FFF"
          showLoading
          placeholder="Search friends..."
          clearIcon
          onCancel={this.props.onCancelPressed}
        />
        <Animatable.View
          style={[styles.container, this.state.style]}
          duration={300}
          direction={"reverse"}
          easing={"ease-out-quart"}
          transition={transitionProps}
        >
          <ScrollView style={{ marginLeft: 20, marginRight: 20 }}>
            <Text
              style={{
                color: "#BABBBA",
                marginLeft: 30,
                marginTop: 3,
                marginBottom: 15
              }}
            >
              Inviting
            </Text>
            <View style={{ height: 1, backgroundColor: "#B9BBB9" }} />
            <View
              style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}
            >
              <UserBlock />
              <View
                style={{
                  width: 1,
                  backgroundColor: "#B9BBB9",
                  marginTop: 10,
                  marginBottom: 10
                }}
              />
              <UserBlock />
            </View>
            <Text
              style={{
                color: "#BABBBA",
                marginLeft: 30,
                marginTop: 3,
                marginBottom: 3
              }}
            >
              People
            </Text>
            <List>
              {users.map((item, i) => (
                <ListItem
                  roundAvatar
                  hideChevron
                  avatar={<Avatar rounded medium source={item.img} />}
                  key={i}
                  title={item.name}
                  subtitle={
                    <Text
                      style={{
                        marginLeft: 10,
                        color: "#888888",
                        fontWeight: "600"
                      }}
                    >
                      {item.subtitle}
                    </Text>
                  }
                  onPress={this.props.onPress}
                />
              ))}
            </List>
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

export default SearchBlock;
