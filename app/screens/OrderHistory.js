import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import TitleDateRup from "../components/TitleDateRup";
import HeaderTriple from "../components/HeaderTriple";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function OrderHistory(props) {
  const orderHistoryList = [
    {
      id: 1,
      title: "Thomas Order#UHGES",
      date: "27 April 2022  11:05",
      rupees: "154,80",
    },
    {
      id: 2,
      title: "David Order#UXGES",
      date: "27 April 2022  12:05",
      rupees: "124,50",
    },
  ];
  return (
    <Screen style={styles.screen}>
      {/* header */}
      <HeaderTriple
        firstImage={require("../../assets/images/leftarrow.png")}
        title="Order History"
        secondImage={require("../../assets/images/filter.png")}
        onpress={() => {
          props.navigation.navigate("ProfileScreen");
        }}
        onpressSec={() => {
          props.navigation.navigate("ProfileScreen");
        }}
      />

      {/* deliverd container */}
      <View style={{ marginTop: RFPercentage(4) }} />
      {orderHistoryList.map((item, i) => (
        <TitleDateRup
          key={i}
          title={item.title}
          date={item.date}
          rupees={item.rupees}
        />
      ))}
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});
