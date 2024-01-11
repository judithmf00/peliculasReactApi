import estilos from "./Navegacion.module.css"
import {Link} from "react-router-dom";

export function Navegacion() {
    return(
        <div className={estilos.containerNavegacion}>
            <nav className={estilos.containerNavegacion_nav}>
                <ul className={estilos.containerNavegacion_ul}>
                    <li>
                        {/* <Link to="/">Inicio</Link> */}
                        <a href="#">JudiFlix</a> 
                        
                    </li>
                </ul>
            </nav>
        </div>
    )
}