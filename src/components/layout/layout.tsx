import { Outlet } from "react-router-dom";
import "../../assets/style/style.scss";
import Header from "../header/Header"
const Layout = () =>
{
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
