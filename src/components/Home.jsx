import { useEffect,useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ShowMeal from "./meal/ShowMeal";


const Home = () => {

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
            <Header/>
            {mealRandomData ? (
                <ShowMeal meals={mealRandomData}/>
            ) : (
                <div>
                    <h1>Chargement de la recette...</h1>
                </div>
            )}
            <Footer/>
        </>
        
    );
};

export default Home;