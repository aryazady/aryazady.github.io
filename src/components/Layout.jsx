import { Outlet, NavLink } from 'react-router-dom';
import BioBackground from './BioBackground.jsx';

export default function Layout({ data }) {
  return (
    <>
      <BioBackground />
      <nav className="top">
        <div className="wrap">
          <span className="brand">{data.meta.siteBrand}</span>
          <span className="links">
            <NavLink to="/industry" className={({ isActive }) => (isActive ? 'active' : '')}>
              {data.nav.industryLabel}
            </NavLink>
            <NavLink to="/phd" className={({ isActive }) => (isActive ? 'active' : '')}>
              {data.nav.phdLabel}
            </NavLink>
          </span>
        </div>
      </nav>

      <Outlet />

      <footer>
        © {new Date().getFullYear()} {data.profile.name}. {data.meta.footerText}
      </footer>
    </>
  );
}
