import React from 'react';
import {View} from 'react-native';
import Chat from "../components/Chat/Chat";

function ChatScreen() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Chat />
      </View>
    </>
  );
}

export default ChatScreen;