import React from "react";

interface TextAreaProps {
  label: string;
  value: string;
  setValue(value: string): void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value, setValue }) => {
  return (
    <div className="flex flex-col space-y-2">
      <textarea
        onChange={(e) => setValue(e.target.value)}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={label}
      >
        {value}
      </textarea>
    </div>
  );
};

export default TextArea;
