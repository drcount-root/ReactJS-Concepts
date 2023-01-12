import React, { useEffect } from "react";

export default function DataComponent() {
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.results[0]);
      });
  }, []);

  return <div>DataComponent</div>;
}
