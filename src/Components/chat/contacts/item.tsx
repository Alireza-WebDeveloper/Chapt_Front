import React from "react";

interface ItemProps {
  setSelectContact(value: any): void;
  item: any;
}

const Item: React.FC<ItemProps> = ({ setSelectContact, item }) => {
  return (
    <section
      onClick={() => setSelectContact(item)}
      className="flex items-center gap-4 bg-info-900 rounded-lg cursor-pointer hover:bg-info-800"
    >
      <img src="contact.png" width={"48"} height={"48"} />
      <span className="text-primary-100 text-lg">{item.username}</span>
    </section>
  );
};

export default Item;
