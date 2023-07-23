import React from "react";
import { useRestaurantContext } from "../../../context/RestaurantContext";

export const Menu = () => {
  const restaurants = useRestaurantContext();
  const restaurant = restaurants[0]; // Récupérez le restaurant à afficher, par exemple en utilisant l'indice 0 pour le premier restaurant

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div>
      <h3>Menu</h3>
      <div>
        <h4>Entrées</h4>
        <ul>
          {restaurant.menu.entrees.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Plats principaux</h4>
        <ul>
          {restaurant.menu.dishes.map((dish, index) => (
            <li key={index}>{dish}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Desserts</h4>
        <ul>
          {restaurant.menu.deserts.map((desert, index) => (
            <li key={index}>{desert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
