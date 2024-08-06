import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function VehicleDetail() {
  const state = useContext(Context);
  const { uid } = useParams();

  useEffect(() => {
    state.actions.getVehicleId(uid);
  }, [uid]);

  return (
    <div className="container containerPrincipalHome circulo">
      <div className="card mb-3 ">
        <div className="row g-0 align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="../vehicle1.png"
              className="img-fluid imgDetail"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {state.store.vehiclepSelect?.properties?.name}
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                Model: {state.store.vehiclepSelect?.properties?.model}
                </li>
                <li className="list-group-item">
                Vehicle class: {state.store.vehiclepSelect?.properties?.vehicle_class}
                </li>
                <li className="list-group-item">
                Manufacturer: {state.store.vehiclepSelect?.properties?.manufacturer}
                </li>
                <li className="list-group-item">
                Cost in credits: {state.store.vehiclepSelect?.properties?.cost_in_credits}
                </li>
                <li className="list-group-item">
                length: {state.store.vehiclepSelect?.properties?.length}
                </li>
                <li className="list-group-item">
                Crew: {state.store.vehiclepSelect?.properties?.crew}
                </li>
                <li className="list-group-item">
                Passengers: {state.store.vehiclepSelect?.properties?.passengers}
                </li>
                <li className="list-group-item">
                Max atmosphering speed: {state.store.vehiclepSelect?.properties?.max_atmosphering_speed}
                </li>
                <li className="list-group-item">
                Cargo capacity: {state.store.vehiclepSelect?.properties?.cargo_capacity}
                </li>
                <li className="list-group-item">
                consumables: {state.store.vehiclepSelect?.properties?.consumables}
                </li>
                <li className="list-group-item">
                  <h4>{state.store.vehiclepSelect?.description}</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetail;
