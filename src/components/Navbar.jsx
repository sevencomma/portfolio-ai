// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { to: "/about", label: "About" },
    { to: "/journey", label: "Journey" },
    { to: "/ps", label: "PS & Awards" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          IHYEONCHEOL
        </Link>
      </div>
      <nav className="navbar-right">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              "navbar-link" + (isActive ? " navbar-link-active" : "")
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
