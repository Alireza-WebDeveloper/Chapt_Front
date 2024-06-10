import { gql, useQuery } from "@apollo/client";
import { GetProfileResponse } from "./use-http.type";

const PROFILE_QUERY = gql`
  query GetProfile {
    getProfile {
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

const useGetProfile = () => {
  const { data, loading, error } = useQuery<{ getProfile: GetProfileResponse }>(
    PROFILE_QUERY
  );

  return { data, loading, error };
};

export { useGetProfile };
