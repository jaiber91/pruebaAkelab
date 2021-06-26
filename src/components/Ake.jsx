import React from 'react';

function numAke(){
    for(let i = 1; i < 100; i++ ) {
        if (i % 15 === 0) {
            console.log(`${i} FIZZ BUZZ!!!`)
        } else if( i % 3 === 0 ) {
            console.log(`${i} fizz`)
        } else if (i % 5 === 0) {
            console.log(`${i} buzz`)
    } 
}
}

function Ake ()  {
       
    return ( 
        <div>
        <h1>Ake</h1>
        <button onClick={numAke} >Activar fibo</button>
        <p>resultado en la consola😬</p>
        </div>
     )
}
 
export default Ake;