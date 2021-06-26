import React from "react";
import Fibo from './Fibo';
import Home from './Home';
import Ake from './Ake';
import "../styles/menu.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <div>
     
      
      <Router>
         <div className="menu">
            
             <Link to="/fibo">
                Fibo
             </Link>
             <Link to="/ake">
                Ake
             </Link>
             <Link to="/">
                Películas
             </Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/fibo">
            
            <Fibo />
          </Route>
          <Route exact path="/ake">
            
            <Ake />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Menu;
