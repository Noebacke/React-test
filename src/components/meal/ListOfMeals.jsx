import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowMeal from "./ShowMeal";

const ListOfMeals = ()=>{

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
    };
    return(
        <div>
            <div>
                {
                  getLastMeal()[0] ? (
                    getLastMeal().map((meals)=>{
                        return(
                            <div id="meal">
                                <ShowMeal meals={meals}/>
                            </div>
                        )
                    }))  : (
                        <div>
                            <h1>Chargement de la recette...</h1>
                        </div>
                    )
                }
            </div>
            <button onClick={handleClick} id="button_of_view_list">Voi +</button>
        </div>
    )
}

export default ListOfMeals ;