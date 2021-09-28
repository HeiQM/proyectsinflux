import React, { useState,useEffect } from "react";
import Cardprogra from "../components/Cardprogra";

const Programastv = () => {

    const [program, setProgram] = useState([])
    console.log(program);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=b1f1f4bc0e9a9970ff6e005e582871ec')
        .then(response=>response.json())
        .then(data=>{setProgram(data.results)});
    },[])
    
    return ( 
        <div className="row">
          {program.map(item=>
            <div className="col-sm-6 col-lg-3">
            <Cardprogra name={item.name} url={item.poster_path} />
            </div>)} 
        </div>

     );
}
 
export default Programastv;