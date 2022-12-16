import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import ShowPartOfMeal from "../meal/ShowPartOfMeal";

const ResultOfSearch = (props)=>{

    console.log(props.meals)
   
    return(
        <div>
            <Header/>
            <Link to="/">
                <button id="button_of_navigate">Retour au menu Home</button>
            </Link>
            {
                props.meals ? (
                    props.meals.map((meals) => {
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


export default ResultOfSearch;