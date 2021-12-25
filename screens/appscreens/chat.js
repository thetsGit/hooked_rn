import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { AntDesign } from "@expo/vector-icons";

export default function Chat({ navigation, route }) {
  const { username } = route.params;
  const [messages, setmessages] = useState([
    {
      _id: 1,
      text: "Sender",
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      user: {
        _id: 1,
        name: "React Native",
        avatar: require("../../assets/users/user-7.jpg"),
      },

      // Any additional custom parameters are passed through
    },
    {
      _id: 2,
      text: "Receiver",
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      user: {
        _id: 2,
        name: "React Native",
        avatar: require("../../assets/users/user-1.jpg"),
      },

      // Any additional custom parameters are passed through
    },
    {
      _id: 3,
      text: "Other",
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      user: {
        _id: 3,
        name: "React Native",
        avatar: require("../../assets/users/user-3.jpg"),
      },

      // Any additional custom parameters are passed through
    },
    {
      _id: 4,
      text: "Receiver",
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      user: {
        _id: 2,
        name: "React Native",
        avatar: require("../../assets/users/user-3.jpg"),
      },

      // Any additional custom parameters are passed through
    },
    {
      _id: 5,
      text: "Other",
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      user: {
        _id: 5,
        name: "React Native",
        avatar: require("../../assets/users/user-3.jpg"),
      },

      // Any additional custom parameters are passed through
    },
    {
      _id: 6,
      text: "Other",
      createdAt: new Date(Date.UTC(2016, 5, 11, 20, 20, 12)),
      user: {
        _id: 6,
        name: "React Native",
        avatar: require("../../assets/users/user-3.jpg"),
      },

      // Any additional custom parameters are passed through
    },
  ]);

  // function onSend(message) {
  //   setmessages((premessages) => [...premessages, message[0]]);
  //   console.log(GiftedChat);
  //   console.log(messages);
  // }
  function onSend() {
    setmessages((premessages) => [
      ...premessages,
      {
        _id: "1d9d12dd-533f-4055-9279-e009a92ae0e8",
        createdAt: new Date(Date.UTC(2016, 5, 11, 20, 20, 12)),
        text: "Qksjsjs",
        user: {
          _id: 1,
          avatar: 28,
          name: "ThetHan",
        },
      },
    ]);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: username,
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 16 }}
          onPress={() => navigation.navigate("chats")}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [username, navigation]);

  return (
    <View style={styles.chatWrap}>
      <GiftedChat
        messages={messages}
        user={{
          _id: 1,
          name: "ThetHan",
          avatar: require("../../assets/users/user-2.jpg"),
        }}
        onSend={(message) => onSend(message)}
        isAnimated={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chatWrap: {
    flex: 1,
    backgroundColor: "white",
  },
});
