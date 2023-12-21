import cn from 'classnames';
import { Link, NavLink, Outlet } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) => cn('navbar-item', {
  'is-active': isActive,
});

const getLinkStyle = ({ isActive }: { isActive: boolean }) => ({ color: isActive ? 'red' : '' });

export const App = () => {
  return <>
    <nav className="navbar is-light px-3">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="/logo.svg" alt="MA" className="logo" />
        </Link>

        <NavLink to="/" className={getLinkClass} style={getLinkStyle} >
          Home
        </NavLink>

        <NavLink to="/users" className={getLinkClass} style={getLinkStyle} >
          Users
        </NavLink>

        <NavLink to="/posts" className={getLinkClass} style={getLinkStyle} >
          Posts
        </NavLink>
      </div>
    </nav>

    <div className="section">
      <Outlet />
    </div>
  </>;
}
