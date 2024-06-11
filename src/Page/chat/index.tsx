import React, { useState } from "react";
import List from "../../Components/chat/contacts/list";
import ChatRoom from "../../Components/chat/chatroom";

import { useGetUsers } from "../../hooks/user";
import { useGetMessage } from "../../hooks/chat/use-http";
import { useGetProfile } from "../../hooks/profile/use-http";

interface PageProps {}

interface ContactState {}

const Page: React.FC<PageProps> = () => {
  const [selectContact, setSelectContact] = useState<null | ContactState>();

  // !! Fetch
  const { data: users } = useGetUsers();

  const { data: profile } = useGetProfile();

  const { messages } = useGetMessage({
    user_send: profile?.getProfile.data.user._id || null,
    user_recive: selectContact?._id || null,
  });

  // !! Handle Actions
  const handleSendMessage = (content: string) => {};

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
        <ChatRoom handleSendMessage={handleSendMessage} />
      </section>
    </div>
  );
};

export default Page;
