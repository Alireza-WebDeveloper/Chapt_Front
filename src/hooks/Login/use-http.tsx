import { gql, useMutation } from "@apollo/client";

// Define the fragment for reusability
const logUserMutation = gql`
  mutation login($username: String, $password: String) {
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
  const [mutate] = useMutation(logUserMutation);

  const handleLogin = async (username: string, password: string) => {
    await mutate({
      variables: { username, password },
      update: (cache, { data }) => {
        // console.log(`Cache Data`, cache);
        console.log(`Data`, data);
      },
    });
  };

  return { handleLogin };
};

export { useLogin };
