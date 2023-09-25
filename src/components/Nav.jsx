import React from "react";

const Nav = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="#" className="hover:bg-gray-600 px-4 py-2 rounded">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:bg-gray-600 px-4 py-2 rounded">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:bg-gray-600 px-4 py-2 rounded">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:bg-gray-600 px-4 py-2 rounded">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
