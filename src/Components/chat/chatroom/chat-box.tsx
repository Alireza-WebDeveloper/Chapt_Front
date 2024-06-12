import React from "react";
import { QueryResponse } from "../../../hooks/chat/use-http.type";
import { useGetProfile } from "../../../hooks/profile/use-http";
import {
  convertTimestampToTime,
  formatDate,
} from "../../Common/Main/Helpers/date";

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
          <section
            key={index}
            className={`p-2 flex flex-col space-y-1  rounded-lg ${messageClass}`}
          >
            <p className="text-sm break-words">{message.content}</p>
            <section className="flex flex-col">
              <span className="w-[100px] h-[1px] bg-gray-400"></span>
              <span className="text-[10px] text-gray-300">
                {convertTimestampToTime(Number(message?.timestamp))}
              </span>
              <span className="text-[10px] text-gray-300">
                {formatDate(Number(message?.timestamp))}
              </span>
            </section>
          </section>
        );
      })}
    </div>
  );
};

export default ChatBox;
