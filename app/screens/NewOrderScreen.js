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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";


export default function NewOrderScreen(props) {
  return (
    <Screen style={styles.screen}>

      {/* yellow backgroundColor */}
      <View style={{width:'100%',height:'80%',backgroundColor:Colors.primary,alignItems:'center'}}>
        {/* menu */}
        <View style={{width:'90%', marginTop:RFPercentage(2)}}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => {
                props.navigation.navigate("OrdersScreen");
              }} style={{
              width: RFPercentage(6),
              height: RFPercentage(6),
              borderRadius: RFPercentage(3),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.white,
             
              }}>
      <Image
          style={{
            width: RFPercentage(2.5),
            height: RFPercentage(2.5),
          }}
          source={require("../../assets/images/menu.png")}
        />
    </TouchableOpacity>

    </View>
    {/* new orders */}
    
    <View style={{width:'90%', marginTop:RFPercentage(3)}}>
      <View style={{
              width: RFPercentage(16),
              height: RFPercentage(5),
              borderRadius: RFPercentage(1),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.blacky,
             
              }}>
                <Text
          style={{
            fontSize: RFPercentage(1.8),
            color: Colors.lightWhite,
            fontFamily: FontFamily.regular,
          }}
        >
          New Orders (1)
        </Text>
       </View>
      </View>

      {/* orders */}
      <View style={{width:'90%', height:RFPercentage(12),marginTop:RFPercentage(1.5),alignItems:'center',
           backgroundColor:Colors.white,borderRadius:RFPercentage(2),paddingHorizontal:RFPercentage(3),flexDirection:'row'}}>
         <View style={{width:'20%'}}>
         <Text
          style={{
            fontSize: RFPercentage(2),
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
          }}
        >
          Thomas
        </Text>
        <View style={{marginTop:RFPercentage(0.7)}}/>
        <Text
          style={{
            fontSize: RFPercentage(2),
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
          }}
        >
          1026
        </Text>
        </View>

        <View style={{position:'absolute',right:RFPercentage(3),flexDirection:'row'}}>
        <View style={{
              width: RFPercentage(10),
              height: RFPercentage(4),
              borderRadius: RFPercentage(5),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.red,
             
              }}>
                <Text
          style={{
            fontSize: RFPercentage(1.8),
            color: Colors.lightWhite,
            fontFamily: FontFamily.regular,
          }}
        >
          Reject
        </Text>
       </View>
       <View style={{marginLeft:RFPercentage(1.5)}}/>
       <View style={{
              width: RFPercentage(10),
              height: RFPercentage(4),
              borderRadius: RFPercentage(5),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.blue,
             
              }}>
                <Text
          style={{
            fontSize: RFPercentage(1.8),
            color: Colors.lightWhite,
            fontFamily: FontFamily.regular,
          }}
        >
          Accept
        </Text>
       </View>

        </View>
         
      </View>
</View>

{/* go online button */}
<View style={{width:'100%',alignItems:'center',justifyContent:'center',position:'relative',bottom:RFPercentage(4)
                }}>
    <TouchableOpacity activeOpacity={0.7} onPress={() => {
                props.navigation.navigate("NewOrderScreen");
              }} style={{
              width: RFPercentage(20),
              height: RFPercentage(7),
              borderRadius: RFPercentage(8),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.purewhite,
              flexDirection:'row',
              shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
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
            fontFamily: FontFamily.medium,
          }}
        >
          Go offline
        </Text>
    </TouchableOpacity>
    </View>

      {/* offline text */}
      <View style={{width:'90%',alignItems:'center',justifyContent:'center',position:'absolute',bottom:RFPercentage(3)}}>
      <Text
          style={{
            fontSize: RFPercentage(2.5),
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
          }}
        >
          You are online
        </Text>
      </View>
   </Screen>
  )
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: Colors.white,
    },
  })