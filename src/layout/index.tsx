import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <ul className="navbar-nav my-3 gap-3">
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/assign1">과제1</NavLink>
              </li>
              <li>
                <NavLink to="/assign2">과제2</NavLink>
              </li>
              <li>
                <NavLink to="/assign3">과제3</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="container pt-4">
        <Outlet />
      </main>
    </div>
  );
}
