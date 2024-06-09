import React from "react";
import { JobState } from "../../../hooks/job/index.type";
import { Link } from "react-router-dom";

interface ItemProps {
  item: JobState;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const {
    title,
    description,
    company: { name },
  } = item;
  return (
    <li>
      <Link to={`/jobs/job/${item.id}`}>
        <span className="text-gray-900">{title}</span> at
        <span className="text-gray-700">
          {name}: {description}
        </span>
      </Link>
    </li>
  );
};

export default Item;
