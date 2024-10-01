import { Route, Routes } from "react-router-dom"
import { Inicio } from "../../componentes/contenedor/inicio"
import { CancionCrear } from "../../componentes/canciones/CancionCrear"
import { CancionAdmin } from "../../componentes/canciones/CacnionAdmin"
import { CancionesActualizar } from "../../componentes/canciones/CancionesActualizar"
import { NoEcontrado } from "../../componentes/contenedor/NoEncontrado"

export const Ruteo = ()=>{
    return(
        <Routes>
            <Route path="/Cancre " element={<Inicio/>}/>
            <Route path="/Canlis" element={<CancionCrear/>}/>
            <Route path="/Canadmin" element={< CancionAdmin/>}/>


            <Route path="/Canact/:codigo" element={<CancionesActualizar/>}/>

            <Route path="*" element={<NoEcontrado/>}/>
        </Routes>

    );
};