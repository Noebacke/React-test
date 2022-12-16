import SearchBar from "./Search/SearchBar";

const Header = (props)=>{

    console.log(props)

    return(
       <h1>
        <SearchBar  handleSearch={props.handleSearch}/>
       </h1>
    )
}

export default Header;