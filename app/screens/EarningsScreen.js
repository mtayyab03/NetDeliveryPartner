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
import TitleDateRup from "../components/TitleDateRup";
import HeaderTriple from "../components/HeaderTriple";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import AppLine from "../components/AppLine";
import Graph from "../components/Graph";

export default function EarningsScreen(props) {
  const [menuid, setmenuid] = useState(true);
  const weekList = [
    {
      id: 1,
      title: "Last Week",
    },
    {
      id: 2,
      title: "Current Week",
    },
  ];
  return (
    <Screen style={styles.screen}>
      {/* header */}
      <HeaderTriple
        firstImage={require("../../assets/images/leftarrow.png")}
        title={menuid == true ? "Earnings" : "Balance"}
        secondImage={require("../../assets/images/calenderlogo.png")}
        onpress={() => {
          props.navigation.navigate("ProfileScreen");
        }}
        onpressSec={() => {
          props.navigation.navigate("ProfileScreen");
        }}
      />

      {/* weeks */}
      <View style={{ marginTop: RFPercentage(5) }} />
      <View
        style={{
          height: RFPercentage(6),
          backgroundColor: Colors.grey,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {weekList.map((item, i) => (
            <View
              key={i}
              style={{
                width: RFPercentage(19),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(2),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                {item.title}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {menuid == true ? (
        <>
          {/* R0.00 */}
          <View style={{ marginTop: RFPercentage(5) }} />
          <View
            style={{
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(3.5),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              R0.00
            </Text>
          </View>

          <View style={{ marginTop: RFPercentage(1) }} />
          {/* graph */}
          <Graph />

          {/* earning expense netearning */}
          <View style={{ marginTop: RFPercentage(6) }} />
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFPercentage(2),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.3),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Earnings
            </Text>
            <View style={{ position: "absolute", right: 0 }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                R0.00
              </Text>
            </View>
          </View>
          <View style={{ width: "90%", marginTop: RFPercentage(1.3) }}>
            <AppLine />
          </View>

          {/* expenses */}
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFPercentage(2),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.3),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Expenses
            </Text>
            <View style={{ position: "absolute", right: 0 }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                R0.00
              </Text>
            </View>
          </View>
          <View style={{ width: "90%", marginTop: RFPercentage(1.3) }}>
            <AppLine />
          </View>

          {/* Net earning */}
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFPercentage(2),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.3),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Net earnings
            </Text>
            <View style={{ position: "absolute", right: 0 }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                R0.00
              </Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={{ marginTop: RFPercentage(5) }} />
          <View
            style={{
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(1.8),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Your balance
            </Text>
          </View>
          <View style={{ marginTop: RFPercentage(1.3) }} />
          <View
            style={{
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(3.5),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              R0.00
            </Text>
          </View>
          <View style={{ marginTop: RFPercentage(1.3) }} />
          <View
            style={{
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(1.8),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Next weekly payout: 25 April
            </Text>
          </View>

          {/* cash out button */}
          <View
            style={{
              marginTop: RFPercentage(3),
              padding: RFPercentage(1.5),
              paddingHorizontal: RFPercentage(3),
              borderRadius: RFPercentage(5),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.primary,
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2),
                color: Colors.white,
                fontFamily: FontFamily.regular,
              }}
            >
              Cash out
            </Text>
          </View>

          {/* balnce sheet */}
          <View style={{ marginTop: RFPercentage(15) }} />
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFPercentage(2),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.3),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Starting Balance
            </Text>
            <View style={{ position: "absolute", right: 0 }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                R0.00
              </Text>
            </View>
          </View>
          <View style={{ width: "90%", marginTop: RFPercentage(1.3) }}>
            <AppLine />
          </View>

          {/* expenses */}
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFPercentage(2),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.3),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Ending Balance
            </Text>
            <View style={{ position: "absolute", right: 0 }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                R0.00
              </Text>
            </View>
          </View>
          <View style={{ width: "90%", marginTop: RFPercentage(1.3) }}>
            <AppLine />
          </View>

          {/* Net earning */}
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFPercentage(2),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.3),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Net delivery owes you
            </Text>
            <View style={{ position: "absolute", right: 0 }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                R0.00
              </Text>
            </View>
          </View>
        </>
      )}
      {/* below buttons */}
      <View
        style={{
          width: "100%",
          height: RFPercentage(7),
          backgroundColor: Colors.grey,
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setmenuid(true)}
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(3),
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
            }}
          >
            Earnings
          </Text>
          {menuid == true ? (
            <View
              style={{
                width: "40%",
                height: RFPercentage(0.4),
                backgroundColor: Colors.blue,
                borderRadius: RFPercentage(1),
                marginTop: RFPercentage(1),
              }}
            />
          ) : null}
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setmenuid(false)}
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(3),
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
            }}
          >
            Balance
          </Text>
          {menuid == false ? (
            <View
              style={{
                width: "40%",
                height: RFPercentage(0.4),
                backgroundColor: Colors.blue,
                borderRadius: RFPercentage(1),
                marginTop: RFPercentage(1),
              }}
            />
          ) : null}
        </TouchableOpacity>
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
  horizocategory: {
    flexDirection: "row",
    width: "80%",
    marginTop: RFPercentage(2),
  },
});
