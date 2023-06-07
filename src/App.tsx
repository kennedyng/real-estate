import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/Root";
import HomePage from "./pages/Home";
import FilterPage from "./pages/Filter";
import DetailOfferPage from "./pages/DetailOffer";
import Loading from "./pages/Loading";

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
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 5000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <RouterProvider router={router} />;
};

export default App;
