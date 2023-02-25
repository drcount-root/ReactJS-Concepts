import { useEffect, useState } from "react";
import Places from "./components/Places";
import Hotels from "./components/Hotels";

function App() {
  const [apidata, setApidata] = useState([]);
  const [categories, setCategories] = useState([]);
  const [places, setPlaces] = useState([]);
  const [hotels, setHotels] = useState([]);

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
        setCategories(data[0].categories);
        console.log(data[0].categories);
        setPlaces(data[0].categories.places);
        console.log(data[0].categories.places);
        setHotels(data[0].categories.hotels);
        console.log(data[0].categories.hotels);
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
          {apidata.map((apid, index) => {
            return (
              <div key={index}>
                <h2>Id:{apid.id}</h2>
                <h2>Name:{apid.name}</h2>
                <div>
                  Weather:{apid.weather.temp} {apid.weather.main}{" "}
                  <img src={`${apid.weather.icon}`} />
                </div>
                <img src={`${apid.backgroundUrl}`} />

                <div>
                  <h3>Categories:</h3>

                  <div>
                    <h3>Places:</h3>
                    {apid.categories.places.length &&
                      apid.categories.places.map((place, index) => {
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
                    {apid.categories.restaurants.length &&
                      apid.categories.restaurants.map((restaurant, index) => {
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
                    {apid.categories.hotels.length &&
                      apid.categories.hotels.map((hotel, index) => {
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
                    {apid.categories.offices.length &&
                      apid.categories.offices.map((office, index) => {
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

      <Places places={places} />
      <Hotels hotels={hotels} />
    </>
  );
}

export default App;
