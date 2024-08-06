import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function SpecieDetail() {
  const state = useContext(Context);
  const { uid } = useParams();

  useEffect(() => {
    state.actions.getSpecieId(uid);
  }, [uid]);

  return (
    <div className="container containerPrincipalHome circulo">
      <div className="card mb-3 ">
        <div className="row g-0 align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="../specie1.jpg"
              className="img-fluid imgDetail"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {state.store.specieSelect?.properties?.name}
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                Classification: {state.store.specieSelect?.properties?.classification}
                </li>
                <li className="list-group-item">
                Designation: {state.store.specieSelect?.properties?.designation}
                </li>
                <li className="list-group-item">
                Average height: {state.store.specieSelect?.properties?.average_height}
                </li>
                <li className="list-group-item">
                Average lifespan: {state.store.specieSelect?.properties?.average_lifespan}
                </li>
                <li className="list-group-item">
                Hair colors: {state.store.specieSelect?.properties?.hair_colorsr}
                </li>
                <li className="list-group-item">
                Skin colors: {state.store.specieSelect?.properties?.skin_colors}
                </li>
                <li className="list-group-item">
                Eye colors: {state.store.specieSelect?.properties?.eye_colors}
                </li>
                <li className="list-group-item">
                Language: {state.store.specieSelect?.properties?.language}
                </li>
                <li className="list-group-item">
                  <h4>{state.store.specieSelect?.description}</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecieDetail;
