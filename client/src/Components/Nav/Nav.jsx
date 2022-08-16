import React from "react";
import { Link } from "react-router-dom"
import "./Nav.css"
import Search from "../Search/Search"


export default function NavBar() {
    return (

        <div className="nav">

            <Link to = "/pokemons">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="Logo" />          
            </Link>

<Search/>

            <Link to="/creacion">
                <button className="crear">Agregar un pokemon</button>
            </Link>


        </div>

    )
}