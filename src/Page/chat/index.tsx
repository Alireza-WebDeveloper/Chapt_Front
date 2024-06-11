import React, { useState } from "react";
import List from "../../Components/chat/contacts/list";
import ChatRoom from "../../Components/chat/chatroom";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [selectContact, setSelectContact] = useState();
  const handleSendMessage = (content: string) => {
    console.log(content);
  };

  console.log(selectContact);
  return (
    <div className="grid grid-cols-12 min-h-[40vh] gap-4 container mx-auto">
      <section className="col-span-3">
        <List setSelectContact={setSelectContact} />
      </section>
      <section className="col-span-9">
        <ChatRoom handleSendMessage={handleSendMessage} />
      </section>
    </div>
  );
};

export default Page;
