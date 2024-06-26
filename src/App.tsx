// !! Package
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// !! Package
import Home from "./Page/home";
import Layout from "./Page/layout";
import Login from "./Page/login";
import Chat from "./Page/chat";
// !! Route
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/chat" element={<Chat />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
