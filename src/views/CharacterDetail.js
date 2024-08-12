import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function CharacterDetail() {
  const state = useContext(Context);
  const { uid } = useParams();

  useEffect(() => {
    state.actions.getPeopleId(uid);
  }, [uid]);

  return (
    <div className="container containerPrincipalHome circulo">
      <div className="card mb-3 ">
        <div className="row g-0 align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="../people1.jpeg"
              className="img-fluid imgDetail"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {state.store.peopleSelect?.properties?.name}
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Gender: {state.store.peopleSelect?.properties?.gender}
                </li>
                <li className="list-group-item">
                  Mass: {state.store.peopleSelect?.properties?.mass}
                </li>
                <li className="list-group-item">
                  Hair color: {state.store.peopleSelect?.properties?.hair_color}
                </li>
                <li className="list-group-item">
                  Skin_color: {state.store.peopleSelect?.properties?.skin_color}
                </li>
                <li className="list-group-item">
                  Eye_color: {state.store.peopleSelect?.properties?.eye_color}
                </li>
                <li className="list-group-item">
                  <h4>{state.store.peopleSelect?.description}</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
