function SearchBar(){
    
    return(
        <form>
            <label htmlFor="search-bar"></label>
            <div className="search-bar-container">
                <input type="text" name="search-bar" className="search-bar"></input>
                <button type="submit" className="search-submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
    );
}

export default SearchBar;