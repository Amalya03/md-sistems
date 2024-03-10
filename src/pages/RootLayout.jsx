import { Outlet } from "react-router-dom";

import NavBar from "../components/navBar";
import Footer from "../components/footer";
import TabBar from "../components/tabBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <TabBar />
    </>
  );
};

export default RootLayout;
