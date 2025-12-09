import React from "react";
import { Link } from "react-router";
import { useAuth } from "./components/UseAuth";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
const Header = () => {
  const { token, logout, user } = useAuth();
  const admin = user?.email === "axmedja44@gmail.com";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(user?.email)
  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };
  return (
    <header className="w-full p-4 bg-slate-800 text-white">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-bold">welcome</h1>
        <nav
          className={`${isMenuOpen ? "flex" : "hidden"} 
            flex-col gap-2 absolute top-16 left-0 w-full bg-slate-800 items-center px-2
            md:flex md:flex-row md:items-center md:gap-4 md:static md:w-auto md:bg-transparent`}
        >
          <Link className=" px-4 py-2 rounded cursor-pointer" to="/">
            Home
          </Link>
          <Link className=" px-4 py-2 rounded cursor-pointer" to="/products">
            Shop
          </Link>
          <Link className=" px-4 py-2 rounded cursor-pointer" to="/about">
            About
          </Link>
          <Link className=" px-4 py-2 rounded cursor-pointer" to="/contact">
            Contact
          </Link>
          {
            token &&
            <button
              className="block md:hidden px-4 py-2 rounded cursor-pointer bg-rose-500 mb-2 w-full "
              onClick={handleLogout}
            >
              logout
            </button>
          }
          {
            !token &&
            <>
                <Link
              className="block md:hidden px-4 py-2 rounded cursor-pointer text-center bg-rose-500 mb-2 w-full "
              to="/signin"
            >
              login
            </Link>
            <Link
              className="block md:hidden px-4 py-2 rounded cursor-pointer text-center bg-rose-500 mb-2 w-full "
              to="/register"
            >
              register
            </Link>
            </>

          }
        </nav>
        <div className="flex gap-2">
          {token && (
            <div className="flex gap-2">
              <div
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative w-8 h-8 rounded-full flex items-center justify-center bg-slate-600"
              >
                <span>{user?.name.charAt(0).toUpperCase()}</span>
                {isDropdownOpen && (
                  <div 
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute top-8 right-0 bg-slate-600 z-10 p-4 rounded-lg">
                   {
                    admin&&<Link
                      className="block mb-2 bg-slate-600 px-4 py-2 rounded cursor-pointer"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                   }
                   <Link className="block mb-2 bg-slate-600 px-4 py-2 rounded cursor-pointer" to="/cart">
                     Cart
                   </Link>
                   <Link className="block mb-2 bg-slate-600 px-4 py-2 rounded cursor-pointer" to="/orderHistory">
                     order History
                   </Link>
                    <button
                      className="block bg-slate-600 px-4 py-2 rounded cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {!token && (
            <div className="flex gap-2">
              <Link
                className="hidden bg-slate-600 px-4 py-2 rounded cursor-pointer md:flex"
                to="/register"
              >
                Register
              </Link>
              <Link
                className="hidden bg-slate-600 px-4 py-2 rounded cursor-pointer md:flex"
                to="/signin"
              >
                Signin
              </Link>
            </div>
          )}
          <div className="md:hidden">
            <button
              className="w-8 h-8 rounded-full flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <CiMenuBurger className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
