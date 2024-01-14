import{Navegacion} from '../Componentes/Navegacion';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get } from '../Util/httpClient';

export function PeliculasBuscadas() {
    let busqueda = useLocation().search.split("=")[1];
    console.log(busqueda);

    const [peliculas, setPelicula] = useState();

    useEffect(() => {
        const apiKey = '070fbdf9d8dd6e55eb1d6d8c56e5cf92'; 
        const url = `https://api.themoviedb.org/3/search/movie?query=${busqueda}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

        get(url)
        .then((data) => {
            setPelicula(data.results);console.log(setPelicula(data.results))
            console.log(url)
        })
        .catch((error) => console.error('Error al obtener datos:', error));
    }, []);

    
    return(
        <div className="containerBusqueda">
            {peliculas ? (
            <div className='containerDetallePelicula'>
              <Navegacion></Navegacion>
                <h2>Peliculas</h2>
                {peliculas.map((pelicula) => (
                    <div key={pelicula.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                        <p>Título: {pelicula.original_title}</p>
                    </div>
                ))}
            </div>
            ) : (
                <p>Cargando peliculas...</p>
            )}
        </div>
    )
}