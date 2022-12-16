import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShowMeal from "./ShowMeal";

const DescriptionOfMeal = ()=>{
    const [mealsData, setMealsData]= useState([]);

    const { id} = useParams();

    useEffect(()=>{
        (async () => {
            const mealsData = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ id);
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
                                <ShowMeal meals={meals} />
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

export default DescriptionOfMeal;