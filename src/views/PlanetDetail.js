import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function PlanetDetail() {
  const state = useContext(Context);
  const { uid } = useParams();

  useEffect(() => {
    state.actions.getPlanetId(uid);
  }, [uid]);

  return (
    <div className="container containerPrincipalHome circulo">
      <div className="card mb-3 ">
        <div className="row g-0 align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="../planet1.jpg"
              className="img-fluid imgDetail"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {state.store.planetSelect?.properties?.name}
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                Diameter: {state.store.planetSelect?.properties?.diameter}
                </li>
                <li className="list-group-item">
                Rotation period: {state.store.planetSelect?.properties?.rotation_period}
                </li>
                <li className="list-group-item">
                Orbital period: {state.store.planetSelect?.properties?.orbital_period}
                </li>
                <li className="list-group-item">
                Gravity: {state.store.planetSelect?.properties?.gravity}
                </li>
                <li className="list-group-item">
                Population: {state.store.planetSelect?.properties?.population}
                </li>
                <li className="list-group-item">
                Climate: {state.store.planetSelect?.properties?.climate}
                </li>
                <li className="list-group-item">
                Terrain: {state.store.planetSelect?.properties?.terrain}
                </li>
                <li className="list-group-item">
                Surface water: {state.store.planetSelect?.properties?.surface_water}
                </li>
                <li className="list-group-item">
                  <h4>{state.store.planetSelect?.description}</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanetDetail;
