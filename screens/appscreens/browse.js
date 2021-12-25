import React, { useState } from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { width, height } from "../../utils/dimensions";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";

const Card = ({ style, children }) => (
  <View style={[styles.card, style]}>{children}</View>
);

const Btn = ({ size, children, style, onPress }) => (
  <Pressable
    style={[
      styles.btn,
      {
        width: size,
        height: size,
        borderRadius: size,
      },
      style,
    ]}
    onPress={onPress}
  >
    {children}
  </Pressable>
);

export default function Browse({ navigation }) {
  const [data, setdata] = useState([
    {
      name: "Benjamin",
      age: 23,
      far: 12,
      gender: 1,
      imgid: 0,
      imguri: require("../../assets/users/user-1.jpg"),
    },
    {
      name: "Christy",
      age: 17,
      far: 24,
      gender: 0,
      imgid: 1,
      imguri: require("../../assets/users/user-2.jpg"),
    },
    {
      name: "Alex",
      age: 26,
      far: 19,
      gender: 1,
      imgid: 2,
      imguri: require("../../assets/users/user-3.jpg"),
    },
    {
      name: "Hayworth",
      age: 28,
      far: 45,
      gender: 0,
      imgid: 3,
      imguri: require("../../assets/users/user-4.jpg"),
    },
    {
      name: "Ken",
      age: 20,
      far: 9,
      gender: 1,
      imgid: 4,
      imguri: require("../../assets/users/user-5.jpg"),
    },
    {
      name: "William",
      age: 18,
      far: 52,
      gender: 1,
      imgid: 5,
      imguri: require("../../assets/users/user-6.jpg"),
    },
  ]);

  const crossHandler = (name) => {
    setdata((preData) => preData.filter((data) => data.name !== name));
  };
  return (
    <Carousel
      style={{ flex: 1, zIndex: 1 }}
      data={data}
      layout={"stack"}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.photoContainer}>
            <Card
              style={{ transform: [{ rotate: "-3deg" }, { translateY: 8 }] }}
            />
            <Card
              style={{
                zIndex: 3,
                transform: [
                  { rotate: "-5deg" },
                  { translateX: -5 },
                  { translateY: -6 },
                ],
              }}
            />
            <Card style={{ zIndex: 5 }}>
              <Image style={styles.img} source={item.imguri} />
            </Card>
          </View>
          <View style={styles.curvedWrap} />
          <View style={styles.contentWrap}>
            <Btn
              size={width * 0.1}
              style={{
                position: "absolute",
                top: -height * 0.015,
                zIndex: 10,
                alignSelf: "center",
                backgroundColor: "dodgerblue",
                borderColor: "lightgrey",
                borderWidth: StyleSheet.hairlineWidth,
              }}
            >
              <AntDesign name="star" size={20} color="white" />
            </Btn>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.snippet}>
              {item.age} yrs old &#8226; {item.far}km away
            </Text>
            <View style={styles.btnWrap}>
              <Btn
                size={width * 0.2}
                style={{ backgroundColor: "grey" }}
                onPress={() => crossHandler(item.name)}
              >
                <Entypo name="cross" size={65} color="white" />
              </Btn>
              <Btn
                size={width * 0.2}
                style={{ backgroundColor: "deeppink" }}
                onPress={() => {
                  crossHandler(item.name);
                  navigation.navigate("MyMatches", item);
                }}
              >
                <AntDesign name="heart" size={40} color="white" />
              </Btn>
            </View>
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
    zIndex: -1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  photoContainer: {
    flex: 2.1,
  },
  contentWrap: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  btnWrap: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  curvedWrap: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "white",
    width: width,
    height: height * 0.295,
    alignSelf: "center",
    borderTopLeftRadius: width / 2,
    borderTopRightRadius: width / 2,
    transform: [{ scaleX: 1.6 }],
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.7,
    height: height * 0.45,
    shadowColor: "lightgrey",
    elevation: 10,
    backgroundColor: "white",
    position: "absolute",
    top: height * 0.07,
    alignSelf: "center",
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  img: {
    width: "90%",
    height: "90%",
    resizeMode: "cover",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
  },
  snippet: {
    marginBottom: 16,
    fontSize: 11,
    color: "grey",
  },
});

// const Card = ({ zIndex, skewX }) =>(
//     <Animated.View
//       style={[
//         styles.card,
//       ]}
//     />
//   );
