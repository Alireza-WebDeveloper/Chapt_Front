import React from "react";
import { QueryResponse } from "../../../hooks/chat/use-http.type";
import { useGetProfile } from "../../../hooks/profile/use-http";

interface ChatBoxProps {
  messages: QueryResponse;
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages }) => {
  const { data: profile } = useGetProfile();

  return (
    <div className="flex flex-col space-y-4 justify-start mt-2">
      {messages.getMessages.map((message, index: number) => {
        {
          /* Boolean User_Send ?  */
        }
        const isUserSentMessage =
          message.user_send._id === profile?.getProfile.data.user._id;
        {
          /* Class User_Send and Recive */
        }
        const messageClass = isUserSentMessage
          ? "mr-auto bg-secondary-800 bg-blue-800 text-white"
          : "ml-auto bg-blue-200";

        return (
          <section key={index} className={`p-2 rounded-lg ${messageClass}`}>
            {message.content}
          </section>
        );
      })}
    </div>
  );
};

export default ChatBox;
