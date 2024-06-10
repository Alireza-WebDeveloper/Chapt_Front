import { gql, useMutation } from "@apollo/client";
import { LoginUserResponse } from "./use-http.type";

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      message
      status
      data {
        user {
          _id
          username
        }
      }
    }
  }
`;

const useLogin = () => {
  const [loginMutation] = useMutation<LoginUserResponse>(LOGIN_MUTATION);

  const handleLogin = async (username: string, password: string) => {
    try {
      const { data } = await loginMutation({
        variables: { username, password },
      });

      const userId = data?.login?.data?.user?._id;
      if (userId) {
        localStorage.setItem("user_id", JSON.stringify(userId));
        window.location.href = "/";
      } else {
        console.error("User ID not found in login response");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  return { handleLogin };
};

export { useLogin };
