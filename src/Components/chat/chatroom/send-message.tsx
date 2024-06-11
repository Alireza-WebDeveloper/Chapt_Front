import React, { useState } from "react";
import { SendIcon } from "../../Common/Main/Icon";
import TextField from "../../Common/Main/form/text-field";

interface SendMessageProps {
  handleSendMessage(value: string): void;
}

const SendMessage: React.FC<SendMessageProps> = ({ handleSendMessage }) => {
  const [content, setContent] = useState("");

  return (
    <div className="flex justify-center gap-4 items-center p-2 mt-auto ">
      <TextField
        name="username"
        type="text"
        label="send your message"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={() => handleSendMessage(content)}
        className="bg-primary-400 mb-auto pr-2 pl-2 rounded"
      >
        <SendIcon width="34" height="34" color="black" />
      </button>
    </div>
  );
};

export default SendMessage;
