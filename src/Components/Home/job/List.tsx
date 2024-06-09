import React from "react";
import { JobState } from "../../../hooks/job/index.type";
import Item from "./Item";

interface ListProps {
  data: JobState[];
}

const List: React.FC<ListProps> = ({ data }) => {
  const renderItem = () => {
    return data.map((item) => {
      return <Item key={item.id} item={item} />;
    });
  };
  return (
    <div className="p-2 bg-secondary-100 rounded-lg">
      <h1 className="text-lg font-bold">Learn JavaScript</h1>
      <ul>{renderItem()}</ul>
    </div>
  );
};

export default List;
