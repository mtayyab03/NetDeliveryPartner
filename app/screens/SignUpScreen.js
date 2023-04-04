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
import TitleFfield from "../components/TitleFfield";
import Fieldtwoend from "../components/Fieldtwoend";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function SignUpScreen(props) {
  const [num, onChangeNum] = useState("");
  return (
    <Screen style={styles.screen}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={styles.logocontainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/netdeliveryres.png")}
          />
        </View>

        {/* title field */}
        <View style={{ marginTop: RFPercentage(7) }} />
        <TitleFfield title="First & Last name" subtitle="Eric Zuma" />

        {/* title business type */}
        <View style={{ marginTop: RFPercentage(3) }} />
        <View style={{ width: "90%", justifyContent: "center" }}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: RFPercentage(2),
              color: Colors.blacky,
              marginBottom: RFPercentage(1.5),
              fontFamily: FontFamily.regular,
            }}
          >
            Business type
          </Text>
        </View>

        {/* two end */}
        <Fieldtwoend
          inputTitle="Registered"
          imageSource={require("../../assets/images/dropdown.png")}
        />

        {/* title field Business name*/}
        <View style={{ marginTop: RFPercentage(3) }} />
        <TitleFfield title="Business name" subtitle="The Kota Shop" />

        {/* title field Business name*/}
        <View style={{ marginTop: RFPercentage(3) }} />
        <TitleFfield title="Email" subtitle="eric.zuma@gmail.com" />

        {/* title Phone number*/}
        <View style={{ marginTop: RFPercentage(3) }} />
        <View style={{ width: "90%", justifyContent: "center" }}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: RFPercentage(2),
              color: Colors.blacky,
              marginBottom: RFPercentage(1.5),
              fontFamily: FontFamily.regular,
            }}
          >
            Phone number
          </Text>
        </View>
        <View style={{ flexDirection: "row", width: "90%" }}>
          <View
            style={{
              width: "17%",
              borderRadius: RFPercentage(1),
              borderWidth: RFPercentage(0.2),
              borderColor: Colors.blacky,
              height: RFPercentage(7),
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                }}
                source={require("../../assets/images/africaflaglogo.png")}
              />
            </View>
            <View style={{ marginLeft: RFPercentage(0.5) }}>
              <Image
                style={{
                  width: RFPercentage(1.5),
                  height: RFPercentage(0.8),
                }}
                source={require("../../assets/images/dropdown.png")}
              />
            </View>
          </View>

          <View style={{ marginLeft: "3%" }} />
          {/* number field */}
          <View style={styles.searchmain}>
            <View style={styles.innermain}>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: RFPercentage(2),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                +27
              </Text>

              <TextInput
                style={styles.inputtext}
                onChangeText={onChangeNum}
                value={num}
                placeholder={"Mobile number"}
                placeholderTextColor={Colors.grey}
              />
            </View>
          </View>
        </View>

        {/* title City */}
        <View style={{ marginTop: RFPercentage(3) }} />
        <View style={{ width: "90%", justifyContent: "center" }}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: RFPercentage(2),
              color: Colors.blacky,
              marginBottom: RFPercentage(1.5),
              fontFamily: FontFamily.regular,
            }}
          >
            City
          </Text>
        </View>

        {/* two end */}
        <Fieldtwoend
          inputTitle=" City, e.g johannesburg"
          imageSource={require("../../assets/images/dropdown.png")}
        />

        {/* title ID Number/Passport*/}
        <View style={{ marginTop: RFPercentage(3) }} />
        <TitleFfield
          title="ID Number/Passport"
          subtitle="eric.zuma@gmail.com"
        />

        {/* ID/Passport */}
        <View style={{ marginTop: RFPercentage(6) }} />
        <View
          style={{ width: "90%", flexDirection: "row", alignItems: "center" }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: RFPercentage(2.5),
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
            }}
          >
            ID/Passport
          </Text>
          <View style={styles.buttonmain}>
            <Text style={styles.buttontext}>+ Upload file</Text>
          </View>
        </View>

        {/* company reg */}
        <View style={{ marginTop: RFPercentage(6) }} />
        <View
          style={{ width: "90%", flexDirection: "row", alignItems: "center" }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: RFPercentage(2.5),
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
            }}
          >
            Company Reg
          </Text>
          <View style={styles.buttonmain}>
            <Text style={styles.buttontext}>+ Upload file</Text>
          </View>
        </View>

        {/* signup button */}
        <TouchableOpacity
          style={styles.loginbutton}
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("LoginScreen");
          }}
        >
          <AppButton title="SIGN UP" buttonColor={Colors.primary} />
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
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(7),
  },
  logo: {
    width: RFPercentage(32),
    height: RFPercentage(6),
  },
  searchmain: {
    width: "80%",
    backgroundColor: Colors.white,
    padding: RFPercentage(1),
    borderWidth: RFPercentage(0.2),
    borderColor: Colors.blacky,
    borderRadius: RFPercentage(1),
    height: RFPercentage(7),
    justifyContent: "center",
  },

  innermain: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFPercentage(1),
  },

  inputtext: {
    width: "100%",
    paddingLeft: RFPercentage(1.5),
    fontWeight: "400",
    fontSize: RFPercentage(1.9),
    color: Colors.blacky,
    fontFamily: FontFamily.regular,
  },
  buttonmain: {
    position: "absolute",
    right: 0,
    width: RFPercentage(16),
    height: RFPercentage(6),
    borderRadius: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },

  buttontext: {
    color: Colors.white,
    fontSize: RFPercentage(2),
    fontFamily: FontFamily.medium,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(5),
    marginBottom: RFPercentage(5),
  },
});
