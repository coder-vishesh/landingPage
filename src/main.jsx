import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import GithubInfo, { git } from "./components/Github/Github.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "github",
        element: <GithubInfo />,
        loader: git,
      },
    ],
  },
]);

// Define the routes using createBrowserRouter and createRoutesFromElements
// const route = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />{" "}
//       {/* This sets Home as the default route */}
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
