import AboutUsScreen from "../pages/AboutUs/AboutUs";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../pages/Pofile/Profile";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <>
      <Tab.Navigator initialRouteName='AboutUs' screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name='AboutUs'
          component={AboutUsScreen}
          options={{
            tabBarLabel: 'Про кафедру',
            tabBarIcon: ({ color, size }) => (
              <Icon name='apartment' color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Про мене',
            tabBarIcon: ({ color, size }) => (
              <Icon name='person' color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  )
}

export default TabNavigation;