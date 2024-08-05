import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbarPrincipal">
      <div className="d-flex justify-content-center">
        <Link className="navbar-brand" aria-current="page" to="/">
          <img
            src="../logoNavbar2.jpg"
            className="card-img-top btnImgNavbar"
            alt="..."
          />
        </Link>
      </div>
      <div
        className="btn-group btnFavorites"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
            <span className="badge text-bg-secondary iconNavbar">4</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/#">
                Dropdown link
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
