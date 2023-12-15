import { Text, View } from "react-native";

import defaultStyles from './styles';

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
        </View>
      </View>
    </>
  )
}

export default ChatBar;