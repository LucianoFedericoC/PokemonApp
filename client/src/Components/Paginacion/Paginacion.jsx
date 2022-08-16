import React, { useEffect } from "react";
import { useState } from "react";
import "./Paginacion.css"

export default function Paginacion({ PorPagina, allPokemons, paginacion }) {
  
  const [paginas, setPaginas] = useState([])

  useEffect(() => {

  let pag = []
    for (let i = 1; i <= Math.ceil(allPokemons / PorPagina); i++) {
      pag.push(i)
    }
    setPaginas(pag);
  }, [allPokemons])


  return (

    <div className="pag">
      <ul className='paginacion' >
        {paginas.length > 0 &&
          paginas.map(numero => {
            return <li className="numero" key={numero+"pagina"}>
              <button className="button" onClick={() => paginacion(numero)}>
                {numero}
              </button>
            </li>
          })}
      </ul>
    </div>
  );
}