import React from "react";

interface Message {
  content: string;
  sender: string;
  timestamp: string;
}

interface ChatBoxProps {
  messages: Message[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-4 justify-start mt-2">
      {messages.map((message, index) => {
        if (message.sender === "user1") {
          return (
            <section
              key={index}
              className="p-2 rounded-lg mr-auto bg-secondary-800 text-primary-200  "
            >
              {message.content}
            </section>
          );
        }
        return (
          <section
            key={index}
            className="p-2 rounded-lg ml-auto bg-secondary-600  text-primary-200 "
          >
            {message.content}
          </section>
        );
      })}
    </div>
  );
};

export default ChatBox;
