import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Products from "./pages/products";
import RootLayout from "./pages/RootLayout";
import AboutUs from "./pages/aboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
