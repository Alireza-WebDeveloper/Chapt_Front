import React from "react";
import Item from "./item";

interface ListProps {
  setSelectContact(value: any): void;
}

const contacts = [
  {
    _id: "1",
    username: "fateme",
  },
  {
    _id: "2",
    username: "mohammad",
  },
  {
    _id: "3",
    username: "nazanin",
  },
  {
    _id: "4",
    username: "reza",
  },
];

const List: React.FC<ListProps> = ({ setSelectContact }) => {
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
