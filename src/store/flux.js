const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      films: [],
      people: [],
      planets: [],
      species: [],
      vehicles: [],
      starships: [],
      peopleSelect: null,
      planetSelect: null,
      specieSelect: null,
      startshipSelect: null,
      vehiclepSelect: null,
      description: "",
      producer: "",
      title: "",
      episode_id: "",
      director: "",
      opening_crawl: "",
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
          .then((data) => {
            console.log("hola");
            console.log(data.result);
            setStore({ peopleSelect: data.result });
          })
          .catch((error) => console.log(error));
      },
      getPlanetId: (uid) => {
        fetch(`https://www.swapi.tech/api/planets/${uid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ planetSelect: data.result });
          })
          .catch((error) => console.log(error));
      },
      getSpecieId: (uid) => {
        fetch(`https://www.swapi.tech/api/species/${uid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ specieSelect: data.result });
          })
          .catch((error) => console.log(error));
      },
      getStarshipId: (uid) => {
        fetch(`https://www.swapi.tech/api/starships/${uid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ startshipSelect: data.result });
          })
          .catch((error) => console.log(error));
      },
      getVehicleId: (uid) => {
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ vehiclepSelect: data.result });
          })
          .catch((error) => console.log(error));
      },
      getFilmId: (uid) => {
        const { films } = getStore();
        setStore({ description: "", producer: "", title: "", episode_id: "", director: "", opening_crawl: "" });
        films.forEach((item) => {
          if (item.uid === uid) {
            console.log(item.uid)
            console.log("holaa")
            console.log(uid)
            setStore({
              description: item.description,
              producer: item.properties.producer,
              title: item.properties.title,
              episode_id: item.properties.episode_id,
              director: item.properties.director,
              opening_crawl: item.properties.opening_crawl,
            });
       
          }
        });
      },
    },
  };
};
export default getState;
