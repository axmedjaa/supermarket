import React, { useState } from "react";
import { Link } from "react-router"; 
import { useAuth } from "./components/UseAuth";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const { token, logout, user } = useAuth();
  const admin = user?.email === "axmedja44@gmail.com";

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full p-4 bg-slate-800 text-white relative">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome</h1>

        {/* Mobile Menu */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col gap-2 absolute top-16 left-0 w-full bg-slate-800 items-center px-2 z-50
          md:flex md:flex-row md:items-center md:gap-4 md:static md:w-auto md:bg-transparent`}
        >
          <Link className="px-4 py-2 rounded hover:bg-slate-700" to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link className="px-4 py-2 rounded hover:bg-slate-700" to="/products" onClick={() => setIsMenuOpen(false)}>
            Shop
          </Link>
          <Link className="px-4 py-2 rounded hover:bg-slate-700" to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link className="px-4 py-2 rounded hover:bg-slate-700" to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>

          {token ? (
            <button
              className="block md:hidden px-4 py-2 rounded bg-rose-500 w-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                className="block md:hidden px-4 py-2 rounded bg-rose-500 w-full text-center"
                to="/signin"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                className="block md:hidden px-4 py-2 rounded bg-rose-500 w-full text-center"
                to="/register"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </nav>

        {/* Desktop Dropdown / User */}
        <div className="flex gap-2 items-center">
          {token ? (
            <div className="relative">
              <div
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-600 cursor-pointer"
              >
                <span>{user?.name ? user.name.charAt(0).toUpperCase() : "U"}</span>
              </div>

              {isDropdownOpen && (
                <div
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute top-10 right-0 bg-slate-600 z-50 p-4 rounded-lg flex flex-col min-w-[150px]"
                >
                  {admin && (
                    <Link
                      className="block mb-2 px-4 py-2 rounded hover:bg-slate-700"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  )}
                  <Link
                    className="block mb-2 px-4 py-2 rounded hover:bg-slate-700"
                    to="/cart"
                  >
                    Cart
                  </Link>
                  <Link
                    className="block mb-2 px-4 py-2 rounded hover:bg-slate-700"
                    to="/orderHistory"
                  >
                    Order History
                  </Link>
                  <button
                    className="block px-4 py-2 rounded hover:bg-slate-700"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link className="px-4 py-2 rounded bg-slate-600 hover:bg-slate-700" to="/register">
                Register
              </Link>
              <Link className="px-4 py-2 rounded bg-slate-600 hover:bg-slate-700" to="/signin">
                Signin
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
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
