import React, { useState, useEffect } from "react";
import List from "../../Components/chat/contacts/list";
import ChatRoom from "../../Components/chat/chatroom";

import { useGetUsers } from "../../hooks/user";
import { useGetMessage } from "../../hooks/chat/use-http";
import { useGetProfile } from "../../hooks/profile/use-http";
import { ContactState } from "../../hooks/chat/use-http.type";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [selectContact, setSelectContact] = useState<null | ContactState>(null);

  // !! Fetch Users and Profile
  const { data: users } = useGetUsers();
  const { data: profile } = useGetProfile();

  // !! Fetch Messages
  const { data: messages } = useGetMessage({
    user_send: profile?.getProfile.data.user._id || "",
    user_recive: selectContact?._id || "",
  });

  // !! Handle Actions
  const handleSendMessage = (content: string) => {
    // Logic for sending a message
  };

  return (
    <div className="grid grid-cols-12 min-h-[40vh] gap-4 container mx-auto">
      <section className="col-span-3">
        {users && (
          <List
            setSelectContact={setSelectContact}
            contacts={users?.getUsers}
          />
        )}
      </section>
      <section className="col-span-9">
        {messages?.getMessages && selectContact && (
          <ChatRoom
            selectContact={selectContact}
            handleSendMessage={handleSendMessage}
            messages={messages}
          />
        )}
      </section>
    </div>
  );
};

export default Page;
