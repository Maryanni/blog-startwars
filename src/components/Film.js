import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";
import "../App.css";


function Films() {
  const state = useContext(Context);

  useEffect(() => {
    state.actions.getApi("films");
  }, []);

  return (
    <div className="container containerPrincipalHome">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {state.store.films.length > 0
          ? state.store.films.map((item, index) => {
              return (
                <div className="col">
                  <div
                    className="card d-flex justify-content-between"
                    key={index}
                  >
                    <img
                      src="../films.jpg"
                      className="card-img-top imgMenu"
                      alt="..."
                    />
                    <div className="card-body styleText">
                      {item.properties.title}
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                      <div>
                        <Link
                          className="btn btn btn-outline-info"
                          aria-current="page"
                          to={`/films/${item.uid}`}
                        >
                          <small>
                            <b>Learn more!</b>
                          </small>
                        </Link>
                      </div>
                      <div>
                        <button
                          type="button"
                          className={`btn btn-outline-warning ${state.store.favorites.some(is => is.uid == item.uid) ? 'isFavorite' : ''}`}
                          onClick={() => state.actions.addFavorites(item.uid)}
                        >
                          <i className="fa-regular fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "no tiene nada"}
      </div>
    </div>
  );
}

export default Films;
