import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { width, height } from "../../utils/dimensions";
import SearchBox from "../../utils/shared/searchbox";
import { Ionicons } from "@expo/vector-icons";

const Messages = [
  {
    id: "1",
    userName: "Jenny Doe",
    userImg: require("../../assets/users/user-3.jpg"),
    messageTime: "4 mins ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
    favourite: true,
  },
  {
    id: "2",
    userName: "John Doe",
    userImg: require("../../assets/users/user-1.jpg"),
    messageTime: "2 hours ago",
    online: true,
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "3",
    userName: "Ken William",
    userImg: require("../../assets/users/user-4.jpg"),
    messageTime: "1 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
    favourite: true,
  },
  {
    id: "4",
    userName: "Selina Paul",
    userImg: require("../../assets/users/user-6.jpg"),
    messageTime: "1 day ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "5",
    userName: "Christy Alex",
    userImg: require("../../assets/users/user-7.jpg"),
    messageTime: "2 days ago",
    online: true,
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
    favourite: true,
  },
  {
    id: "6",
    userName: "Jenny Doe",
    userImg: require("../../assets/users/user-3.jpg"),
    messageTime: "4 mins ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "7",
    userName: "John Doe",
    userImg: require("../../assets/users/user-1.jpg"),
    messageTime: "2 hours ago",
    online: true,
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "8",
    userName: "Ken William",
    userImg: require("../../assets/users/user-4.jpg"),
    messageTime: "1 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "9",
    userName: "Selina Paul",
    userImg: require("../../assets/users/user-6.jpg"),
    messageTime: "1 day ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "10",
    userName: "Christy Alex",
    userImg: require("../../assets/users/user-7.jpg"),
    messageTime: "2 days ago",
    online: true,
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
    favourite: true,
  },
];

export default function Chats({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SearchBox text="Search messages" />
        <FlatList
          data={Messages}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate("chat", { username: item.userName })
              }
              style={({ pressed }) => [
                styles.chatwrap,
                { backgroundColor: pressed ? "lightgrey" : "white" },
              ]}
            >
              <View style={styles.imgWrap}>
                <Image style={styles.img} source={item.userImg} />
                <View
                  style={[
                    styles.onlineBadge,
                    {
                      backgroundColor: item.online ? "#21fd87" : "lightgrey",
                    },
                  ]}
                />
                {item.favourite ? (
                  <View style={styles.favouriteBox}>
                    <Ionicons name="ios-star" size={10} color="white" />
                  </View>
                ) : null}
              </View>

              <View style={styles.textWrap}>
                <Text style={styles.name}>{item.userName}</Text>
                <Text style={styles.messageText} numberOfLines={1}>
                  {item.messageText}
                </Text>
              </View>
              <Text style={styles.sendTime}>{item.messageTime}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchWrap: {
    width: "100%",
    height: height * 0.1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    width: "80%",
    height: 30,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "40%",
    marginLeft: 5,
  },
  chatwrap: {
    flexDirection: "row",
    width: width,
    paddingVertical: 8,
    alignItems: "center",
    paddingHorizontal: 13,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
  },
  messageText: {
    fontSize: 14,
    color: "grey",
    width: "80%",
    overflow: "hidden",
  },
  sendTime: {
    position: "absolute",
    fontSize: 10,
    top: 5,
    right: 5,
    color: "grey",
  },
  imgWrap: {
    width: "20%",
    height: (width - 35) * 0.2,
    marginRight: 16,
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    borderRadius: (width * 0.2) / 2,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  onlineBadge: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    position: "absolute",
    bottom: 0,
    borderWidth: 2,
    borderColor: "white",
  },
  textWrap: {
    width: "80%",
    overflow: "hidden",
    flexDirection: "column",
  },
  favouriteBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    borderRadius: 8,
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "gold",
    borderColor: "white",
    borderWidth: 2,
  },
});
