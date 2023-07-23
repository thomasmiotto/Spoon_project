import { Cards } from "./Cards";
import React from "react";
import { useRestaurantContext } from "../../../context/RestaurantContext";
import { IRestaurant } from "../../../models/IRestaurant";
import "./CardsList.css"

type CardListProps = {
  restaurant: IRestaurant[];
}


export const CardsList = ({restaurant}: CardListProps) => {
  const restaurants : IRestaurant[] = useRestaurantContext();

  return (
    <section className="section_cards">
      {restaurants.map((restaurant) => (
        <Cards data={restaurant} key={restaurant.id} />
      ))}
    </section>
  );
};


