import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { width, height } from "../../utils/dimensions";
import SearchBox from "../../utils/shared/searchbox";
import { Entypo } from "@expo/vector-icons";

export default function Favourites() {
  const [data, setdata] = useState([
    {
      name: "Benjamin",
      imguri: require("../../assets/users/user-1.jpg"),
      date: "16 Sep, 2016",
    },
    {
      name: "Stephanie",
      imguri: require("../../assets/users/user-2.jpg"),
      date: "12 Aug",
    },
    {
      name: "Leshrus",
      imguri: require("../../assets/users/user-3.jpg"),
      date: "16 sep, 2016",
    },
    {
      name: "Sophia",
      imguri: require("../../assets/users/user-4.jpg"),
      date: "16 sep, 2016",
    },
    {
      name: "Stephen",
      imguri: require("../../assets/users/user-5.jpg"),
      date: "16 sep, 2016",
    },
    {
      name: "William",
      imguri: require("../../assets/users/user-6.jpg"),
      date: "16 sep, 2016",
    },
    {
      name: "Lust",
      imguri: require("../../assets/users/user-7.jpg"),
      date: "16 sep, 2016",
    },
    {
      name: "Walker",
      imguri: require("../../assets/users/user-1.jpg"),
      date: "16 Sep, 2016",
    },
    {
      name: "Katherine",
      imguri: require("../../assets/users/user-2.jpg"),
      date: "12 Aug",
    },
    {
      name: "dollus",
      imguri: require("../../assets/users/user-3.jpg"),
      date: "16 sep, 2016",
    },
    {
      name: "sofia",
      imguri: require("../../assets/users/user-4.jpg"),
      date: "16 sep, 2016",
    },
    {
      name: "John",
      imguri: require("../../assets/users/user-5.jpg"),
      date: "16 sep, 2016",
    },
  ]);

  const crossHandler = (name) => {
    setdata((preData) => preData.filter((data) => data.name !== name));
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <SearchBox text="Search by username" />

        <FlatList
          numColumns={2}
          data={data}
          style={styles.contentWrap}
          renderItem={({ item }) => (
            <View style={styles.itemWrap}>
              <View style={styles.imgWrap}>
                <Image style={styles.img} source={item.imguri} />
                <TouchableOpacity
                  style={styles.crossWrap}
                  onPress={() => crossHandler(item.name)}
                >
                  <Entypo name="cross" size={17} color="white" />
                </TouchableOpacity>
              </View>

              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.addedText}>
                Added on <Text style={{ fontSize: 12 }}>{item.date}</Text>
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1,
    backgroundColor: "white",
  },
  contentWrap: {
    width: width,
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  itemWrap: {
    marginVertical: height * 0.02,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgWrap: {
    width: width * 0.3,
    height: width * 0.3,
  },
  img: {
    width: null,
    height: null,
    flex: 1,
    borderRadius: (width * 0.3) / 2,
    resizeMode: "cover",
  },
  name: {
    fontSize: 20,
    marginTop: 3,
  },
  addedText: {
    fontSize: 11,
    color: "grey",
  },
  crossWrap: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 22 / 2,
    backgroundColor: "red",
    position: "absolute",
    right: width * 0.038,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
