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
import HeaderTriple from "../components/HeaderTriple";
import StatusShow from "../components/StatusShow";
import TitleDateRup from "../components/TitleDateRup";
import AppModal from "../components/AppModal";
import IconTitle from "../components/IconTitle";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function OrdersScreen(props) {
  const [fourthmodalVisible, setFourthModalVisible] = useState(false);
  return (
    <Screen style={styles.screen}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {/* header */}
        <HeaderTriple
          firstImage={require("../../assets/images/leftarrow.png")}
          title="Orders"
          secondImage={require("../../assets/images/filter.png")}
          onpress={() => {
            props.navigation.navigate("NewOrderScreen");
          }}
          onpressSec={() => {
            props.navigation.navigate("ProfileScreen");
          }}
        />

        {/* In progress */}
        <View style={{ marginTop: RFPercentage(4) }} />
        <StatusShow
          imageSource={require("../../assets/images/progresslogo.png")}
          title="In Progress"
          logoSec={require("../../assets/images/uparrow.png")}
        />

        {/* Progress orders */}
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(1.5),
            backgroundColor: Colors.purewhite,
            borderRadius: RFPercentage(1),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.lightWhite,
            padding: RFPercentage(2.5),
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{ width: "60%" }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                }}
              >
                Thomas Order#UHGES
              </Text>
            </View>
            <View style={{ marginLeft: RFPercentage(1) }} />
            <View
              style={{ position: "absolute", right: 0, flexDirection: "row" }}
            >
              <View
                style={{
                  width: RFPercentage(13),
                  height: RFPercentage(5),
                  borderRadius: RFPercentage(5),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.blue,
                }}
              >
                <Text
                  style={{
                    fontSize: RFPercentage(1.8),
                    color: Colors.white,
                    fontFamily: FontFamily.regular,
                  }}
                >
                  Order ready
                </Text>
              </View>
              <View style={{ marginLeft: RFPercentage(1) }} />
              <TouchableOpacity
                onPress={() => setFourthModalVisible(true)}
                activeOpacity={0.7}
              >
                <Image
                  style={{
                    width: RFPercentage(5),
                    height: RFPercentage(5),
                  }}
                  source={require("../../assets/images/threedots.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* text images end to end */}
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              marginTop: RFPercentage(4),
            }}
          >
            <View style={{ width: "80%" }}>
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
            <View
              style={{ position: "absolute", right: 0, flexDirection: "row" }}
            >
              <View
                style={{
                  width: RFPercentage(6),
                  height: RFPercentage(6),
                  borderRadius: RFPercentage(5),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.lightWhite,
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
                  backgroundColor: Colors.lightWhite,
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
            </View>
          </View>
          <View style={{ marginTop: RFPercentage(2) }} />
          <View>
            <Text
              style={{
                fontSize: RFPercentage(2),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
                lineHeight: RFPercentage(3.3),
              }}
            >
              Notes {"\n"}
              No pickles and onion, please add{"\n"}extra souces
            </Text>
          </View>
        </View>

        {/* Order ready  */}
        <View style={{ marginTop: RFPercentage(4) }} />
        <StatusShow
          imageSource={require("../../assets/images/ticlogo.png")}
          title="Order ready "
          logoSec={require("../../assets/images/uparrow.png")}
        />
        {/* ready container */}
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(1.5),
            backgroundColor: Colors.purewhite,
            borderRadius: RFPercentage(1),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.lightWhite,
            padding: RFPercentage(2.5),
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              flexDirection: "row",
              marginTop: RFPercentage(1),
            }}
          >
            <View style={{ width: "60%" }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                }}
              >
                Thomas Order#UHGES
              </Text>
            </View>
            <View style={{ marginLeft: RFPercentage(1) }} />
            <View
              style={{ position: "absolute", right: 0, flexDirection: "row" }}
            >
              <View
                style={{
                  padding: RFPercentage(1.7),
                  borderRadius: RFPercentage(5),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.blue,
                }}
              >
                <Text
                  style={{
                    fontSize: RFPercentage(1.8),
                    color: Colors.white,
                    fontFamily: FontFamily.regular,
                  }}
                >
                  Ready for collection
                </Text>
              </View>
            </View>
          </View>

          {/* text images end to end */}
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              marginTop: RFPercentage(4),
            }}
          >
            <View
              style={{
                width: "70%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View>
                <Image
                  style={{
                    width: RFPercentage(7),
                    height: RFPercentage(7),
                    borderRadius: RFPercentage(5),
                  }}
                  source={require("../../assets/images/profilepic.png")}
                />
              </View>
              <View style={{ marginLeft: RFPercentage(1.3) }}>
                <Text
                  style={{
                    fontSize: RFPercentage(1.7),
                    color: Colors.blacky,
                    fontFamily: FontFamily.medium,
                  }}
                >
                  James has accepted delivery
                </Text>
                <View style={{ marginTop: RFPercentage(0.5) }} />

                <Text
                  style={{
                    fontSize: RFPercentage(1.8),
                    color: Colors.blacky,
                    fontFamily: FontFamily.regular,
                    lineHeight: RFPercentage(3.3),
                  }}
                >
                  1.6 km away
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: "2%" }} />
            <View
              style={{
                width: "28%",
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
                  backgroundColor: Colors.lightWhite,
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
                  backgroundColor: Colors.lightWhite,
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
            </View>
          </View>
        </View>

        {/* Out for delivery */}
        <View style={{ marginTop: RFPercentage(4) }} />
        <StatusShow
          imageSource={require("../../assets/images/deliverylogo.png")}
          title="Out for delivery "
          logoSec={require("../../assets/images/uparrow.png")}
        />
        {/* ready container */}
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(1.5),
            backgroundColor: Colors.purewhite,
            borderRadius: RFPercentage(1),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.lightWhite,
            padding: RFPercentage(2.5),
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              flexDirection: "row",
              marginTop: RFPercentage(1),
            }}
          >
            <View style={{ width: "60%" }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                }}
              >
                Thomas Order#UHGES
              </Text>
            </View>
            <View style={{ marginLeft: RFPercentage(1) }} />
            <View
              style={{ position: "absolute", right: 0, flexDirection: "row" }}
            >
              <View
                style={{
                  padding: RFPercentage(1.7),
                  borderRadius: RFPercentage(5),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.blue,
                }}
              >
                <Text
                  style={{
                    fontSize: RFPercentage(1.8),
                    color: Colors.white,
                    fontFamily: FontFamily.regular,
                  }}
                >
                  Out for delivery
                </Text>
              </View>
            </View>
          </View>

          {/* text images end to end */}
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              marginTop: RFPercentage(4),
            }}
          >
            <View
              style={{
                width: "70%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View>
                <Image
                  style={{
                    width: RFPercentage(7),
                    height: RFPercentage(7),
                    borderRadius: RFPercentage(5),
                  }}
                  source={require("../../assets/images/profilepic.png")}
                />
              </View>
              <View style={{ marginLeft: RFPercentage(1.5) }}>
                <Text
                  style={{
                    fontSize: RFPercentage(1.7),
                    color: Colors.blacky,
                    fontFamily: FontFamily.medium,
                  }}
                >
                  James has collected order
                </Text>
                <View style={{ marginTop: RFPercentage(0.5) }} />

                <Text
                  style={{
                    fontSize: RFPercentage(1.8),
                    color: Colors.blacky,
                    fontFamily: FontFamily.regular,
                    lineHeight: RFPercentage(3.3),
                  }}
                >
                  On the way to customer
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Delivered*/}
        <View style={{ marginTop: RFPercentage(8) }} />
        <StatusShow
          imageSource={require("../../assets/images/deliverdlogo.png")}
          title="Delivered "
          logoSec={require("../../assets/images/uparrow.png")}
        />
        {/* deliverd container */}
        <View style={{ marginTop: RFPercentage(1.5) }} />
        <TitleDateRup
          title="Thomas Order#UHGES"
          date="27 April 2022  11:05"
          rupees="154,80"
        />

        {/* deliverd container */}
        <View style={{ marginTop: RFPercentage(2) }} />
        {/* deliverd container */}
        <TitleDateRup
          title="David Order#UXGES"
          date="27 April 2022  12:05"
          rupees="124,50"
        />
        <View style={{ marginBottom: RFPercentage(3) }} />
      </ScrollView>
      {/* 4th modal */}
      <AppModal
        modalVisible={fourthmodalVisible}
        setModalVisible={setFourthModalVisible}
        style={{ justifyContent: "flex-end" }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.modallineclose}
          onPress={() => setFourthModalVisible(!fourthmodalVisible)}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setFourthModalVisible(!fourthmodalVisible)}
          style={styles.formain}
        >
          <IconTitle
            image={require("../../assets/images/orderadjustlogo.png")}
            title="Order adjustment"
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setFourthModalVisible(!fourthmodalVisible)}
          style={styles.formain}
        >
          <IconTitle
            image={require("../../assets/images/corssboxlogo.png")}
            title="Cancel order"
          />
        </TouchableOpacity>
      </AppModal>
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

  // 4rthmodal
  modallineclose: {
    width: RFPercentage(10),
    height: RFPercentage(0.5),
    backgroundColor: Colors.third,
    borderRadius: RFPercentage(4),
    position: "absolute",
    top: 20,
  },

  formain: { width: "100%" },
});
