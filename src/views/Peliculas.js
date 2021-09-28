import React, { useState,useEffect } from "react";
import Cardspelis from "../components/Cardspelis";

const Peliculas = () => {

    const [films, setFilms] = useState([])
    console.log(films);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b1f1f4bc0e9a9970ff6e005e582871ec')
        .then(response=>response.json())
        .then(data=>{setFilms(data.results)});
    },[])
    
   
  
    return ( 
        <div className="row">
            {films.map(item=>
            <div className="col-sm-6 col-lg-3">
            <Cardspelis title={item.original_title} date={item.release_date} url={item.poster_path}/>
            </div>)} 
        </div>

     );
}
 
export default Peliculas;