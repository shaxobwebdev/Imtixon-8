import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Modal } from "@mui/base";

const layout = () => {
  return (
    <>
      <Menu />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default layout;
