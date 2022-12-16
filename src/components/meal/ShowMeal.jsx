const ShowMeal = (props)=>{

    const mealData = props.meals;
    

    const getIngredients = ()=>{
        const ingredients = [];
        for(let i=1; i<= 20; i++) {
            
            if(mealData[`strIngredient${i}`]) {
                ingredients.push(mealData[`strIngredient${i}`]);
                
            }
        };
        
        return ingredients;
    } 

    return(
        <div id="block_of_meals">
            <h1>{mealData.strMeal}</h1> 
            <img src={mealData.strMealThumb} className="meal_img"></img>
            <div id="id_of_meal">{mealData.idMeal}</div>
            <div>{mealData.strCategory}</div>
            <div>{mealData.strInstructions}</div>
            <div>
                {getIngredients().map((ingredient)=>{
                    return(
                        <li>{ingredient}</li>
                    )
                })}
            </div>
        </div>
    )
}

export default ShowMeal ;