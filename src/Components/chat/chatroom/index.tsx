import React from "react";
import Profile from "./profile";
import ChatBox from "./chat-box";
import SendMessage from "./send-message";

interface ChatRoomProps {
  handleSendMessage(value: string): void;
}

const messages = [
  { content: "Hello!", sender: "user1", timestamp: "10:00 AM" },
  { content: "Hi there!", sender: "user2", timestamp: "10:05 AM" },
  { content: "How are you?", sender: "user1", timestamp: "10:10 AM" },
  { content: "I am good, thanks!", sender: "user2", timestamp: "10:15 AM" },
];

const ChatRoom: React.FC<ChatRoomProps> = ({ handleSendMessage }) => {
  return (
    <div className="flex flex-col h-full bg-primary-200 p-3 rounded">
      <Profile />
      <ChatBox messages={messages} />
      <SendMessage handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatRoom;
