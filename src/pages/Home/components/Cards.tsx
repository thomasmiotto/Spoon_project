import React, { useContext } from "react";
import { useRestaurantContext } from "../../../context/RestaurantContext";
import { IRestaurant } from "../../../models/IRestaurant";
import "./Cards.css";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../../context/FavoritesContext";

type CardsProps = {
  data: IRestaurant;
};

export const Cards = ({ data }: CardsProps) => {
  const favoritesContext = useContext(FavoritesContext); // Accéder au contexte des favoris

  const isFavorite = favoritesContext.favorites.includes(data.id); // Vérifier si le restaurant est un favori

  const toggleFavorite = () => {
    favoritesContext.toggleFavorite(data.id); // Appeler la fonction toggleFavorite du contexte pour ajouter ou supprimer le favori
  };

  return (
    
      <div className="article-card" key={data.id}>
        <Link to={`/${data.id}`} className="card-link">
        <img src={data.img} alt="restaurant-cover" /></Link>
        <div className="content">
          <div className="text_desc">
            <p className="title">{data.name}</p>
            <p className="description_short">{data.description_short}</p>
          </div>
          <button className="star-button" onClick={toggleFavorite}>
            {isFavorite ? (
              <span className="star_on">&#9733;</span> // Utiliser une étoile pleine si c'est un favori
            ) : (
              <span className="star_off">&#9734;</span> // Utiliser une étoile vide si ce n'est pas un favori
            )}
          </button>
        </div>
      </div>
    
  );
};
