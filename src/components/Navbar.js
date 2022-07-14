import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const logout = () => {
    localStorage.clear('token');
    window.location.href = "./login";
  };

  return (
    <>
      <nav className="relative text-md flex flex-wrap items-center justify-between py-3 bg-indigo-600 text-white">
        <div className="container overflow-hidden px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <p
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              <Link to="/">MyLocale</Link>
            </p>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <p
                  className="px-3 py-2 flex items-center text-md text-white hover:opacity-75"
                >
                  <Link to="/">Home</Link>
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="px-3 py-2 flex items-center text-md text-white hover:opacity-75"
                >
                  <Link to="/users">Users</Link>
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="px-3 py-2 flex items-center text-md text-white hover:opacity-75"
                >
                  <Link to="/Profile">My Profile</Link>
                </p>
              </li> 
              <li className="nav-item">
                <p
                  className="px-3 py-2 cursor-pointer flex items-center text-md text-white hover:opacity-75" onClick={ logout }
                >
                  Logout
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}