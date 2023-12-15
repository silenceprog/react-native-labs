import { Text, View } from "react-native";

import defaultStyles from './styles';
import IconButton from "../IconButton/IconButton";

function ChatBar() {
  const style = defaultStyles();

  return (
    <>
      <View style={style.root}>
        <View>
        </View>
        <View style={style.mainSection}>
          <Text style={style.title}>
            Instamobile Team
          </Text>
        </View>
        <View>
          <IconButton
            name={'settings'}
            size={30}
          />
        </View>
      </View>
    </>
  )
}

export default ChatBar;