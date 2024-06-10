import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import { ThemeProvider } from "../../Components/Common/Config/Theme/index";
import ToggleTheme from "../../Components/Common/Main/ToggleTheme";
import CustomLink from "../../Components/Common/Main/CustomLink";
import Footer from "../../Components/Common/Footer";
import AuthProvider from "../../Components/Common/Config/Auth/Authentication";
import Middleware from "../../Components/Common/Config/middleware";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
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
            <Header>
              <div className="flex gap-10 flex-wrap">
                <CustomLink to="/">home</CustomLink>
                <CustomLink to="/login">login</CustomLink>{" "}
              </div>
              <ToggleTheme />
            </Header>
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
