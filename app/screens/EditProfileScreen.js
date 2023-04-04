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
      title: "Cafe Corner",
      subtitle: "Business name",
    },
    {
      id: 2,
      title: "Trot Mabuso",
      subtitle: "Owners name",
    },
    {
      id: 3,
      title: "2012/07686/07",
      subtitle: "Registration number",
    },
    {
      id: 4,
      title: "0674055339",
      subtitle: "Phone numbers",
    },
    {
      id: 5,
      title: "cafecorner@gmail.com",
      subtitle: "Email address",
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

        {/* Set Hours */}
        <View style={{ marginTop: RFPercentage(5) }} />
        <View
          style={{
            width: "90%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(2.3),
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
            }}
          >
            Set Hours
          </Text>
        </View>

        {/* week start end times */}
        <View
          style={{
            width: "85%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(3),
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ position: "absolute", left: 0 }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.3),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Week days
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: RFPercentage(2.3),
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
            }}
          >
            Start time
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ position: "absolute", right: RFPercentage(2) }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.3),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              End time
            </Text>
          </TouchableOpacity>
        </View>

        {/* date card */}
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(2),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.lightWhite,
            borderRadius: RFPercentage(1),
            padding: RFPercentage(2),
          }}
        >
          <View
            style={{
              width: "95%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ position: "absolute", left: 0 }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(2.3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                Mon
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: RFPercentage(2.3),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              09:30 am
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ position: "absolute", right: 0 }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(2.3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                18:30 pm
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*2nd date card */}
        <DateCard
          weekday="Tue"
          addlogo={require("../../assets/images/addlogo.png")}
        />
        {/*2nd date card */}
        <DateCard
          weekday="Wed"
          addlogo={require("../../assets/images/addlogo.png")}
        />
        {/*2nd date card */}
        <DateCard
          weekday="Thu"
          addlogo={require("../../assets/images/addlogo.png")}
        />
        {/*2nd date card */}
        <DateCard
          weekday="Fri"
          addlogo={require("../../assets/images/addlogo.png")}
        />
        {/*2nd date card */}
        <DateCard
          weekday="Sat"
          addlogo={require("../../assets/images/addlogo.png")}
        />
        {/*2nd date card */}
        <DateCard
          weekday="Sun"
          addlogo={require("../../assets/images/addlogo.png")}
        />

        {/* signup button */}
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
