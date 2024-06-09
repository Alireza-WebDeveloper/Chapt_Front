import React from "react";
import { JobState } from "../../../hooks/job/index.type";

interface DetailProps {
  item: JobState;
}

const Detail: React.FC<DetailProps> = ({ item }) => {
  const {
    title,
    description,
    company: { name },
  } = item;
  return (
    <div>
      {" "}
      <span className="text-gray-900">{title}</span> at
      <span className="text-gray-700">
        {name}: {description}
      </span>
    </div>
  );
};

export default Detail;
