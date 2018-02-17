import React from "react";
import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Icon } from "react-native-elements";
import { ActivityStyle } from "../../styling";
import LinearGradient from "react-native-linear-gradient";

const SCREEN_WIDTH = Dimensions.get("window").width;

const EventCard = ({ eventDetail, onPress }) => {
  const {
    name,
    location,
    date,
    event_img,
    time,
    followers,
    user
  } = eventDetail;
  console.log(event_img);
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerStyle}>
      <ImageBackground
        style={{
          width: SCREEN_WIDTH,
          height: 180
        }}
        source={require("../../assets/Images/CategoriesPhotos/animals.jpeg")}
      >
        <LinearGradient
          colors={["transparent", "#000"]}
          locations={[0.4, 1.2]}
          style={ActivityStyle.linearGradient}
        >
          <View
            style={{
              height: 180,
              paddingBottom: 15,
              flexDirection: "column",
              justifyContent: "flex-end"
            }}
          >
            <Text style={ActivityStyle.cardTitle}>{name}</Text>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <Text style={ActivityStyle.cardDate}>{date}</Text>
              <View
                style={{
                  height: 7,
                  width: 7,
                  borderRadius: 7,
                  backgroundColor: "#FFF",
                  alignSelf: "center",
                  justifyContent: "center",
                  margin: 5,
                  marginBottom: 10
                }}
              />
              <Text style={[ActivityStyle.cardDate, { marginLeft: 0 }]}>
                {time.startTime}
              </Text>
            </View>
            <View style={{ marginLeft: 20, marginBottom: 5 }}>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Icon name="room" size={10} color="#FFF" />
                <Text style={ActivityStyle.cardLocation}>
                  {location.addressName}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    flex: 1
  }
};

export default EventCard;
