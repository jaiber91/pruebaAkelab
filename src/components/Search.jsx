import React from 'react';
import  '../styles/search.css';
import Lupa from '../icons/Vector.png';
import Filter from '../icons/Filter.png';
import Arrow from '../icons/Arrow.png';

function  Search () {
    return (
        <div>
            <h2>Películas</h2>
            <div className="blockSearch">
            <div>
                <input className="blockSearch-Search" type="text" placeholder="Buscar" ></input>
                <img className="blockSearch-Search--lupa" src={Lupa} />
            </div >
             <hr className= "blockSearch-line"/>

            <div className="blockSearch-filter">
                <img src={Filter} />
                
            </div>
            <hr className= "blockSearch-line"/>
           <div className="blockSearch-order">
               <a href="#">Ordenar </a>
               <img src={Arrow} /> 
           </div>
            </div>
           
        </div>
      );
}
 
export default Search;