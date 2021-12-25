import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { width, height } from "../../utils/dimensions";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../utils/shared/flatbtn";
import Carousel from "react-native-snap-carousel";

export default function MyMatches({ navigation, route }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    if (route.params !== undefined) {
      const { gender, imgid, name } = route.params;
      setdata((predata) => [{ gender, imgid, name }, ...predata]);
    }
    return () => {};
  }, [route.params]);
  const images = [
    { imguri: require("../../assets/users/user-1.jpg") },
    { imguri: require("../../assets/users/user-2.jpg") },
    { imguri: require("../../assets/users/user-3.jpg") },
    { imguri: require("../../assets/users/user-4.jpg") },
    { imguri: require("../../assets/users/user-5.jpg") },
    { imguri: require("../../assets/users/user-6.jpg") },
  ];
  return (
    <Carousel
      data={data}
      layout={"tinder"}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.imgWrap}>
              <Image
                style={styles.img}
                source={require("../../assets/users/user-7.jpg")}
              />
              <Image style={styles.img} source={images[item.imgid].imguri} />
            </View>
            <AntDesign name="heart" size={24} color="deeppink" />
            <Text style={styles.title}>It's a match!</Text>
            <Text style={styles.snippet}>
              You and {item.name} like each other,
              {"\n"}
              you can now send {item.gender == 1 ? "him" : "her"} a message
            </Text>
          </View>
          <View>
            <Button
              style={{
                backgroundColor: "deeppink",
                width: width * 0.7,
                marginBottom: height * 0.02,
              }}
              text={"SEND A MESSAGE"}
              onPress={() =>
                navigation.navigate("Chats", {
                  screen: "chat",
                  params: { username: item.name },
                })
              }
            />

            <Button
              style={{ backgroundColor: "deepskyblue", width: width * 0.7 }}
              text={"KEEP BROWSING"}
              onPress={() => navigation.navigate("Browse")}
            />
          </View>
        </View>
      )}
      sliderWidth={width}
      itemWidth={width * 0.8}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: 0,
  },
  card: {
    marginTop: height * 0.1,
    width: width * 0.9,
    height: height * 0.3,
    elevation: 8,
    shadowColor: "#ddd",
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    resizeMode: "cover",
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: (width * 0.25) / 2,
    zIndex: 1,
  },
  imgWrap: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    top: -height * 0.05,
    position: "absolute",
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    color: "black",
    marginVertical: height * 0.015,
  },
  snippet: {
    lineHeight: 20,
    textAlign: "center",
    color: "grey",
  },
});
