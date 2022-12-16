import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import ShowCats from './components/cats/ShowCats';
import Home from './components/Home';
import DescriptionOfMeal from './components/meal/DescriptionOfMeal';
import ListOfMeal from './components/meal/LisOfMeal';
import ResultOfSearch from './components/Search/ResultOfSearch';

function App() {

  const [mealData, setMealsData] = useState([])
  const [returnErrorMeal, setReturnErrorMeal] = useState();
  
  const returnError = () => {
      <div id="error_search_meal">
          Aucun résulat ne correspond à la recherche...
      </div>
  }

  const handleChange = async (e) => {
      const mealResponses = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + e.target.value);
      const mealData = await mealResponses.json();

      if (mealData.meals.length > 0) {
          setMealsData(mealData.meals);
      } else {
          console.error("Aucun resultats ne corresponds à la recherche");
          setReturnErrorMeal(true);
      }
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home handleSearch={handleChange}/>} />
        <Route path='/list' element={<ListOfMeal meals={mealData}/>}/>
        <Route path='/meal/:id' element={<DescriptionOfMeal/>}/>
        <Route path='/cats' element={<ShowCats/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//https://www.themealdb.com/api/json/v1/1/search.php?s=   liste des recettes
// en utilisant cette api https://www.themealdb.com/api.php
// Créer une page Home qui affiche une recette de manière aléatoire
// trois recettes issues de l'api avec un bouton "voir +" qui dirige
//vers la page qui affiche toutes les recettes
// Créer une page Recettes qui affiche toutes les recettes et au click
// sur une recette, on est redirigé vers la page qui affiche le détail
// créer une page Recette qui affiche le détail d'une recette
// avec l'id dans la recette
// Créer un composant Header et un composant Footer appelé sur toutes les pages
// Dans le header, faites un input de recherche
// quand on submit le form, on est redirigé vers une page qui affiche les résultats de recherche
// créer une page qui affiche toutes les catégories
// créer une page qui affiche le détail d'une catégorie
// au click sur une catégorie dans la liste, on est redirigé vers la page qui affiche le détail de la catégorie