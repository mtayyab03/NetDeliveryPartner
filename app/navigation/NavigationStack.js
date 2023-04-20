import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

//screens
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import NewOrderScreen from "../screens/NewOrderScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import OrderHistory from "../screens/OrderHistory";
import PaymentsScreen from "../screens/PaymentsScreen";
import CardScreen from "../screens/CardScreen";
import EarningsScreen from "../screens/EarningsScreen";
import MessageScreen from "../screens/MessageScreen";
import CurrentWeekScreen from "../screens/CurrentWeekScreen";
import McNewOrderscreen from "../screens/McNewOrderscreen";
import OrderPreparedScreen from "../screens/OrderPreparedScreen";
import PickUpOrderScreen from "../screens/PickUpOrderScreen";
import DeliverOrderScreen from "../screens/DeliverOrderScreen";
import AccountEditScreen from "../screens/AccountEditScreen";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "false" }}
      initialRouteName="OrderPreparedScreen"
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewOrderScreen" component={NewOrderScreen} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />
      <Stack.Screen name="CardScreen" component={CardScreen} />
      <Stack.Screen name="EarningsScreen" component={EarningsScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="CurrentWeekScreen" component={CurrentWeekScreen} />
      <Stack.Screen name="McNewOrderscreen" component={McNewOrderscreen} />
      <Stack.Screen
        name="OrderPreparedScreen"
        component={OrderPreparedScreen}
      />
      <Stack.Screen name="PickUpOrderScreen" component={PickUpOrderScreen} />
      <Stack.Screen name="DeliverOrderScreen" component={DeliverOrderScreen} />
      <Stack.Screen name="AccountEditScreen" component={AccountEditScreen} />
    </Stack.Navigator>
  );
}
