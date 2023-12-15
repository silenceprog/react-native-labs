import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Linking } from "react-native";


function MyDrawer(props: any) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label='Сайт кафедри'
          onPress={() => Linking.openURL('https://pzas.chdtu.edu.ua/')}
        />
      </DrawerContentScrollView>
    </>
  )
}

export default MyDrawer;