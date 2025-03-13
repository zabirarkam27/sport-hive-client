import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <HelmetProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </HelmetProvider>
  );
};

export default MainLayout;
