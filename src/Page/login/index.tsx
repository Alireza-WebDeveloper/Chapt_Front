import { useState } from "react";
import { FormState } from "../../Components/login/index.type";
import Form from "../../Components/login/form";
import { useLogin } from "../../hooks/Login/use-http";

const Page = () => {
  const [form, setForm] = useState<FormState>({
    username: "",
    password: "",
  });

  const { username, password } = form;

  const { handleLogin } = useLogin();

  const handleUpdateForm = (key: keyof FormState, value: string): void => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="text-center">
      <Form
        handleSubmit={handleSubmit}
        handleUpdateForm={handleUpdateForm}
        form={form}
      />
    </div>
  );
};

export default Page;
