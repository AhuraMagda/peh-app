import { Link, Outlet } from "react-router-dom";

// TODO zmienić na navlink

function Layout() {
  return (
    <div className="page-wrapper">
      <header>
        <h1>Znajdź odżywkę jakiej potrzebujesz</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">opis</Link>
            </li>
            <li>
              <Link to="/test">test</Link>
            </li>
            <li>
              <Link to="/products">wyszukiwarka</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default Layout;
