import React from "react";

export default function Hotels({ hotels }) {
  return (
    <>
      {hotels.map((hotel, index) => {
        return (
          <div key={index}>
            Hotel Id: {hotel.id} Name: {hotel.name} Rating: {hotel.rating}Price:{" "}
            {hotel.price} Address: {hotel.address} Check In:
            {hotel.checkIn}
            Check Out: {hotel.checkOut} hotel Image:
            <img src={`${hotel.imageUrl}`} />
          </div>
        );
      })}
    </>
  );
}
