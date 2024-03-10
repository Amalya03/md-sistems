import { Outlet } from "react-router-dom";

import NavBar from "../components/navBar";
import Footer from "../components/footer";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
