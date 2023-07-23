import React from "react";
import { Link } from "react-router-dom";
import { useFavoritesContext } from "../../context/FavoritesContext";
import { useRestaurantContext } from "../../context/RestaurantContext";
import { Cards } from "../Home/components/Cards";
import "./Favorites.css"

export const Favorites = () => {
  const { favorites, toggleFavorite } = useFavoritesContext();
  const restaurants = useRestaurantContext();

  const removeFavorite = (restaurantId: number) => {
    if (window.confirm("Are you sure you want to remove this restaurant from favorites?")) {
      toggleFavorite(restaurantId);
    }
  };

  return (
    <div className="container_fav">
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((restaurantId) => {
          const restaurant = findRestaurantById(restaurantId, restaurants);
          return (
            <div className="container_fav_card" key={restaurant.id}>
              <Cards data={restaurant} />
              <button className="remove_btn"onClick={() => removeFavorite(restaurant.id)}>Remove from Favorites</button>
            </div>
          );
        })
      )}
    </div>
  );
};

const findRestaurantById = (id: number, restaurants: any[]) => {
  return restaurants.find((restaurant: { id: any; }) => restaurant.id === id);
};
