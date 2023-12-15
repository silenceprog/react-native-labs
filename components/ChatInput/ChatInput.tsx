import { TextInput, View } from "react-native";

import defaultStyles from './styles';

function ChatInput() {
    const styles = defaultStyles();
  
    return (
      <>
        <View style={styles.root}>
          <TextInput
            placeholder={"Start typing..."}
            style={styles.textInput}
          />
        </View>
      </>
    )
  }
  
  export default ChatInput;