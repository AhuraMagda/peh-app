import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const navLinks = [
    { path: "/", name: "home" },
    { path: "/about", name: "opis" },
    { path: "/test", name: "test" },
    { path: "/products", name: "wyszukiwarka" },
  ];

  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(prev => !prev)
  }

  return (
    <div className="w-full flex justify-center items-center flex-col ">
      <header className="fixed top-0 flex justify-center items-center flex-col w-full bg-main min-h-20vh">
        <nav className="relative mx-10 w-full px-10">
          <h1 className="text-4xl text-detail mr-10">
            Znajdź odżywkę jakiej potrzebujesz
          </h1>
          <div onClick={toggleNav} className="absolute h-7 top-0 bottom-0 my-auto right-0 px-10">
            <div className="w-7 h-1 bg-red-700 mb-2"></div>
            <div className="w-7 h-1 bg-yellow-700 mb-2"></div>
            <div className="w-7 h-1 bg-green-700"></div>
          </div>
          <ul className={`flex flex-col bg-red-200 absolute top-20vh right-0 ${!navVisible && "translate-x-full"} transition-all`}>
            {navLinks.map((navLink) => (
              <li key={navLink.name} className="p-10">
                <NavLink key={navLink.name} to={navLink.path}>
                  {({ isActive }) => {
                    return (
                      <p
                        className={`${isActive ? "text-detail decoration-solid decoration-white overline" : "hover:text-detail transition-all text-white"} `}
                      >
                        {navLink.name}
                      </p>
                    );
                  }}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}
