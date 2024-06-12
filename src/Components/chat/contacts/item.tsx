import React from "react";
import { useGetProfile } from "../../../hooks/profile/use-http";

interface ItemProps {
  setSelectContact(value: { username: string; _id: string }): void;
  item: { username: string; _id: string };
}

const Item: React.FC<ItemProps> = ({ setSelectContact, item }) => {
  const { data: profile } = useGetProfile();
  const me = profile?.getProfile.data.user._id === item._id;
  return (
    <>
      {me ? (
        ""
      ) : (
        <section
          onClick={() => setSelectContact(item)}
          className={`flex items-center gap-4 ${
            me ? "bg-danger-900" : "bg-info-900"
          } rounded-lg cursor-pointer hover:bg-info-800`}
        >
          <img src="contact.png" width={"48"} height={"48"} />
          <span className="text-primary-100 text-lg">{item.username}</span>
        </section>
      )}
    </>
  );
};

export default Item;
