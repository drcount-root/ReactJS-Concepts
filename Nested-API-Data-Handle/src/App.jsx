import { useEffect, useState } from "react";
// import Places from "./components/Places";
// import Hotels from "./components/Hotels";
// import Restaurants from "./components/Restaurants";
// import Offices from "./components/Offices";

function App() {
  const [apidata, setApidata] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [places, setPlaces] = useState([]);
  // const [hotels, setHotels] = useState([]);
  // const [restaurants, setRestaurants] = useState([]);
  // const [offices, setOffices] = useState([]);

  let rendered = false;

  useEffect(() => {
    if (!rendered) {
      const datafetch = async () => {
        const response = await fetch(
          "https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1458/data.json"
        );
        const data = await response.json();

        setApidata(data);
        console.log(data);
        // setCategories(data[0].categories);
        // console.log(data[0].categories);
        // setPlaces(data[0].categories.places);
        // console.log(data[0].categories.places);
        // setHotels(data[0].categories.hotels);
        // console.log(data[0].categories.hotels);
        // setRestaurants(data[0].categories.restaurants);
        // console.log(data[0].categories.restaurants);
        // setOffices(data[0].categories.offices);
        // console.log(data[0].categories.offices);
      };

      datafetch();
    }

    return () => {
      rendered = true;
      console.log("unmounted");
    };
  }, []);

  return (
    <>
      <div>
        <h2>API Data</h2>
        <div>
          {apidata.map((item, index) => {
            return (
              <div key={index}>
                <h2>Id:{item.id}</h2>
                <h2>Name:{item.name}</h2>
                <div>
                  Weather:{item.weather.temp} {item.weather.main}{" "}
                  <img src={`${item.weather.icon}`} />
                </div>
                <img src={`${item.backgroundUrl}`} />

                <div>
                  <h3>Categories:</h3>

                  <div>
                    <h3>Places:</h3>
                    {item.categories.places.length &&
                      item.categories.places.map((place, index) => {
                        return (
                          <div key={index}>
                            <h4>
                              Id:{place.id} Name:{place.name} Rating:{" "}
                              {place.rating} Image:{" "}
                              <img src={`${place.imageUrl}`} />
                            </h4>
                          </div>
                        );
                      })}
                  </div>

                  <div>
                    <h3>Restaurants:</h3>
                    {item.categories.restaurants.length &&
                      item.categories.restaurants.map((restaurant, index) => {
                        return (
                          <div key={index}>
                            <h4>
                              Id:{restaurant.id} Name:{restaurant.name}
                            </h4>
                          </div>
                        );
                      })}
                  </div>

                  <div>
                    <h3>Hotels:</h3>
                    {item.categories.hotels.length &&
                      item.categories.hotels.map((hotel, index) => {
                        return (
                          <div key={index}>
                            <h4>
                              Id:{hotel.id} Name:{hotel.name}
                            </h4>
                          </div>
                        );
                      })}
                  </div>

                  <div>
                    <h3>Offices:</h3>
                    {item.categories.offices.length &&
                      item.categories.offices.map((office, index) => {
                        return (
                          <div key={index}>
                            <h4>
                              Id:{office.id} Name:{office.name}
                            </h4>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr />

      {/* <Places places={places} />
      <Hotels hotels={hotels} />
      <Restaurants restaurants={restaurants} />
      <Offices offices={offices} /> */}
    </>
  );
}

export default App;

/*

const obj = [{id: 1, name: 'New Delhi'}, {id: 2, name: 'Mumbai'}, {id: 3, name: 'Goa'}];

const n = Object.entries(obj);

console.log(n);

*/
