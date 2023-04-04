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
import ProfileMain from "../components/ProfileMain";
import LogoTitle from "../components/LogoTitle";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function ProfileScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={{ marginTop: RFPercentage(4) }} />
      <ProfileMain
        imageSource={require("../../assets/images/profilepic.png")}
        title="Cafe Corner"
        subtitle="Edit Profile"
        onpress={() => {
          props.navigation.navigate("EditProfileScreen");
        }}
      />

      <View style={{ marginTop: RFPercentage(4) }} />

      {/*Profile buttons list */}
      <LogoTitle
        imageSource={require("../../assets/images/msglogo.png")}
        title="Messages"
        onpress={() => {
          props.navigation.navigate("MessageScreen");
        }}
      />
      <LogoTitle
        imageSource={require("../../assets/images/paymentslogo.png")}
        title="Payments"
        onpress={() => {
          props.navigation.navigate("PaymentsScreen");
        }}
      />
      <LogoTitle
        imageSource={require("../../assets/images/orderhistorylogo.png")}
        title="Order History"
        onpress={() => {
          props.navigation.navigate("OrderHistory");
        }}
      />
      <LogoTitle
        imageSource={require("../../assets/images/earninglogo.png")}
        title="Earnings"
        onpress={() => {
          props.navigation.navigate("EarningsScreen");
        }}
      />
      <LogoTitle
        imageSource={require("../../assets/images/logoutlogo.png")}
        title="Log Out"
        onpress={() => {
          props.navigation.navigate("LoginScreen");
        }}
      />
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
