import { useQuery, gql, DocumentNode } from "@apollo/client";
import { QueryResponse, QueryVariables } from "./use-http.type";

// Query
const GET_MESSAGES: DocumentNode = gql`
  query GetMessages($user_send: ID!, $user_recive: ID!) {
    getMessages(user_send: $user_send, user_recive: $user_recive) {
      content
      user_send {
        _id
        username
      }
      user_recive {
        _id
        username
      }
      timestamp
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
  const { loading, error, data } = useQuery<QueryResponse, QueryVariables>(
    GET_MESSAGES,
    {
      variables: { user_send, user_recive },
      skip: !user_send || !user_recive,
      fetchPolicy: "cache-and-network",
    }
  );

  return {
    loading,
    error,
    data,
  };
};

const useSendMessage = () => {};

export { useGetMessage, useSendMessage };
