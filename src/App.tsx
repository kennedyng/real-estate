import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/Root";
import HomePage from "./pages/Home";
import FilterPage from "./pages/Filter";
import DetailOfferPage from "./pages/DetailOffer";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "/filter",
        element: <FilterPage />,
      },

      {
        path: "/details/:productId",
        element: <DetailOfferPage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
