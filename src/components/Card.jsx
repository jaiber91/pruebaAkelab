import React, { useEffect, useState } from "react";
import "../styles/cards.css";
import Peli from "../icons/cine.jpg";

function Card() {
  const [infoPelis, guardarInfo] = useState([]);

  useEffect(() => {
    fakeAPI();
  }, []);

  const fakeAPI = async () => {
    const api = await fetch("http://localhost:3000/results");
    const infoPelis = await api.json();
    guardarInfo(infoPelis);
  };

  return (
    <div className="allCards">
      {infoPelis.map((peliculas, llave) => (
        <div className="allCards-info" key={llave}>
          <h2>{peliculas.title}</h2>
          <img src={peliculas.poster_path } alt="portada de película" />
          <p className="allCards-info--text">
            {peliculas.overview}
          </p>

          <div className="allCards-info--details">
            <p>
              <strong>Titulo:</strong> {peliculas.title}
            </p>
            <p>
              <strong>Calificación:</strong> {peliculas.vote_average}
            </p>
            <p>
              <strong>Genero:</strong>Drama
            </p>
            <p>
              <strong>Fechas de realización:</strong>{peliculas.release_date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
