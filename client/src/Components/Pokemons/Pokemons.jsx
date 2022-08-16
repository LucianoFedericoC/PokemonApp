import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { allpokemons } from "../../Actions/index"
import { Link } from "react-router-dom"
import PokeCard from "../PokeCard/PokeCard"
import Nav from "../Nav/Nav"
import Paginacion from "../Paginacion/Paginacion"
import Filtros from "../Filtros/Filtros"
import "../Pokemons/Pokemons.css"



function Pokemons() {

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons)
    const [PaginaActual, setPaginaActual] = useState(1);
    const [PorPagina] = useState(12);
    const UltimoPoke = PaginaActual * PorPagina;
    const PimerPoke = UltimoPoke - PorPagina;
    const Pokemon = allPokemons.slice(PimerPoke, UltimoPoke);


    const paginacion = (numero) => {
        setPaginaActual(numero);
    };

    useEffect(() => {
        dispatch(allpokemons());
    }, [dispatch]);


    return (
        <div className="Pokemon">
            <>
                <Nav />

                <Filtros />

                <div className="cards">
                    {Pokemon?.map((value) => {

                        return (

                            <Link className="link" to={"/pokemons/" + value.ID}>
                                <PokeCard
                                    name={value.Nombre}
                                    image={value.Imagen}
                                    types={value?.tipos?.[0]?.Nombre ? value.tipos.map(t => t.Nombre) : value.Tipo}
                                />
                            </Link>
                        )
                    })}

                </div>

                <Paginacion PorPagina={PorPagina} allPokemons={allPokemons.length} paginacion={paginacion} />

            </>
        </div>
    )
}

export default Pokemons