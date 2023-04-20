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

//Components
import Screen from "../components/Screen";
import AppLine from "../components/AppLine";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function OrderHistory(props) {
  const orderHistoryList = [
    {
      id: 1,
      date: "20 April 2022 at 14:45 pm",
      rupees: "76.50",
      delivery: "67 Bush Road",
      loc: "Card",
      orderno: "UYHKT",
      thing: "Food",
    },
    {
      id: 2,
      date: "16 April 2022 at 14:45 pm",
      rupees: "117.50",
      delivery: "27 Lord Road  ",
      loc: "Card",
      orderno: "HYTHS",
      thing: "Medication",
    },
  ];
  return (
    <Screen style={styles.screen}>
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
            source={require("../../assets/images/leftarrow.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: RFPercentage(2.8),
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
          }}
        >
          Delivery History
        </Text>
      </View>
      {/* deliverd container */}
      <View style={{ marginTop: RFPercentage(3) }} />

      {orderHistoryList.map((item, i) => (
        <View
          key={i}
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(4),
          }}
        >
          <View style={{ width: "90%", flexDirection: "row" }}>
            <Text
              style={{
                fontSize: RFPercentage(2.7),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              {item.date}
            </Text>
            <View style={{ position: "absolute", right: 0 }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.7),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                R{item.rupees}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              marginTop: RFPercentage(2),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.4),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Delivered to {item.delivery}
            </Text>
            <View style={{ position: "absolute", right: 0 }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.4),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                {item.loc}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              marginTop: RFPercentage(1.8),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.4),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Order number:{item.orderno}
            </Text>
            <View style={{ position: "absolute", right: 0 }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.4),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                {item.thing}
              </Text>
            </View>
          </View>
          <View style={{ width: "90%", marginTop: RFPercentage(3) }}>
            <AppLine />
          </View>
        </View>
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
