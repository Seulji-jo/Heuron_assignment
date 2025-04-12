import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/assign1">과제1</NavLink>
          <NavLink to="/assign2">과제2</NavLink>
          <NavLink to="/assign3">과제3</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
