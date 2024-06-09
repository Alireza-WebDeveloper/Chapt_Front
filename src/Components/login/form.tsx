import React from "react";
import { FormState } from "./index.type";
import TextField from "../Common/Main/form/text-field";
import ButtonContainer from "../Common/Main/button-container";

interface FormProps {
  form: FormState;
  handleSubmit(e: ReactForm): void;
  handleUpdateForm(key: keyof FormState, value: string): void;
}
const Form: React.FC<FormProps> = ({
  form,
  handleUpdateForm,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <TextField
        name="email"
        type="email"
        label="email"
        value={form.email}
        onChange={(e) => handleUpdateForm("email", e.target.value)}
      />
      <TextField
        name="password"
        type="password"
        label="password"
        value={form.password}
        onChange={(e) => handleUpdateForm("password", e.target.value)}
      />
      <ButtonContainer color="blue" fontSize="large" type="submit">
        submit
      </ButtonContainer>
    </form>
  );
};

export default Form;
