import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DescriptionOfMeal from './components/meal/DescriptionOfMeal';
import ListOfMeal from './components/meal/LisOfMeal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<ListOfMeal/>}/>
        <Route path='/meal/:id' element={<DescriptionOfMeal/>}/>
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