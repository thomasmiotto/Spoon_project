import React, { createContext, useState, useEffect, useContext } from "react";

type FavoritesContextType = {
  favorites: number[];
  toggleFavorite: (restaurantId: number) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
});

type FavoritesProviderProps = {
  children: React.ReactNode;
};

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (restaurantId: number) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(restaurantId)) {
        return prevFavorites.filter((id) => id !== restaurantId);
      } else {
        return [...prevFavorites, restaurantId];
      }
    });
  };

  const favoritesContextValue: FavoritesContextType = {
    favorites,
    toggleFavorite,
  };

  return (
    <FavoritesContext.Provider value={favoritesContextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(FavoritesContext);
