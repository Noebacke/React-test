import { useEffect,useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ListOf3Meals from "./meal/ListOf3Meals";
import ShowPartOfMeal from "./meal/ShowPartOfMeal";



const Home = (props) => {


    const [mealRandomData, setMealRandomData] = useState(null);
    

    useEffect(()=>{
        (async ()=>{
            const mealResponses = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const mealRandomData = await mealResponses.json()
            const returnMeal = mealRandomData.meals[0];
            setMealRandomData(returnMeal);
        })();
    },[]);

    return(
        <>
            <Header handleSearch={props.handleSearch}/>
            <div>
                <div id="simple_random_meal">
                    {mealRandomData ? (
                        <ShowPartOfMeal meals={mealRandomData} />
                    ) : (
                        <div>
                            <h1>Chargement de la recette...</h1>
                        </div>
                    )}
                </div>
                <div id="3_meals_of_list">
                    <ListOf3Meals/>
                </div>
            </div>
            <Footer/>
        </>
        
    );
};

export default Home;