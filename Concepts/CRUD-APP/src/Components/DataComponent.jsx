import React, { useState, useEffect } from "react";

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
          dob: userObj.dob.date,
          email: userObj.email,
        });
      });
  }, []);

  return (
    <React.Fragment>
      <div>
        <strong>Name:</strong> {userdata.name}
      </div>
      <div>
        <strong>DOB:</strong> {userdata.dob}
      </div>
      <div>
        <strong>Email:</strong> {userdata.email}
      </div>
    </React.Fragment>
  );
}
