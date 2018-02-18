import React from "react";
import { View, Text, Image } from "react-native";
import { Avatar } from "react-native-elements";

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

const UserBlock = props => {
  return (
    <View style={{ flexDirection: "row", margin: 10 }}>
      <Image
        source={users[0].img}
        style={{ width: 27, height: 27, borderRadius: 13 }}
      />
      <Text style={{ marginLeft: 10, fontSize: 13, alignSelf: "center" }}>
        {users[0].name}
      </Text>
    </View>
  );
};

export default UserBlock;
