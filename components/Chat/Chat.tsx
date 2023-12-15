import { View } from "react-native";

import defaultStyles from './styles';
import ChatBar from "../ChatBar/ChatBar";
import ChatBoard from "../ChatBoard/ChatBoard";
import { Message } from "../Message/Message";
import { User } from "../Message/user";

function Chat() {
  const styles = defaultStyles();

  const users: User[] = [
    { id: '1', fistName: 'Ferdinand', lastName: 'Ceil' },
    { id: '2', fistName: 'Francis', lastName: 'Crus' },
    { id: '3', fistName: 'Frank', lastName: 'Markus' }
  ];

  const messageStart: Message = { id: '1', text: 'Let do this', from: users[0] };
  const twoMessageStart: Message = { id: '2', text: 'Great, just sent out the invite!', from: users[1] };

  const initialMessages: Message[] = [
    { ...messageStart },
    { ...twoMessageStart },
    { id: '3', text: 'Thats actually so cool', from: users[2] },
    { id: '4', text: 'So much excitement', from: users[2], sourceReply: messageStart },
    { id: '5', text: 'Haha, exactly', from: users[0] },
    { id: '6', text: 'Yep, I got It', from: users[0], sourceReply: twoMessageStart  },
  ];

  const messages = initialMessages;


  return (
    <>
      <View style={styles.root}>
        <ChatBar />
        <View style={styles.board}>
          <ChatBoard messages={messages} userId={'3'} />
        </View>
      </View>
    </>
  );
}

export default Chat;