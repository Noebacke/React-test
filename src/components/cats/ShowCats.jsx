import { useEffect, useState } from "react";
import ShowCatsDetails from "./ShowcatsDetails";


const ShowCats = ()=>{

    const [catsData, setcatsData]= useState([]);

    useEffect(()=>{
        (async () => {
            const catsData = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const catsListData = await catsData.json();
            setcatsData(catsListData.meals);
        })();
    },[]);

    
    return(
        <div>
            {catsData ? (
                catsData.map((cats) => {
                    return (
                        <div id="meal">
                            <ShowCatsDetails cats={cats} />
                        </div>
                    );
                })) : (
                <div>
                    <h1>Chargement de la recette...</h1>
                </div>
            )}
        </div>
    )
}
export default ShowCats;