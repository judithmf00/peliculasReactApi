import { Navegacion } from "../Componentes/Navegacion";
import Peliculas from "../Componentes/Peliculas";

export function Principal() {
    return(
        <div className="containerPrincipal">
            <Navegacion></Navegacion>
            <Peliculas></Peliculas>
        </div>
        
    )
}