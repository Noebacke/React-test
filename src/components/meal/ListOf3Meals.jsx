import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShowPartOfMeal from "./ShowPartOfMeal";

const ListOf3Meals = ()=>{

    const [mealsData, setMealsData]= useState([])

    useEffect(()=>{
        (async () => {
            const mealsData = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const mealsListData = await mealsData.json();
            setMealsData(mealsListData.meals);
        })();
    },[])

    const getLastMeal = () => {
        return [mealsData[0],mealsData[1],mealsData[2]];
    }
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/list');
    }

    return(
        <div>
            <div>
                {
                  getLastMeal()[0] ? (
                    getLastMeal().map((meals)=>{
                        return(
                            <div id="meal">
                                <ShowPartOfMeal meals={meals}/>
                            </div>
                        )
                    }))  : (
                        <div>
                            <h1>Chargement de la recette...</h1>
                        </div>
                    )
                }
            </div>
            <button id="button_of_navigate" onClick={handleClick}> Voir + </button>
            
        </div>
    )
}

export default ListOf3Meals ;