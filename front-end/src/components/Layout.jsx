import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const navLinks = [
    { path: "/", name: "home" },
    { path: "/about", name: "opis" },
    { path: "/test", name: "test" },
    { path: "/products", name: "wyszukiwarka" },
  ];

  return (
    <div className="w-full flex justify-center items-center flex-col ">
      <header className="fixed top-0 flex justify-center items-center flex-col w-full bg-main min-h-20vh">
        <h1 className="text-4xl pt-10">Znajdź odżywkę jakiej potrzebujesz</h1>
        <nav>
          <ul className="flex">
            {navLinks.map((navLink) => (
              <li key={navLink.name} className="p-10">
                <NavLink key={navLink.name} to={navLink.path}>
                  {({ isActive }) => {
                    return (
                      <p className={`${isActive && "text-white"}`}>
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
