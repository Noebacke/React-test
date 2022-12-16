import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowPartOfMeal from "./ShowPartOfMeal";


const ListOfMeal = (props)=>{
    const [mealsData, setMealsData]= useState([]);

    useEffect(()=>{
        (async () => {
            const mealsData = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const mealsListData = await mealsData.json();
            setMealsData(mealsListData.meals);
        })();
    },[]);

    return(
        <div>
            <div>
                <Link to="/">
                    <button id="button_of_navigate">Retour au menu Home</button>
                </Link>
                <Link to="/cats">
                    <button id="button_of_navigate">Catégories</button>
                </Link>
                {
                    props.meal ? (
                        props.meal ? (
                            props.meal.map((meals) => {
                                return (
                                    <div id="meal">
                                        <ShowPartOfMeal meals={meals} />
                                    </div>
                                );
                            })) : (
                            <div>
                                <h1>Chargement de la recette...</h1>
                            </div>
                        )
                    ) : (
                        mealsData ? (
                            mealsData.map((meals) => {
                                return (
                                    <div id="meal">
                                        <ShowPartOfMeal meals={meals} />
                                    </div>
                                );
                            })) : (
                            <div>
                                <h1>Chargement des recettes...</h1>
                            </div>
                        )
                    )
                    
                };
            </div>
        </div>
    )
}

export default ListOfMeal;