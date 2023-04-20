import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Formik } from "formik";
import * as yup from "yup";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function LoginScreen(props) {
  const [eyeIcon, setEyeIcon] = useState(false);

  let validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password"),
  });
  return (
    <Screen style={styles.screen}>
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/netdeliveryres.png")}
        />
      </View>

      {/* //email input */}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => {
          props.navigation.navigate("HomeScreen");
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.inputmaincontainer}>
              <View style={styles.emailmain}>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  // value={text}
                  placeholder="Username"
                  placeholderTextColor={Colors.placeholder}
                />
              </View>
              <View style={{ width: "90%" }}>
                {touched.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.passwordmain}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  // value={Password}
                  placeholder="Password"
                  placeholderTextColor={Colors.placeholder}
                  secureTextEntry={true && !eyeIcon}
                />
                <TouchableOpacity
                  onPress={() => setEyeIcon(!eyeIcon)}
                  activeOpacity={0.7}
                  style={styles.eyeicon}
                >
                  <MaterialCommunityIcons
                    color={Colors.grey}
                    style={{ right: RFPercentage(1) }}
                    size={RFPercentage(3)}
                    name={eyeIcon ? "eye-outline" : "eye-off-outline"}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ width: "90%" }}>
                {touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
              </View>
            </View>

            <TouchableOpacity
              style={styles.loginbutton}
              activeOpacity={0.7}
              onPress={handleSubmit}
            >
              <AppButton title="SIGN IN" buttonColor={Colors.primary} />
            </TouchableOpacity>
          </>
        )}
      </Formik>

      {/* forget password */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ marginTop: RFPercentage(4) }}
      >
        <Text
          style={{
            color: Colors.red,
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(2.5),
          }}
        >
          Forgot your password
        </Text>
      </TouchableOpacity>

      {/* Resturant partner */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ marginTop: RFPercentage(4) }}
      >
        <Text
          style={{
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(2.5),
          }}
        >
          Become a Driver partner
        </Text>
      </TouchableOpacity>

      {/* Signup */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("SignUpScreen");
        }}
        activeOpacity={0.7}
        style={{ position: "absolute", bottom: RFPercentage(3) }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(2.5),
          }}
        >
          Sign up
        </Text>
      </TouchableOpacity>
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
    marginTop: RFPercentage(15),
  },
  logo: {
    width: RFPercentage(32),
    height: RFPercentage(6),
  },
  inputmaincontainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(10),
  },
  eyeicon: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: RFPercentage(1),
    width: RFPercentage(5),
    height: RFPercentage(5),
  },
  emailmain: {
    width: "90%",
    height: RFPercentage(7.5),
    backgroundColor: Colors.white,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.blacky,
    color: Colors.black,
    paddingLeft: RFPercentage(3),
    borderRadius: RFPercentage(1),
    justifyContent: "center",
  },
  input: { fontFamily: FontFamily.regular, fontSize: RFPercentage(2.5) },

  passwordmain: {
    width: "90%",
    height: RFPercentage(7.5),
    backgroundColor: Colors.white,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.blacky,
    color: Colors.black,
    paddingLeft: RFPercentage(3),
    borderRadius: RFPercentage(1),
    justifyContent: "center",
    marginTop: RFPercentage(2),
  },
  error: {
    color: "#FF0000",
    fontSize: RFPercentage(1.3),
    marginTop: RFPercentage(0.5),
    fontFamily: FontFamily.regular,
  },

  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(3),
  },
});
