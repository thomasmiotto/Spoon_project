import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantContext } from "../../context/RestaurantContext";
import { IRestaurant } from "../../models/IRestaurant";
import { Menu } from "./Components/Menu";
import "./RestaurantDetails.css";
import { FavoritesContext } from "../../context/FavoritesContext";

export const RestaurantDetails = () => {
  const { restaurantId } = useParams<{ restaurantId: string | undefined }>();
  const id = parseInt(restaurantId ?? "");

  const restaurants = useRestaurantContext();
  const [restaurant, setRestaurant] = useState<IRestaurant | null>(null);

  const favoritesContext = useContext(FavoritesContext); // Accéder au contexte des favoris

  useEffect(() => {
    const fetchRestaurant = () => {
      const foundRestaurant = restaurants.find((r) => r.id === id);
      setRestaurant(foundRestaurant ?? null);
    };

    fetchRestaurant();
  }, [id, restaurants]);

  if (restaurant == null) return <p>Loading...</p>;

  const isFavorite = favoritesContext.favorites.includes(restaurant.id); // Vérifier si le restaurant est un favori

  const toggleFavorite = () => {
    favoritesContext.toggleFavorite(restaurant.id); // Appeler la fonction toggleFavorite du contexte pour ajouter ou supprimer le favori
  };

  return (
    <div className="container_details">
      <div className="description">
        <h2>{restaurant.name}</h2>
        <button className="star-button" onClick={toggleFavorite}>
          {isFavorite ? (
            <span className="star">&#9733;</span> // Utiliser une étoile pleine si c'est un favori
          ) : (
            <span className="star">&#9734;</span> // Utiliser une étoile vide si ce n'est pas un favori
          )}
        </button>
        <p className="overview">{restaurant.description_long}</p>
        <Menu />
      </div>
      <img src={restaurant.img} alt="restaurant-cover" />
    </div>
  );
};
