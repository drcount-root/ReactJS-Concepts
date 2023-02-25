import React from "react";

export default function Places({ places }) {
  return (
    <>
      {places.map((place, index) => {
        return (
          <div key={index}>
            Place Id: {place.id} Name: {place.name} Rating: {place.rating} Entry
            Fee: {place.entryFee} Description: {place.desc} Open At:{" "}
            {place.openAt} Close At: {place.closeAt} Place Image:{" "}
            <img src={`${place.imageUrl}`} />
          </div>
        );
      })}
    </>
  );
}