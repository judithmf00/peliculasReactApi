import { get } from '../Util/httpClient';
import { useEffect, useState } from 'react';
// import estilos from 'DetallePeliculas.module.css';
import { useParams } from 'react-router-dom';

export function DetallePelicula() {
  const { IdPelicula } = useParams();
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    const apiKey = '070fbdf9d8dd6e55eb1d6d8c56e5cf92'; 
    const url = `https://api.themoviedb.org/3/movie/${IdPelicula}?api_key=${apiKey}&language=es`;

    get(url)
      .then((data) => {
        setPelicula(data);
      })
      .catch((error) => console.error('Error al obtener datos:', error));
  }, []);

  return (
    <div className="detailsContainer">
        {pelicula ? (
            <>
                <h2>Detalle de la película</h2>
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                <div>
                    <p> Título: {pelicula.title}</p>
                </div>
            </>
        ) : (
            <p>Cargando detalles...</p>
        )}
    </div>
  );
}
