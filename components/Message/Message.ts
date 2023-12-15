import { User } from "./user";


export interface Message {
  id: string;
  text: string;
  from: User;
  sourceReply?: Message
}