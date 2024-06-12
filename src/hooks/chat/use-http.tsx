import { useQuery, gql, DocumentNode, useMutation } from "@apollo/client";
import { Message, QueryResponse, QueryVariables } from "./use-http.type";

// Query
const GET_MESSAGES: DocumentNode = gql`
  query GetMessages($user_send: ID!, $user_recive: ID!) {
    getMessages(user_send: $user_send, user_recive: $user_recive) {
      content
      user_send {
        _id
        username
      }
      timestamp
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation sendMessage(
    $user_send: String
    $user_recive: String
    $content: String
  ) {
    sendMessage(
      user_send: $user_send
      user_recive: $user_recive
      content: $content
    ) {
      content
      timestamp
      user_send {
        _id
        username
      }
      user_recive {
        _id
        username
      }
    }
  }
`;

// Hook for getting messages
const useGetMessage = ({
  user_send,
  user_recive,
}: {
  user_send: string;
  user_recive: string;
}) => {
  const { loading, error, data, refetch } = useQuery<
    QueryResponse,
    QueryVariables
  >(GET_MESSAGES, {
    variables: { user_send, user_recive },
    skip: !user_send || !user_recive,
    fetchPolicy: "cache-and-network",
  });

  return {
    loading,
    error,
    data,
    refetch,
  };
};

const useSendMessage = () => {
  const [mutate] = useMutation<Message>(SEND_MESSAGE);

  const handleMutate = async (
    user_send: string,
    user_recive: string,
    content: string
  ) => {
    await mutate({
      variables: { user_send, user_recive, content },
      update: (cache, { data }) => {
        console.log(`Cache Data`, cache);
        console.log(`Data`, data);
      },
      onError: (error: any) => {
        console.log(error);
      },
    });
  };

  return { handleMutate };
};
export { useGetMessage, useSendMessage };
