import {
  useQuery,
  gql,
  DocumentNode,
  useMutation,
  useSubscription,
} from "@apollo/client";
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

const SEND_MESSAGE: DocumentNode = gql`
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

const MESSAGE_ADDED_SUBSCRIPTION = gql`
  subscription MessageAdded {
    messageAdded {
      user_send {
        _id
        username
      }
      user_recive {
        _id
        username
      }
      _id
      timestamp
      content
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

  useSubscription(MESSAGE_ADDED_SUBSCRIPTION, {
    onData: ({ client, data: newData }) => {
      const newMessage = newData.data.messageAdded;

      client.cache.modify({
        fields: {
          getMessages(existingMessages = []) {
            return [...existingMessages, newMessage];
          },
        },
      });
    },
  });
  return {
    loading,
    error,
    data,
    refetch,
  };
};

const useSendMessage = () => {
  const [mutate] = useMutation<{
    sendMessage: Message;
  }>(SEND_MESSAGE);

  const handleMutate = async (
    user_send: string,
    user_recive: string,
    content: string
  ) => {
    await mutate({
      variables: { user_send, user_recive, content },
      update: (cache, { data }) => {
        // 1 ) Get Messages From (useGetMessages Query)
        const existingMessages = cache.readQuery<QueryResponse, QueryVariables>(
          {
            query: GET_MESSAGES,
            variables: { user_send, user_recive },
          }
        );
        // 2 ) Set Messages From SendMassages To (useGetMessages With Query )
        // if (existingMessages && data?.sendMessage) {
        //   cache.writeQuery<QueryResponse, QueryVariables>({
        //     query: GET_MESSAGES,
        //     variables: { user_send, user_recive },
        //     data: {
        //       getMessages: [...existingMessages.getMessages, data.sendMessage],
        //     },
        //   });
        // }
      },
      onError: (error: Error) => {
        alert(error.message);
      },
    });
  };

  return { handleMutate };
};
export { useGetMessage, useSendMessage };
