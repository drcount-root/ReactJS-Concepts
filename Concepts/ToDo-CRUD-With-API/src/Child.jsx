import React from "react";

export default function Child(users) {
  return (
    <React.Fragment>
      <div>
        {Object.keys(users.users).map((key, id) => {
          return <div key={id}>{users.key}</div>;
        })}
      </div>
    </React.Fragment>
  );
}
