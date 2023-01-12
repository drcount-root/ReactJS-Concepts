import React, { useEffect } from "react";
import { useState } from "react";

export default function DataComponent() {
  const [userdata, setUserData] = useState({ name: "", email: "", dob: "" });

  useEffect(() => {
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
        });
      });
  }, []);

  return <div>{userdata.name}</div>;
}
