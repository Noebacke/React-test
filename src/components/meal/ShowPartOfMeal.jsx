import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const ShowPartOfMeal = (props)=>{

    const mealData = props.meals;

    return(
        <div id="block_of_meals">
            <h1>{mealData.strMeal}</h1> 
            <img src={mealData.strMealThumb} className="meal_img"></img>
            <div>{mealData.strCategory}</div>
            <Link to={"/meal/"+mealData.idMeal}>
                <button id="button_of_navigate">En savoir plus</button>
            </Link>
        </div>
    )
}

export default ShowPartOfMeal;