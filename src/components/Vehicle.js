import { useContext, useEffect } from "react";
import { Context } from "../store/context";

function Vehicle() {
  const state = useContext(Context);

  useEffect(() => {
    state.actions.getApi("vehicles");
  }, []);

  return (
    <div className="container containerPrincipalHome">
      <div className="row row-cols-1 row-cols-md-3 g-4">
       
          {state.store.vehicles.length > 0
            ? state.store.vehicles.map((item, index) => {
                return (
                  <div className="col">
                  <div className="card d-flex justify-content-between" key={index}>
                    <img
                      src="../vehicle.jpg"
                      className="card-img-top imgMenu"
                      alt="..."
                    />
                    <div className="card-body styleText">{item.name}</div>
                    <div className="card-footer d-flex justify-content-between">
                      <div>
                        <button type="button" class="btn btn-outline-info">
                          <small>
                            <b>Learn more!</b>
                          </small>
                        </button>
                      </div>
                      <div>
                        <button type="button" class="btn btn-outline-warning">
                          <i class="fa-regular fa-heart"></i>
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

export default Vehicle;
