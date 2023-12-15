import { Text, View } from "react-native";

import defaultStyles from './styles';
import BackButton from "../BackButton/BackButton";
import IconButton from "../IconButton/IconButton";

function ChatBar() {
  const style = defaultStyles();

  return (
    <>
      <View style={style.root}>
        <View>
          <BackButton
            iconName={'chevron-left'}
            label={'back'}
          />
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