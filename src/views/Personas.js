import React, { useState,useEffect } from "react";
import Cardpers from "../components/Cardpers";

const Personas = () => {

    const [person, setPerson] = useState([])
    console.log(person);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/person/popular?api_key=b1f1f4bc0e9a9970ff6e005e582871ec')
        .then(response=>response.json())
        .then(data=>{setPerson(data.results)});
    },[])
    
   
  
    return ( 
        <div className="row">
          {person.map(item=>
            <div className="col-sm-6 col-lg-3">
            <Cardpers name={item.name} profile={item.profile_path} />
            </div>)} 
        </div>

     );
}
 
export default Personas;