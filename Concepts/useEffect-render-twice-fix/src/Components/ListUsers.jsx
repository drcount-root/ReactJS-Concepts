import React from "react";

export default function ListUsers(props) {
  const { name, dob, email } = props.info;

  return (
    <React.Fragment>
      <div>
        <div>
          <strong>Name:</strong> {name}
        </div>
        <div>
          <strong>DOB:</strong> {dob}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
      </div>
    </React.Fragment>
  );
}
