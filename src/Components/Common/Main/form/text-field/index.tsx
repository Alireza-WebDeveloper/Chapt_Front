"use client";
import React, { FC, ReactNode } from "react";

// Define the interface for the component props
interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  hasError?: boolean;
  errorMessage?: string;
}

const Error: FC<{ errorMessage: string }> = ({ errorMessage }) => {
  return (
    <p className="mt-1 text-sm text-red-600 dark:text-red-500">
      <span className="font-medium">{errorMessage}</span>
    </p>
  );
};

const TextField: FC<TextFieldProps> = (props) => {
  const { name, type, label, icon, hasError, errorMessage, ...resProps } =
    props;

  return (
    <section className="w-full relative mb-4">
      {icon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </span>
      )}
      <input
        id={name}
        autoComplete="off"
        type={type}
        className={`bg-white w-full ${
          icon ? "pl-10" : "pl-4"
        } pr-4 py-2 placeholder-gray-400 border ${
          hasError ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
          hasError ? "focus:ring-red-500" : "focus:ring-blue-500"
        } focus:ring-opacity-50 block text-base dark:bg-gray-900 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:ring-opacity-50`}
        placeholder={label}
        {...resProps}
      />
      {hasError && errorMessage && <Error errorMessage={errorMessage} />}
    </section>
  );
};

export default TextField;
