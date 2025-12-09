import React, { useState } from "react";
import { Link } from "react-router"; // Correct import
import { useAuth } from "./components/UseAuth";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const { token, logout, user } = useAuth();
  const admin = user?.email === "axmedja44@gmail.com";

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full p-4 bg-slate-800 text-white relative z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome</h1>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col gap-2 absolute top-16 left-0 w-full bg-slate-800 items-center px-2 md:flex md:flex-row md:items-center md:gap-4 md:static md:w-auto md:bg-transparent`}
        >
          <Link className="px-4 py-2 rounded hover:bg-slate-700" to="/">
            Home
          </Link>
          <Link className="px-4 py-2 rounded hover:bg-slate-700" to="/products">
            Shop
          </Link>
          <Link className="px-4 py-2 rounded hover:bg-slate-700" to="/about">
            About
          </Link>
          <Link className="px-4 py-2 rounded hover:bg-slate-700" to="/contact">
            Contact
          </Link>

          {/* Mobile login/logout buttons */}
          {token ? (
            <button
              className="block md:hidden px-4 py-2 rounded cursor-pointer bg-rose-500 mb-2 w-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                className="block md:hidden px-4 py-2 rounded cursor-pointer bg-rose-500 mb-2 w-full text-center"
                to="/signin"
              >
                Login
              </Link>
              <Link
                className="block md:hidden px-4 py-2 rounded cursor-pointer bg-rose-500 mb-2 w-full text-center"
                to="/register"
              >
                Register
              </Link>
            </>
          )}
        </nav>

        {/* Desktop Dropdown & Mobile Menu Icon */}
        <div className="flex gap-2 items-center">
          {token && (
            <div className="relative">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative w-8 h-8 rounded-full flex items-center justify-center bg-slate-600 cursor-pointer select-none"
              >
                <span>{user?.name.charAt(0).toUpperCase()}</span>
              </div>

              {isDropdownOpen && (
                <div
                  className="absolute top-10 right-0 bg-slate-600 z-50 p-4 rounded-lg flex flex-col gap-2"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {admin && (
                    <Link
                      className="block px-4 py-2 rounded hover:bg-slate-700"
                      to="/dashboard"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                  )}
                  <Link
                    className="block px-4 py-2 rounded hover:bg-slate-700"
                    to="/cart"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Cart
                  </Link>
                  <Link
                    className="block px-4 py-2 rounded hover:bg-slate-700"
                    to="/orderHistory"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Order History
                  </Link>
                  <button
                    className="block px-4 py-2 rounded hover:bg-rose-500"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {!token && (
            <div className="hidden md:flex gap-2">
              <Link className="bg-slate-600 px-4 py-2 rounded hover:bg-slate-700" to="/register">
                Register
              </Link>
              <Link className="bg-slate-600 px-4 py-2 rounded hover:bg-slate-700" to="/signin">
                Signin
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
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
