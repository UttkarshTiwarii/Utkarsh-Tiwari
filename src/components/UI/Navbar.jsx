import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UTKARSH_TIWARI_Resume from "../../assets/gallery/UTKARSH_TIWARI_Resume.pdf";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/certificates", label: "Certificates" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="nav-brand" to="/" aria-label="Go to home page">
          <img className="logo" src="/Logo.webp" alt="Utkarsh Tiwari logo" />
          <span className="nav-brand-text">
            <strong>Utkarsh Tiwari</strong>
            <small>Portfolio</small>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="nav-panel" aria-label="Primary navigation">
          <ul
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "is-open" : ""}`.trim()}
          >
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li className="nav-cta-wrap">
              <a className="nav-cta" href="mailto:bhargavutkarsh28@gmail.com">
                Contact
              </a>
            </li>

             <li className="nav-cta-wrap">
              <a className="nav-cta" href={UTKARSH_TIWARI_Resume} download>
                Resume ↓
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
export default Navbar;
