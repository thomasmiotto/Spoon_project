import { createContext, useContext, useState } from "react";
import { IRestaurant } from "../models/IRestaurant";
import { restaurants } from "../data";
import React from "react";

const data = restaurants;

type ContextProps = {
  children: React.ReactNode;
};

//initialisé avec une valeur par défaut de tableau vide ([]).
export const RestaurantContext = createContext<IRestaurant[]>([]);

//hook qui permet aux composants d'accéder aux données du contexte
export const useRestaurantContext = () => useContext(RestaurantContext);

//utilise le hook useState pour gérer l'état des restaurants avec la var màj de l'etat avec la fonction
export const RestaurantProvider = ({children}:ContextProps) => {
    const [restaurants, setRestaurants] = useState(data);
  
    return (
        <RestaurantContext.Provider value={ restaurants }>
          {children}
        </RestaurantContext.Provider>
      );
  }

  //Ce code crée un contexte RestaurantContext avec un fournisseur RestaurantProvider qui fournit les données des restaurants aux composants enfants via le contexte. 
  //Les composants peuvent accéder aux données des restaurants en utilisant le hook useRestaurantContext.