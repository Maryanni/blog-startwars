const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      films: [],
      people: [],
      planets: [],
      species: [],
      vehicles: [],
      starships: [],
    },
    actions: {
      getApi: (attributes) => {
        fetch(`https://www.swapi.tech/api/${attributes}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.result);
            console.log(data.results);

            setStore({
              [attributes]: data.result ? data.result : data.results,
            });
          })
          .catch((error) => console.log(error));
      },
      getPeopleId: (uid) => {
        fetch(`https://www.swapi.tech/api/people/${uid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => response.json())
        .catch((error) => console.log(error));


      },
    },
  };
};
export default getState;
