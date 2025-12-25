import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
//import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";

import { Provider } from "react-redux";

//import { router } from "./router";
import { store } from "./store";
import "./index.css";
//import RecentlyViewed from "./components/RecentlyViewed";
//import { Toaster } from "./components/ui/toaster";
//import Contact from "@/pages/Contact";
//import { Contact } from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "cars", element: <Cars /> },
      { path: "cars/:id", element: <CarDetails /> },
      // { path: "favorites", element: <Favorites /> },
      // { path: "recentlyViewed", element: <RecentlyViewed /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} />
        {/* <Toaster /> */}
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
