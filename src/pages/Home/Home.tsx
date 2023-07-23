import { CardsList } from "./components/CardsList";
import "./Home.css"

export const Home = () => {
    return(
    <div className="container_home">
        <h1>Restaurants list</h1>
        <CardsList restaurant={[]}/>
    </div>)
}

//utilisez le hook useContext pour accéder aux données du contexte RestaurantContext.
//Utilisez une boucle map pour itérer sur les données des restaurants et afficher 
//une carte pour chaque restaurant en utilisant le composant RestaurantCard.