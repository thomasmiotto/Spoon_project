import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./ComponentsShared/Header";
import { RestaurantContext } from "./context/RestaurantContext";
import { RestaurantDetails } from "./pages/Resaturant/RestaurantDetails";
import { Favorites } from "./pages/Favorites/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";
import { restaurants } from "./data";

export const App = () => {
  return (
    <div className="App">
      <FavoritesProvider>
        <RestaurantContext.Provider value={restaurants}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/:restaurantId" element={<RestaurantDetails />} />
            </Routes>
          </BrowserRouter>
        </RestaurantContext.Provider>
      </FavoritesProvider>
    </div>
  );
};
