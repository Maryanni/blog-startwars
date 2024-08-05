import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="container containerPrincipalHome">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src="../films.jpg"
              className="card-img-top imgMenu"
              alt="..."
            />
            <Link className="btn" aria-current="page" to="/films">
              <small className="text-body-secondary linkFooter">FILMS</small>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="../yoda.png" className="card-img-top imgMenu" alt="..." />
            <Link className="btn" aria-current="page" to="/characters">
              <small className="text-body-secondary linkFooter">CHARACTERS</small>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="../planet2.jpg"
              className="card-img-top imgMenu"
              alt="..."
            />
            <Link className="btn" aria-current="page" to="/planets">
              <small className="text-body-secondary linkFooter">PLANETS</small>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="../specie.jpg"
              className="card-img-top imgMenu"
              alt="..."
            />
            <Link className="btn" aria-current="page" to="/species">
              <small className="text-body-secondary linkFooter">SPECIES</small>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="../ship.jpeg"
              className="card-img-top imgMenu"
              alt="..."
            />
            <Link className="btn" aria-current="page" to="/starships">
              <small className="text-body-secondary linkFooter">STARSHIPS</small>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="../vehicle.jpg"
              className="card-img-top imgMenu"
              alt="..."
            />
            <Link className="btn" aria-current="page" to="/vehicles">
              <small className="text-body-secondary linkFooter">VEHICLES</small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
