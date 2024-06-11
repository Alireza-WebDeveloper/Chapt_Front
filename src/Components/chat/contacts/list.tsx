import React from "react";
import Item from "./item";

interface ListProps {
  setSelectContact(value: { username: string; _id: string }): void;
  contacts: { username: string; _id: string }[];
}

const List: React.FC<ListProps> = ({ setSelectContact, contacts }) => {
  return (
    <div className="flex flex-col space-y-4 bg-primary-300 h-full p-3 rounded">
      {contacts.map((contact, index) => {
        return (
          <Item
            key={index}
            item={contact}
            setSelectContact={setSelectContact}
          />
        );
      })}
    </div>
  );
};

export default List;
