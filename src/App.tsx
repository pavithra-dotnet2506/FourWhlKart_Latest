import { Outlet } from "react-router-dom";
import Header from "./layouts/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ToastProvider } from "./components/ToastProvider";
import Footer from "./layouts/Footer";

export default function App() {
  return (
    <FavoritesProvider>
      <ToastProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs />
            <Outlet />
            <Footer />
          </div>
        </div>
      </ToastProvider>
    </FavoritesProvider>
  );
}
