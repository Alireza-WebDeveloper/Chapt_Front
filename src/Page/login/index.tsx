import { useState } from "react";
import { FormState } from "../../Components/login/index.type";
import Form from "../../Components/login/form";
import { useAuth } from "../../Components/Common/Config/Auth/Authentication";

const Page = () => {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleUpdateForm = (key: keyof FormState, value: string): void => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = form;

    login({ email, password });
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
