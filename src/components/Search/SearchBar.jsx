import { useNavigate } from "react-router-dom";

const SearchBar = (props)=>{
    const navigate = useNavigate();
    return(
        <form >
            {/*Input qui appellera la fonction handleChange lors du submit*/}
            <input type="text" placeholder="Recherche" onChange={(e) => {
                props.handleSearch(e)
                navigate('/list')
                }} />
        </form>
    )
}

export default SearchBar;