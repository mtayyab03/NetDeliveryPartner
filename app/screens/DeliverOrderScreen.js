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
import AppLine from "../components/AppLine";

export default function DeliverOrderScreen(props) {
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
            width: "100%",
            height: "78%",
            alignItems: "center",
            backgroundColor: Colors.white,
            borderRadius: RFPercentage(2),
            zIndex: 1,
            position: "absolute",
            bottom: 0,
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
              width: "30%",
              height: RFPercentage(0.7),
              backgroundColor: Colors.lightWhite,
              borderRadius: RFPercentage(1),
              marginTop: RFPercentage(1.5),
            }}
          />
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              marginTop: RFPercentage(4),
            }}
          >
            <View
              style={{
                borderRadius: RFPercentage(5),
                width: RFPercentage(17),
                height: RFPercentage(6),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.lightWhite,
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(1.58),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                Order no. UHGES
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                right: 0,

                borderRadius: RFPercentage(5),
                width: RFPercentage(17),
                height: RFPercentage(6),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.lightWhite,
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(1.58),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                Payment : Cash
              </Text>
            </View>
          </View>

          {/* end to end */}
          <View
            style={{
              width: "90%",
              marginTop: RFPercentage(4),
            }}
          >
            <View
              style={{
                width: "60%",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: RFPercentage(8),
                  height: RFPercentage(8),
                  borderRadius: RFPercentage(8),
                  backgroundColor: Colors.red,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(4),
                    height: RFPercentage(4),
                  }}
                  source={require("../../assets/images/macdonaldimg.png")}
                />
              </View>
              <View style={{ marginLeft: RFPercentage(2) }}>
                <Text
                  style={{
                    fontSize: RFPercentage(2.5),
                    color: Colors.blacky,
                    fontFamily: FontFamily.medium,
                  }}
                >
                  McDonalds
                </Text>
                <View style={{ marginTop: RFPercentage(0.5) }} />

                <Text
                  style={{
                    fontSize: RFPercentage(1.8),
                    color: Colors.blacky,
                    fontFamily: FontFamily.regular,
                    lineHeight: RFPercentage(2.8),
                  }}
                >
                  7th Road, Midrand {"\n"}
                  1.5 km
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: "2%" }} />
            <View
              style={{
                width: "38%",
                position: "absolute",
                right: 0,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: RFPercentage(6),
                  height: RFPercentage(6),
                  borderRadius: RFPercentage(5),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.primary,
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(2.8),
                    height: RFPercentage(2.8),
                  }}
                  source={require("../../assets/images/phonelogo.png")}
                />
              </View>
              <View style={{ marginLeft: RFPercentage(1.2) }} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  width: RFPercentage(6),
                  height: RFPercentage(6),
                  borderRadius: RFPercentage(5),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.primary,
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(2.8),
                    height: RFPercentage(2.8),
                  }}
                  source={require("../../assets/images/chatlogo.png")}
                />
              </TouchableOpacity>
              <View style={{ marginLeft: RFPercentage(1.2) }} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  width: RFPercentage(6),
                  height: RFPercentage(6),
                  borderRadius: RFPercentage(5),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.primary,
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(2.8),
                    height: RFPercentage(2.8),
                  }}
                  source={require("../../assets/images/telelogo.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: RFPercentage(2) }} />
          <AppLine />

          {/* end to end */}
          <View
            style={{
              width: "90%",
              marginTop: RFPercentage(4),
            }}
          >
            <View
              style={{
                width: "60%",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: RFPercentage(8),
                  height: RFPercentage(8),
                  borderRadius: RFPercentage(8),
                  backgroundColor: Colors.red,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(8),
                    height: RFPercentage(8),
                    borderRadius: RFPercentage(8),
                  }}
                  source={require("../../assets/images/personlogo.png")}
                />
              </View>
              <View style={{ marginLeft: RFPercentage(2) }}>
                <Text
                  style={{
                    fontSize: RFPercentage(2.5),
                    color: Colors.blacky,
                    fontFamily: FontFamily.medium,
                  }}
                >
                  James
                </Text>
                <View style={{ marginTop: RFPercentage(0.5) }} />

                <Text
                  style={{
                    fontSize: RFPercentage(1.8),
                    color: Colors.blacky,
                    fontFamily: FontFamily.regular,
                    lineHeight: RFPercentage(2.8),
                  }}
                >
                  539 Bluegum Street{"\n"}
                  1.8 km
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: "2%" }} />
            <View
              style={{
                width: "38%",
                position: "absolute",
                right: 0,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: RFPercentage(6),
                  height: RFPercentage(6),
                  borderRadius: RFPercentage(5),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.primary,
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(2.8),
                    height: RFPercentage(2.8),
                  }}
                  source={require("../../assets/images/phonelogo.png")}
                />
              </View>
              <View style={{ marginLeft: RFPercentage(1.2) }} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  width: RFPercentage(6),
                  height: RFPercentage(6),
                  borderRadius: RFPercentage(5),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.primary,
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(2.8),
                    height: RFPercentage(2.8),
                  }}
                  source={require("../../assets/images/chatlogo.png")}
                />
              </TouchableOpacity>
              <View style={{ marginLeft: RFPercentage(1.2) }} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  width: RFPercentage(6),
                  height: RFPercentage(6),
                  borderRadius: RFPercentage(5),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.primary,
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(2.8),
                    height: RFPercentage(2.8),
                  }}
                  source={require("../../assets/images/telelogo.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: RFPercentage(2) }} />
          <AppLine />

          <View style={{ width: "90%", marginTop: RFPercentage(2) }}>
            <Text
              style={{
                fontSize: RFPercentage(2),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Items
            </Text>
          </View>

          {/* text images end to end */}
          <View
            style={{
              width: "90%",
              marginTop: RFPercentage(2),
            }}
          >
            <View style={{ width: "70%" }}>
              <Text
                style={{
                  fontSize: RFPercentage(1.9),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                2 x Chicken Foldover Meal = 125.90
              </Text>
              <View style={{ marginTop: RFPercentage(0.5) }} />
              <View
                style={{
                  width: "80%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: RFPercentage(2),
                    color: Colors.blacky,
                    fontFamily: FontFamily.regular,
                    lineHeight: RFPercentage(3.3),
                  }}
                >
                  Extra cheese = R8 {"\n"}
                  Extra fries = R20,90
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: RFPercentage(1) }} />
            <View style={{ position: "absolute", right: 0 }}>
              <Image
                style={{
                  width: RFPercentage(5.5),
                  height: RFPercentage(4),
                }}
                source={require("../../assets/images/burger.png")}
              />
            </View>
          </View>
          {/* swipe button */}
          <View
            style={{
              marginTop: RFPercentage(6),
              borderRadius: RFPercentage(5),
              width: "80%",
              height: RFPercentage(8),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.lightWhite,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                position: "absolute",
                left: RFPercentage(1),
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
                fontSize: RFPercentage(2),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Swipe to deliver
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
