import { Link, Outlet } from "react-router-dom";

// TODO zmienić na navlink

function Layout() {
  const navLinks = [
    { path: "/", name: "home" },
    { path: "/about", name: "opis" },
    { path: "/test", name: "test" },
    { path: "/products", name: "wyszukiwarka" },
  ];

  return (
    <div className="w-full flex justify-center items-center flex-col ">
      <header className="fixed top-0 flex justify-center items-center flex-col w-full bg-main min-h-20vh">
        <h1 className="text-3xl pt-10">Znajdź odżywkę jakiej potrzebujesz</h1>
        <nav>
          <ul className="flex">
            {navLinks.map((navLink) => (
              <li key={navLink.name} className="p-10">
                <Link className="text-white" to={navLink.path}>
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default Layout;
