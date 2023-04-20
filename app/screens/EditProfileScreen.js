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
import AppButton from "../components/AppButton";
import DateCard from "../components/DateCard";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function EditProfileScreen(props) {
  const editDetailList = [
    {
      id: 1,
      title: "Trot",
      subtitle: "First name",
    },
    {
      id: 2,
      title: "Mabuso",
      subtitle: "Last name",
    },
    {
      id: 3,
      title: "0674055339",
      subtitle: "Phone numbers",
    },
  ];
  return (
    <Screen style={styles.screen}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View
          style={{
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(3),
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate("ProfileScreen");
            }}
            style={{ position: "absolute", left: 0 }}
          >
            <Image
              style={{
                width: RFPercentage(3.5),
                height: RFPercentage(3.5),
              }}
              source={require("../../assets/images/cancelicon.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: RFPercentage(2.8),
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
            }}
          >
            Edit Profile
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate("ProfileScreen");
            }}
            style={{ position: "absolute", right: 0 }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.5),
                color: Colors.primary,
                fontFamily: FontFamily.regular,
              }}
            >
              Done
            </Text>
          </TouchableOpacity>
        </View>

        {/* picture profile */}
        <View
          style={{
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(3),
          }}
        >
          <Image
            style={{
              width: RFPercentage(9),
              height: RFPercentage(9),
              borderRadius: RFPercentage(5),
            }}
            source={require("../../assets/images/profilepic.png")}
          />
        </View>

        <View style={{ marginTop: RFPercentage(3) }} />
        {/* details small cards */}
        {editDetailList.map((item, i) => (
          <View
            key={i}
            style={{
              width: "90%",
              marginTop: RFPercentage(2),
              backgroundColor: Colors.lightWhite,
              borderRadius: RFPercentage(1),
              padding: RFPercentage(2),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(1.8),
                color: Colors.darkgrey,
                fontFamily: FontFamily.regular,
              }}
            >
              {item.subtitle}
            </Text>
            <View style={{ marginTop: RFPercentage(1) }} />
            <Text
              style={{
                fontSize: RFPercentage(2.5),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              {item.title}
            </Text>
          </View>
        ))}

        {/* delete account button */}
        <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
          <AppButton title="Delete Account" buttonColor={Colors.red} />
        </TouchableOpacity>
      </ScrollView>
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
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(5),
    marginBottom: RFPercentage(5),
  },
});
