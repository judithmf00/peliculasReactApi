import estilos from './Search.module.css';
import { Navigate,useNavigate } from 'react-router-dom'; 

export function Search() {
    let navegate=useNavigate();
    
    function navegateBusqueda(){
        let peliculaBuscada=document.getElementById("peliculaBuscada").value;
        navegate("/pagFiltrada?search="+peliculaBuscada);
        console.log("pelibusc"+peliculaBuscada);
    }


    return(
        <div className={estilos.containerSearch}>
            <form action="">
                <input type="text" id='peliculaBuscada'/>
                <input type="submit" value="Buscar" onClick={navegateBusqueda}/>
            </form>
        </div>
    )
    
}