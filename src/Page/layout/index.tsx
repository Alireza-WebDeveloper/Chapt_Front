import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import { ThemeProvider } from "../../Components/Common/Config/Theme/index";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient as createWsClient } from "graphql-ws";
import Footer from "../../Components/Common/Footer";
import AuthProvider from "../../Components/Common/Config/Auth/Authentication";
import Middleware from "../../Components/Common/Config/middleware";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
// HTTP Link for queries and mutations
const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql",
});

const getUser_id = () => {
  const user_id = localStorage.getItem("user_id");
  return user_id ? `${JSON.parse(user_id)}` : "";
};

// Authentication link to add user ID to headers
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: getUser_id(),
    },
  };
});

// WebSocket Link for subscriptions
const wsLink = new GraphQLWsLink(
  createWsClient({
    url: "ws://localhost:8000/graphql",
    connectionParams: { Authorization: getUser_id() },
  })
);

// Function to check if the operation is a subscription
const isSubscription = ({ query }: any) => {
  const definition = getMainDefinition(query);
  console.log(query);
  return (
    definition.kind === "OperationDefinition" &&
    definition.operation === "subscription"
  );
};

// Apollo Client setup
const client = new ApolloClient({
  link: split(isSubscription, wsLink, authLink.concat(httpLink)),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "cache-only",
      pollInterval: 10000,
    },
  },
});
const Layout = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Middleware>
          <ThemeProvider>
            <Header />
            <main className="  p-2 bg-gray-200 bg-primary-100 text-primary-800  min-h-[100vh] ">
              {<Outlet />}
            </main>
            {window.location.pathname.startsWith("/chat") ? (
              ""
            ) : (
              <Footer>
                <p>
                  Follow us on social media for the latest updates and
                  promotions.
                </p>
              </Footer>
            )}
          </ThemeProvider>
        </Middleware>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default Layout;
