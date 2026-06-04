import React from 'react'
import './NotFound.css'
import notfound from '../assets/notfound.png'


const NotFound = () => {
  return (
    <main className="not-found">
      <h1>Ruta en construccion</h1>
      <p id="404">No hemos encontrado la página que buscas</p>

          <img src={notfound} alt="carreteracortada" />
    </main>
  )
}

export default NotFound
