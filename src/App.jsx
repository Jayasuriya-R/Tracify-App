import "./App.css";
import Body from "./components/Body";
import Issue from "./components/Issue";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Outlet } from "react-router";

const AppLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Wrap all routes with layout
    children: [
      { path: "/", element: <Body /> },
      { path: "/issue", element: <Issue /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
