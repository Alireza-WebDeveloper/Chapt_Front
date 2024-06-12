import React from "react";
import Profile from "./profile";
import ChatBox from "./chat-box";
import SendMessage from "./send-message";
import { QueryResponse, User } from "../../../hooks/chat/use-http.type";

interface ChatRoomProps {
  handleSendMessage(value: string): void;
  messages: QueryResponse;
  selectContact: User;
}

const ChatRoom: React.FC<ChatRoomProps> = ({
  handleSendMessage,
  messages,
  selectContact,
}) => {
  return (
    <div className="flex flex-col h-full bg-primary-200 p-3 rounded">
      <Profile user_recive={selectContact} />
      <ChatBox messages={messages} />
      <SendMessage handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatRoom;
