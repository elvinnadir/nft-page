import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "clsx";
import { menus } from "../../constants/menu";
import HeaderLogo from "../../assets/images/brand.png";
import '../header/header.scss';

const Header = () =>
{
  const { pathname } = useLocation();
  const [scroll, setScroll] = useState(false);
  const [menuActive, setMenuActive] = useState<boolean | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() =>
  {
    window.addEventListener("scroll", () =>
    {
      setScroll(window.scrollY > 100);
    });
    return () =>
    {
      window.removeEventListener("scroll", () => setScroll(false), false);
    };
  }, []);

  const handleMenu = () =>
  {
    setMenuActive(!menuActive);
  };
  const handleDrop = (index: number) =>
  {
    setActiveIndex(index);
  };

  return (
    <header
      id="main_header"
      className={cn("header", {
        ["is-fixed"]: scroll
      })}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__body d-flex justify-content-between">
              <div className="header__logo">
                <Link to="/">
                  <img src={HeaderLogo} alt="" />
                </Link>
              </div>
              {/* Header-right */}
              <div className="header__right">
                <nav
                  id="main-nav"
                  className={cn("main-nav", {
                    ["active"]: menuActive
                  })}>
                  <ul className="menu" id="menu-primary-menu">
                    {menus.map((data: any, index: any) =>
                    {
                      return (
                        <li
                          key={index}
                          onClick={() => handleDrop(index)}
                          className={cn("menu-item", {
                            ["menu-item-has-children"]: data.namesub,
                            ["active"]:
                              activeIndex === index || pathname === data.links
                          })}>
                          <Link to={data.links}>{data.name}</Link>
                          {data.namesub && (
                            <ul className="sub-menu">
                              {data.namesub.map((submenu: any) => (
                                <li
                                  className={cn("menu-item ", {
                                    ["current-item"]: pathname === submenu.links
                                  })}>
                                  <Link to={submenu.links}>{submenu.name}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              {/* Header-right */}

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
