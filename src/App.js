import React, { useEffect, useState } from "react";



import MovieCard from "./MovieCard.jsx";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL ="http://www.omdbapi.com?apikey=${key}"

const App = () => {

    const[searchTerm, setSearchTerm] = useState("");
    const[movies, setMovies] = useState([]);     
  
    
    useEffect(() =>{
        searchMovies("Spiderman");
    },[])

    const searchMovies = async(title) =>{
        const res = await fetch(`${API_URL}&s={title}`);
        const data = await res.json();   
        setMovies(data.Search);
    }

     
    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="search for movies"
                    value = {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt ="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                ?(
                  <div className="container" >
                    { movies.map((movie) => 
                       <MovieCard movie = {movie}/>
                   )}                            
                   </div>     
                ) : (
                  <div className="empty">
                    <h2> No found Movies</h2>       
                  </div>     
                )
            }
                               
        </div>
    );
}

export default App;