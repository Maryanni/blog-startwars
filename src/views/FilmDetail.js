import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function FilmDetail() {
  const state = useContext(Context);
  const { uid } = useParams();

  useEffect(() => {
    state.actions.getFilmId(uid);
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
              <h5 className="card-title">{state.store?.title}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Producer: {state.store?.producer}
                </li>
                <li className="list-group-item">
                  Director: {state.store?.director}
                </li>
                <li className="list-group-item">
                  Episode id: {state.store?.episode_id}
                </li>
                <li className="list-group-item">
                  Opening crawl: {state.store?.opening_crawl}
                </li>
                <li className="list-group-item">
                  <h4>{state.store?.description}</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;
