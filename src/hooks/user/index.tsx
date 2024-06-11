import { gql, useQuery } from "@apollo/client";
import { GetUsersResponse } from "./use-http.type";

const PROFILE_QUERY = gql`
  query Get_User {
    getUsers {
      username
      _id
    }
  }
`;

const useGetUsers = () => {
  const { data, loading, error } = useQuery<{ getUsers: GetUsersResponse }>(
    PROFILE_QUERY
  );

  return { data, loading, error };
};

export { useGetUsers };
