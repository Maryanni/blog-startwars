import { Link } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { Context } from "../store/context";

function Navbar() {
  const state = useContext(Context);

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
          <ul className="dropdown-menu dropdown-menu-end">
            {state.store.favorites.map(
              (item, index) => (
                console.log(item.type),
                console.log("entroooo"),
                console.log(item.uid),
                (
                  <li key={index}>
                    <div className="d-flex justify-content-end">
                      <Link
                        className="dropdown-item"
                        to={`/${item.type}/${item.uid}`}
                      >
                        <small>{item.title}</small>
                      </Link>
                      <i className="btn fa-solid fa-trash" onClick={() => state.actions.deleteFavorites(item.uid, item.type)}></i>
                    </div>
                  </li>
                )
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
