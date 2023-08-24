import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../icons/Hamburger";
const navMenu = [
  { label: "Sell", path: "sell-home" },
  { label: "Buy", path: "buy-home" },
  { label: "Contact Us", path: "contact-us" },
];

const Header = () => {
  return (
    <header className="w-full h-16 px-[30px] bg-light-blue flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center justify-center gap-[12px]">
        <Hamburger />
        <NavLink to={"/"}>
          <img src={"redbuyers-lightred 1.svg"} alt="Redbuyers Logo" />
        </NavLink>
      </div>
      <nav>
        <ul className="flex flex-row gap-[30px] text-white">
          {navMenu.map((menuItem) => {
            return (
              <li key={menuItem.label}>
                <NavLink
                  className={({ isActive }) =>
                    `relative flex flex-col justify-center items-center gap-1 group cursor-pointer text-white text-base font-medium after:content-[''] after:w-[12px] after:h-[2px] after:rounded-[1px] hover:after:bg-blue-700 ${
                      isActive && "after:bg-white"
                    }`
                  }
                  to={menuItem.path}
                >
                  {menuItem.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex justify-start items-center gap-5">
        <NavLink
          to={"/login"}
          className="flex px-[10px] py-[20px] justify-center items-center gap-[10px] text-white font-medium leading-normal hover:text-dark-blue"
        >
          Log In
        </NavLink>
        <NavLink
          to={"register"}
          className="flex px-[10px] py-[20px] justify-center items-center rounded-[10px] border-[1px] border-solid border-dark-blue bg-dark-blue h-6 text-white font-medium leading-normal hover:text-light-blue"
        >
          Register
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
<div className="w-3 h-0.5 bg-transparent rounded-[1px] group-hover:bg-blue-700" />;
