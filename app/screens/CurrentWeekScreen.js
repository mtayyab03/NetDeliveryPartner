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
import MapView ,{Marker,Polyline}from 'react-native-maps';
import Ionicons from "react-native-vector-icons/Ionicons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";


export default function CurrentWeekScreen(props) {
  return (
    <Screen style={styles.screen}>

      {/* yellow backgroundColor */}
      <View style={{width:'100%',height:'90%',backgroundColor:Colors.primary,alignItems:'center'}}>

         {/* menu */}
         <View style={{width:'90%',zIndex:1,marginTop:RFPercentage(2),}}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => {
                props.navigation.navigate("ProfileScreen");
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

    {/* card */}
      <View style={{width:RFPercentage(40),height:RFPercentage(40),
      alignItems:'center',justifyContent:'center',
                    backgroundColor:Colors.white,borderRadius:RFPercentage(2),zIndex:1,
                    marginTop:RFPercentage(20),shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,}}>
  <View
            style={{
             
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.5),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Current Week
            </Text>
          </View>

          {/* cash out button */}
          <View
            style={{
              marginTop: RFPercentage(3),
              borderRadius: RFPercentage(5),
              paddingHorizontal:RFPercentage(5),
              paddingVertical:RFPercentage(2.5),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.primary,
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.5),
                color: Colors.white,
                fontFamily: FontFamily.regular,
              }}
            >
              R 390.76
            </Text>
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
              5 completed deliveries
            </Text>
          </View>
          <View style={{ marginTop: RFPercentage(2) }} />
          <View style={{flexDirection:'row'}}>
          <Text
              style={{
                marginRight:RFPercentage(0.8),
                fontSize: RFPercentage(2),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Current rating
            </Text>
            <Ionicons name="star" size={20} color={Colors.primary}/>
        <Text
              style={{
                marginLeft:RFPercentage(0.8),
                fontSize: RFPercentage(2),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              4.9
            </Text>
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={() => {
                props.navigation.navigate("McNewOrderscreen")}}
            style={{
              marginTop:RFPercentage(3),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.5),
                color: Colors.primary,
                fontFamily: FontFamily.regular,
              }}
            >
              View all deliveries
            </Text>
          </TouchableOpacity >
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
    title={'Cape Town'}
    description={'The legislative capital of South Africa'}
  />
  {/* container */}

      </MapView>

      {/* go online button */}
<View style={{width:'100%',alignItems:'center',zIndex:1,
 justifyContent:'center',marginTop:RFPercentage(7)
                }}>
    <TouchableOpacity activeOpacity={0.7} onPress={() => {
                props.navigation.navigate("NewOrderScreen");
              }} style={{
              width: RFPercentage(20),
              height: RFPercentage(7),
              borderRadius: RFPercentage(8),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.primary,
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
          source={require("../../assets/images/powebuttonwhite.png")}
        />
        <View style={{marginLeft:RFPercentage(1.2)}}/>
        <Text
          style={{
            fontSize: RFPercentage(2.5),
            color: Colors.white,
            fontFamily: FontFamily.regular
          }}
        >
          Go offline
        </Text>
    </TouchableOpacity>
    </View>
</View>




      {/* onlinetext */}
      <View style={{width:'90%',alignItems:'center',justifyContent:'center',
      }}>
        <View style={{width:RFPercentage(15),borderRadius:RFPercentage(1),height:RFPercentage(1),backgroundColor:Colors.primary}}>

          </View>
      <Text
          style={{
            marginTop:RFPercentage(2),
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
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  })