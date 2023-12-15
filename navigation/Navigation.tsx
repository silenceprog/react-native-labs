import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import  MyDrawer from "./MyDrawer";
import TabNavigation from "./TabNavigation";
import ChatPage from "../pages/ChatPage";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Info'
          drawerContent={(props: any) => <MyDrawer {...props} />}
        >
          <Drawer.Screen
            name='Info'
            component={TabNavigation}
            options={{
              drawerLabel: 'Інфо',
            }}
          />
          <Drawer.Screen
            name='Chat'
            component={ChatPage}
            options={{
              drawerLabel: 'Чат',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Navigation;