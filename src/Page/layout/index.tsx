import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import { ThemeProvider } from "../../Components/Common/Config/Theme/index";

import Footer from "../../Components/Common/Footer";
import AuthProvider from "../../Components/Common/Config/Auth/Authentication";
import Middleware from "../../Components/Common/Config/middleware";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const user_id = localStorage.getItem("user_id");
  return {
    headers: {
      ...headers,
      Authorization: user_id ? `${JSON.parse(user_id)}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
            <Footer>
              <p>
                Follow us on social media for the latest updates and promotions.
              </p>
            </Footer>
          </ThemeProvider>
        </Middleware>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default Layout;
