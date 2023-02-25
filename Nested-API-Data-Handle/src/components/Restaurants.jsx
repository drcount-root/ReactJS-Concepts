import React from "react";

export default function Restaurants({ restaurants }) {
  return (
    <>
      {restaurants.map((restaurant, index) => {
        return (
          <div key={index}>
            restaurant Id: {restaurant.id} Name: {restaurant.name} Rating:{" "}
            {restaurant.rating}Price: {restaurant.price} Address:{" "}
            {restaurant.address} Open At:
            {restaurant.openAt}
            Close At: {restaurant.closeAt} restaurant Image:
            <img src={`${restaurant.imageUrl}`} />
          </div>
        );
      })}
    </>
  );
}
