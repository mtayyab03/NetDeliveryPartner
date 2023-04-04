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

export default function PaymentsScreen(props) {
  const [menuid, setmenuid] = useState(true);
  return (
    <Screen style={styles.screen}>
      {/* header */}
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
          Payment details
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("CardScreen");
          }}
          style={{
            position: "absolute",
            right: 0,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: RFPercentage(3.5),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/addlogo.png")}
          />
          <Text
            style={{
              marginLeft: RFPercentage(1),
              fontSize: RFPercentage(2.6),
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
      </View>

      {/* radio selection card */}
      <View style={{ marginTop: RFPercentage(7) }} />
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setmenuid(true)}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: RFPercentage(6),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/visacard.png")}
          />
          <View
            style={{
              width: RFPercentage(1),
              height: RFPercentage(1),
              borderRadius: RFPercentage(2),
              backgroundColor: Colors.blacky,
              marginLeft: RFPercentage(2),
            }}
          />
          <View
            style={{
              width: RFPercentage(1),
              height: RFPercentage(1),
              borderRadius: RFPercentage(2),
              backgroundColor: Colors.blacky,
              marginLeft: RFPercentage(0.7),
            }}
          />
          <View
            style={{
              width: RFPercentage(1),
              height: RFPercentage(1),
              borderRadius: RFPercentage(2),
              backgroundColor: Colors.blacky,
              marginLeft: RFPercentage(0.7),
            }}
          />
          <View
            style={{
              width: RFPercentage(1),
              height: RFPercentage(1),
              borderRadius: RFPercentage(2),
              backgroundColor: Colors.blacky,
              marginLeft: RFPercentage(0.7),
            }}
          />

          <Text
            style={{
              marginLeft: RFPercentage(1),
              fontSize: RFPercentage(2.6),
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
            }}
          >
            1967
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            right: 0,
            width: RFPercentage(3),
            height: RFPercentage(3),
            borderWidth: RFPercentage(0.5),
            borderRadius: RFPercentage(4),
            borderColor: Colors.grey,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuid == true ? (
            <View
              style={{
                width: RFPercentage(1.7),
                height: RFPercentage(1.7),
                borderRadius: RFPercentage(2),
                backgroundColor: Colors.primary,
              }}
            />
          ) : null}
        </View>
      </View>

      {/* 2nd one */}
      <View style={{ marginTop: RFPercentage(3) }} />
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => setmenuid(false)}
          activeOpacity={1}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: RFPercentage(6),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/cashicon.png")}
          />

          <Text
            style={{
              marginLeft: RFPercentage(2),
              fontSize: RFPercentage(2.6),
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
            }}
          >
            Cash
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            right: 0,
            width: RFPercentage(3),
            height: RFPercentage(3),
            borderWidth: RFPercentage(0.5),
            borderRadius: RFPercentage(4),
            borderColor: Colors.grey,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuid == false ? (
            <View
              style={{
                width: RFPercentage(1.7),
                height: RFPercentage(1.7),
                borderRadius: RFPercentage(2),
                backgroundColor: Colors.primary,
              }}
            />
          ) : null}
        </View>
      </View>
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
