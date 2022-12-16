const ShowCatsDetails = (props)=>{
    const catsData = props.cats
    return(
        <>
        <div id="block_of_meals">
            <div>{catsData.strCategory}</div>
        </div>
        </>
    )
}
export default ShowCatsDetails;