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
import MapView, { Marker, Polyline } from "react-native-maps";
import AntDesign from "react-native-vector-icons/AntDesign";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function McNewOrderscreen(props) {
  return (
    <Screen style={styles.screen}>
      {/* yellow backgroundColor */}
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: Colors.primary,
          alignItems: "center",
        }}
      >
        {/* menu */}
        <View style={{ width: "90%", zIndex: 1, marginTop: RFPercentage(2) }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate("ProfileScreen");
            }}
            style={{
              width: RFPercentage(6),
              height: RFPercentage(6),
              borderRadius: RFPercentage(3),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.white,
            }}
          >
            <Image
              style={{
                width: RFPercentage(2.5),
                height: RFPercentage(2.5),
              }}
              source={require("../../assets/images/menu.png")}
            />
          </TouchableOpacity>
        </View>

        {/* card */}
        <View
          style={{
            width: RFPercentage(40),
            height: RFPercentage(40),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.white,
            borderRadius: RFPercentage(2),
            zIndex: 1,
            position: "absolute",
            bottom: RFPercentage(13),
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <View
            style={{
              padding: RFPercentage(3),
              borderRadius: RFPercentage(8),
              backgroundColor: Colors.red,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: RFPercentage(6),
                height: RFPercentage(6),
              }}
              source={require("../../assets/images/macdonaldimg.png")}
            />
          </View>

          {/* text */}
          <View style={{ marginTop: RFPercentage(4) }} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              McDonalds, 7th Road, 1.5 km
            </Text>
          </View>
          {/* swipe button */}
          <View
            style={{
              marginTop: RFPercentage(3),
              borderRadius: RFPercentage(5),
              width: "90%",
              padding: RFPercentage(1),
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: Colors.lightWhite,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                props.navigation.navigate("OrderPreparedScreen");
              }}
              style={{
                width: RFPercentage(6),
                height: RFPercentage(6),
                borderRadius: RFPercentage(3),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.primary,
              }}
            >
              <AntDesign name="right" size={25} color={Colors.white} />
            </TouchableOpacity>

            <Text
              style={{
                marginLeft: RFPercentage(2.5),
                fontSize: RFPercentage(2),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Swipe to Accept order
            </Text>
          </View>
        </View>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -33.9249,
            longitude: 18.4241,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: -33.9249, longitude: 18.4241 }}
            title={"Cape Town"}
            description={"The legislative capital of South Africa"}
          />
          {/* container */}
        </MapView>

        {/* go online button */}
        <View
          style={{
            width: "100%",
            alignItems: "center",
            zIndex: 1,
            justifyContent: "center",
            marginTop: RFPercentage(7),
          }}
        ></View>
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
