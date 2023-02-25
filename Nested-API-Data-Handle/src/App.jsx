import { useEffect, useState } from "react";

function App() {
  const [apidata, setApidata] = useState([]);

  let rendered = false;

  useEffect(() => {
    if (!rendered) {
      const datafetch = async () => {
        const response = await fetch(
          "https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1458/data.json"
        );
        const data = await response.json();

        console.log(data);
        setApidata(data);
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
                    Places:{" "}
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
                    Restaurants:{" "}
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
                    Hotels:{" "}
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
