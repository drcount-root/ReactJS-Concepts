import React, { useState, useEffect } from "react";
import ListUsers from "./ListUsers";

export default function DataComponent() {
  const [userdata, setUserData] = useState({ name: "", email: "", dob: "" });

  let rendered = false;

  useEffect(() => {
    if (!rendered) {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const userObj = data.results[0];
          setUserData({
            name:
              userObj.name.title +
              " " +
              userObj.name.first +
              " " +
              userObj.name.last,
            dob: userObj.dob.date,
            email: userObj.email,
          });
        })
        .catch((error) => console.log("Error Message: " + error.message));
    }
    return () => {
      console.log("clear");
      rendered = true;
    };
  }, []);

  return (
    <React.Fragment>
      <ListUsers info={userdata} />
    </React.Fragment>
  );
}

// the return function of the useEffect() runs first then the data get fetched from api
