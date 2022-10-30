import Home from "./Home";
import Contact from "./Contact";
import Team from "./Team";
import AboutUs from "./AboutUs";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const routes = [
  { path: "/home", component: <Home /> },
  { path: "/about", component: <AboutUs /> },
  { path: "/contact", component: <Contact /> },
  { path: "/team", component: <Team /> }
];

const Pages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200 });
  }, []);
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((menuData, index) => (
          <Route
            path={menuData.path}
            element={menuData.component}
            key={index}
          />
        ))}
      </Route>
    </Routes>
  );
};
export default Pages;
