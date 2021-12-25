import React from "react";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Footer, Content, Container, Thumbnail } from "native-base";
import { height } from "../utils/dimensions";

export default function CustomDrawerContent({ progress, ...rest }) {
  return (
    <Container transparent>
      <View style={styles.header}>
        <Thumbnail
          style={{
            width: height * 0.13,
            height: height * 0.13,
            borderRadius: (height * 0.13) / 2,
          }}
          source={require("../assets/users/user-7.jpg")}
        />
        <Text style={styles.name}>Cameron</Text>
        <TouchableOpacity onPress={() => alert("Edit clicked.")}>
          <Text style={styles.editProf}>EDIT PROFILE</Text>
        </TouchableOpacity>
      </View>
      <Content>
        <DrawerContentScrollView>
          <DrawerItemList {...rest} />
        </DrawerContentScrollView>
      </Content>
      <Footer style={styles.footer}>
        <Text style={styles.footerText}>Hooked</Text>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "deeppink",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.1,
  },
  footerText: {
    color: "white",
    fontSize: 13,
    letterSpacing: 2,
  },
  header: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.3,
    marginHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
  },
  name: {
    marginTop: height * 0.01,
    fontSize: 25,
    letterSpacing: 3,
    color: "black",
  },
  editProf: {
    color: "deeppink",
    fontWeight: "bold",
    fontSize: 10,
  },
});
