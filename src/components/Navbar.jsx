import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../public/logo.png";
import ThemeChanger from "./ThemeChanger";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-sports-equipment">All Sports Equipment</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/add-equipments"}>Add Equipments</NavLink>
          </li>
          <li>
            <NavLink to={"/my-equipment-list"}>My Equipment List</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm w-full px-1 md:px-0 md:mx-auto md:container md:max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
            <ThemeChanger className="block lg:hidden" />
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost">
          <img src={logo} alt="logo" className="w-24 md:w-28" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-1 md:gap-3">
        <div className="hidden lg:block">
          <ThemeChanger />
        </div>
        {user && user?.email ? (
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-full w-10 p-0"
            >
              <img
                className="rounded-full w-8"
                src={user?.photoURL}
                title={user?.displayName}
                alt={user?.displayName}
              />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 right-0 p-2 shadow"
            >
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm btn-ghost w-full text-xs rounded p-0 m-0"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to={"/login"} className="btn btn-xs rounded-xl">
              Login
            </Link>
            <Link to={"/register"} className="btn btn-xs rounded-xl">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
