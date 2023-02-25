import React from "react";

export default function Offices({ offices }) {
  return (
    <>
      {offices.map((office, index) => {
        return (
          <div key={index}>
            office Id: {office.id} Name: {office.name} Cabins: {office.cabins}{" "}
            Seats: {office.seats}
            Price: {office.price} Address: {office.address} Description:
            {office.desc}
            Area: {office.area} Office Image:
            <img src={`${office.imageUrl}`} />
          </div>
        );
      })}
    </>
  );
}
