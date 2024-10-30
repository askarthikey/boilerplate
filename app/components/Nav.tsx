"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "unset" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const navItems = [
    { href: "/signup", label: "Register" },
    { href: "/signin", label: "Login" }
  ];

  return (
    <div className="bg-white shadow-lg shadow-violet-500 border border-violet-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 lg:h-20">
          {/* Menu button on far left */}
          <button
            onClick={toggleMenu}
            className={`rounded-lg text-violet-700 transition duration-200 ${
              isMenuOpen 
                ? 'hover:text-violet-500 bg-transparent'
                : 'hover:text-violet-500 hover:bg-transparent'
            } focus:outline-none focus:ring-2`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo centered between menu and nav items */}
          <div className="flex-1 flex justify-center lg:justify-start lg:ml-8">
            <Link href="/" className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-violet-700 tracking-tight hover:text-violet-800 transition duration-200">
                Logo
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center justify-end">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 font-bold text-[20px] text-violet-700 hover:text-white hover:bg-violet-700 rounded-lg transition duration-300 shadow-none hover:shadow-lg hover:shadow-violet-500/50 
               transform hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-white/30 backdrop-blur-sm"
          onClick={closeMenu}
        >
          {/* Menu content */}
          <div
            className="absolute inset-y-0 left-0 w-72 backdrop-blur-sm transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex-1 py-6 space-y-1 ml-5 mt-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-5 py-2 text-base font-bold text-violet-700 hover:text-white hover:bg-violet-700 rounded-lg transition duration-300 shadow-none hover:shadow-lg hover:shadow-violet-500/50 
               transform hover:scale-95 transition-all duration-200 ease-in-out"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;