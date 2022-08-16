import React from "react";
import { Link } from "react-router-dom"
import "../BootPage/BootPage.css"

export default function bootpage() {
    return (
        <div className="Pagina">

            <img className="Imagen_Titulo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt = "Título img" />

            <img className="Imagen" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80ff523f-ff84-457d-a547-464588d3a3d3/deoyv2q-b45b858a-b861-43ad-ae81-def92ae73ea7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwZmY1MjNmLWZmODQtNDU3ZC1hNTQ3LTQ2NDU4OGQzYTNkM1wvZGVveXYycS1iNDViODU4YS1iODYxLTQzYWQtYWU4MS1kZWY5MmFlNzNlYTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.K7xpD_dSHo3jK9ZyrCvpSZ5XGuuu2fQ_MTGNjYcy14o" alt = "Imagen de fondo" />

            <div id="app" >
                <div class="loader loader-pokeball is-active">
                    <Link to="/pokemons">
                        <button className="Boton"></button>
                    </Link>
                    <h2 className="parrafo">Click al boton de la pokebola para ingresar</h2>
                </div>            
            </div>


        </div>

    )
}