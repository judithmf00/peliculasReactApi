import React, { useEffect, useState } from 'react';
import estilos from "./Peliculas.module.css"
import { Link } from 'react-router-dom';

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const apiKey = '070fbdf9d8dd6e55eb1d6d8c56e5cf92'; 
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=es`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.results);
      })
      .catch((error) => console.error('Error al obtener datos:', error));
  }, []);

  return (
    <div className={estilos.containerPeliculas}>
      <div className={estilos.peliculas}>
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className={estilos.pelicula}>
            <p>{(pelicula.vote_average*10).toFixed(0)}</p>
            <img className={estilos.imgPelicula} src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}/>
            <h2>{pelicula.title}</h2>
            {/* <button className={estilos.btnPelicula}>Ver detalles</button> */}
            <Link to={`/detalle/${pelicula.id}`} className={estilos.btnPelicula}>
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Peliculas;
