// import logo from './logo.svg';
// import './App.css';

//azucar sintactico: JSX => JS + HTML/XML
//import React from "react";
import Navbar from "./components/Navbar";
import Peliculas from "./views/Peliculas";
import Programastv from "./views/Programastv";
import Personas from "./views/Personas";
import Cinesensacional from "./views/Cinesensacional";
import { BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
function App() {

  return (
    <Router>
      <div>
        <Navbar/>
       <Switch>
       <Route exact path="/" >
           <Cinesensacional/>
         </Route>
         <Route exact path="/peliculas" >
           <Peliculas/>
         </Route>

         <Route exact path="/progtv" >
           <Programastv/>
         </Route>

         <Route exact path="/person" >
           <Personas/>
         </Route>

       </Switch>
      </div>

    </Router>

  );
}

export default App;
