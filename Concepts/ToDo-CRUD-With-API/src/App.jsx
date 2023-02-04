import React, { useState, useEffect } from "react";
import Child from "./Child";

function App() {
  const [users, setUsers] = useState({});

  let r = false;

  useEffect(() => {
    if (!r) {
      const fetcher = async () => {
        const response = await fetch("https://randomuser.me/api?format=pretty");
        const data = await response.json();
        const userObj = data.results[0];
        console.log(data.results[0]);
        setUsers({
          name:
            userObj.name.title +
            " " +
            userObj.name.first +
            " " +
            userObj.name.last,
          email: userObj.email,
          dob: userObj.dob.date,
        });
        // console.log(data.results);
      };

      fetcher().catch((err) => err.message);
    }

    return () => {
      r = true;
    };
  }, []);

  return (
    <React.Fragment>
      <h1>App</h1>
      <Child users={users}/>
    </React.Fragment>
  );
}

export default App;
