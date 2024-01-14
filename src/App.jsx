import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import { Principal } from './Paginas/Principal'
import { DetallePelicula } from './Paginas/DetallePelicula'
import {PeliculasBuscadas} from './Paginas/PeliculasBuscadas'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Principal />} ></Route>
        <Route path='/detalle/:IdPelicula' element={<DetallePelicula />} ></Route>
        <Route path='/pagFiltrada/' element={<PeliculasBuscadas />} ></Route>
      </Routes>
    </>
  )
}

export default App
