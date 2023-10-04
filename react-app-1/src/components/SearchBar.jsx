import { Products } from "../data/FetchProducts";

 const SearchBar = ({ data, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if(!e.target.value) return setSearchResults(data);

        const resultsArray = Products.filter(Products => Products.title.includes(e.target.value) || Products.tags.includes(e.target.value))

        setSearchResults(resultsArray)
    }
    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                className="search-input"
                type="text" id="search"
                onChange={handleSearchChange} />
                <button className="search-button"></button>
             </form>

        </header>
    )
}

export default SearchBar;