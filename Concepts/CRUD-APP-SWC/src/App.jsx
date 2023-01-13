// import React from "react";
// import DataComponent from "./Components/DataComponent";

// function App() {
//   return (
//     <React.Fragment>
//       <DataComponent />
//     </React.Fragment>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();
      // console.log(data);
      const userArr = data.results;
      console.log(userArr);
      setUsersData(userArr);
    };
    fetchData().catch((error) => console.log(error.message));
  }, []);

  return (
    <React.Fragment>
      <div>
        {usersData.map((user) => {
          return (
            <div
              key={user.email}
              style={{
                display: "flex",
                border: "1px solid",
                padding: '10px',
                margin: '10px'
              }}
            >
              <span>
                Name:{" "}
                {user.name.title + " " + user.name.first + " " + user.name.last}
              </span>
              <span>DOB: {user.dob.date}</span>
              <span>Email: {user.email}</span>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default App;
