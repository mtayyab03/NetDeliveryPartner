import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function HomeScreen(props) {
  return (
    <Screen style={styles.screen}>

      {/* yellow backgroundColor */}
      <View style={{width:'100%',height:'90%',backgroundColor:Colors.primary,alignItems:'center'}}>
        {/* menu */}
        <View style={{width:'90%', marginTop:RFPercentage(2)}}>
      <View style={{
              width: RFPercentage(6),
              height: RFPercentage(6),
              borderRadius: RFPercentage(3),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.white,
             
              }}>
      <Image
          style={{
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={require("../../assets/images/menu.png")}
        />
    </View>
    </View>
    {/* go online button */}
    <View style={{width:'100%',alignItems:'center',justifyContent:'center',
                marginTop:RFPercentage(5),marginBottom:RFPercentage(3),}}>
    <TouchableOpacity activeOpacity={0.7} onPress={() => {
                props.navigation.navigate("NewOrderScreen");
              }} style={{
              width: RFPercentage(20),
              height: RFPercentage(7),
              borderRadius: RFPercentage(8),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.white,
              flexDirection:'row',
              }}>
      <Image
          style={{
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={require("../../assets/images/powebutton.png")}
        />
        <View style={{marginLeft:RFPercentage(1.2)}}/>
        <Text
          style={{
            fontSize: RFPercentage(2.5),
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
          }}
        >
          Go online
        </Text>
    </TouchableOpacity>
    </View>

<View style={{width:'90%',paddingLeft:RFPercentage(4)}}>
    <View style={{width:'70%',alignItems:'center',
                marginTop:RFPercentage(5),marginBottom:RFPercentage(3),}}>
                 <Text
          style={{
            fontSize: RFPercentage(6),
            color: Colors.white,
            fontFamily: FontFamily.medium,
            lineHeight:RFPercentage(8)
          }}
        >
          Welcome to your 
          NetDelivery Partner system 
        </Text> 
       </View>
       </View>
      </View>

      {/* offline text */}
      <View style={{width:'90%',alignItems:'center',justifyContent:'center',marginTop:RFPercentage(3),marginBottom:RFPercentage(3)}}>
      <Text
          style={{
            fontSize: RFPercentage(2.5),
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
          }}
        >
          You are offline
        </Text>
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
})