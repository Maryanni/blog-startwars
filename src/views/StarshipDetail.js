import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function StarshipDetail() {
  const state = useContext(Context);
  const { uid } = useParams();

  useEffect(() => {
    state.actions.getStarshipId(uid);
  }, [uid]);

  return (
    <div className="container containerPrincipalHome circulo">
      <div className="card mb-3 ">
        <div className="row g-0 align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="../startship1.jpg"
              className="img-fluid imgDetail"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {state.store.startshipSelect?.properties?.name}
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Model: {state.store.startshipSelect?.properties?.model}
                </li>
                <li className="list-group-item">
                  Starship class:{" "}
                  {state.store.startshipSelect?.properties?.starship_class}
                </li>
                <li className="list-group-item">
                  Manufacturer:{" "}
                  {state.store.startshipSelect?.properties?.manufacturer}
                </li>
                <li className="list-group-item">
                  Cost_in_credits:{" "}
                  {state.store.startshipSelect?.properties?.cost_in_credits}
                </li>
                <li className="list-group-item">
                  Length: {state.store.startshipSelect?.properties?.length}
                </li>
                <li className="list-group-item">
                  Crew: {state.store.startshipSelect?.properties?.crew}
                </li>
                <li className="list-group-item">
                  Passengers:{" "}
                  {state.store.startshipSelect?.properties?.passengers}
                </li>
                <li className="list-group-item">
                  Max atmosphering speed:{" "}
                  {
                    state.store.startshipSelect?.properties
                      ?.max_atmosphering_speed
                  }
                </li>
                <li className="list-group-item">
                  Hyperdrive rating:{" "}
                  {state.store.startshipSelect?.properties?.hyperdrive_rating}
                </li>
                <li className="list-group-item">
                  MGLT: {state.store.startshipSelect?.properties?.MGLT}
                </li>
                <li className="list-group-item">
                  Cargo capacity:{" "}
                  {state.store.startshipSelect?.properties?.cargo_capacity}
                </li>
                <li className="list-group-item">
                  Consumables:{" "}
                  {state.store.startshipSelect?.properties?.consumables}
                </li>
                <li className="list-group-item">
                  <h4>{state.store.startshipSelect?.description}</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarshipDetail;
