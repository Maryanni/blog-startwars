import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";

function Starship() {
  const state = useContext(Context);

  useEffect(() => {
    state.actions.getApi("starships");
  }, []);

  return (
    <div className="container containerPrincipalHome">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {state.store.starships.length > 0
          ? state.store.starships.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <div
                    className="card d-flex justify-content-between"
                    key={index}
                  >
                    <img
                      src="../ship.jpeg"
                      className="card-img-top imgMenu"
                      alt="..."
                    />
                    <div className="card-body styleText">{item.name}</div>
                    <div className="card-footer d-flex justify-content-between">
                      <div>
                        <Link
                          className="btn btn btn-outline-info"
                          aria-current="page"
                          to={`/starships/${item.uid}`}
                        >
                          <small>
                            <b>Learn more!</b>
                          </small>
                        </Link>
                      </div>
                      <div>
                        <button
                          type="button"
                          className={`btn btn-outline-warning ${
                            state.store.favorites.some(
                              (is) =>
                                is.uid == item.uid && is.type == "starships"
                            )
                              ? "isFavorite"
                              : ""
                          }`}
                          onClick={() => {
                            const isSelected = state.store.favorites.some(
                              (is) =>
                                is.uid == item.uid && is.type == "starships"
                            );
                            if (isSelected)
                              state.actions.deleteFavorites(
                                item.uid,
                                "starships"
                              );
                            else
                              state.actions.addFavorites(item.uid, "starships");
                          }}
                        >
                          <i className="fa-regular fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "no tiene nada people"}
      </div>
    </div>
  );
}

export default Starship;
