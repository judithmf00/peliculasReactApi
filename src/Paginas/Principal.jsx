import { Navegacion } from "../Componentes/Navegacion";
import Peliculas from "../Componentes/Peliculas";
import { Search } from "../Componentes/Search";

export function Principal() {
    return(
        <div className="containerPrincipal">
            <Navegacion></Navegacion>
            <Search></Search>
            <Peliculas></Peliculas>
        </div>
        
    )
}