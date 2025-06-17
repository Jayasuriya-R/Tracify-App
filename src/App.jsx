import { Tab, Table } from "@mui/material";
import "./App.css";
// PrimeReact core and theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Or any other theme
import 'primereact/resources/primereact.min.css';

// PrimeIcons (for built-in icons)
import 'primeicons/primeicons.css';

import Body from "./components/Body";
import Issue from "./components/Issue";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Outlet } from "react-router";
import AddIssue from "./components/AddIssue";

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
      { path: "/issue/add", element: <AddIssue/> },
    ],
  },
]);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
