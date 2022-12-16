import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowPartOfMeal from "./ShowPartOfMeal";


const ListOfMeal = ()=>{
    const [mealsData, setMealsData]= useState([]);

    useEffect(()=>{
        (async () => {
            const mealsData = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const mealsListData = await mealsData.json();
            setMealsData(mealsListData.meals);
        })();
    },[]);


    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/');
    };

    return(
        <div>
            <button onClick={handleClick} id="button_of_navigate">
                Retour au menu Home
            </button>
            {
                mealsData ? (
                    mealsData.map((meals) => {
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
            };
        </div>
    )
}

export default ListOfMeal;