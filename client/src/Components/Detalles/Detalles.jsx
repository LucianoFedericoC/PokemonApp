import React from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { details } from "../../Actions/index"
import "../Detalles/Detalles.css"
import fire from "../../assets/Type_Icons/Pokémon_Fire_Type_Icon.svg"
import bug from "../../assets/Type_Icons/Pokémon_Bug_Type_Icon.svg"
import dark from "../../assets/Type_Icons/Pokémon_Dark_Type_Icon.svg"
import dragon from "../../assets/Type_Icons/Pokémon_Dragon_Type_Icon.svg"
import electric from "../../assets/Type_Icons/Pokémon_Electric_Type_Icon.svg"
import fairy from "../../assets/Type_Icons/Pokémon_Fairy_Type_Icon.svg"
import fighting from "../../assets/Type_Icons/Pokémon_Fighting_Type_Icon.svg"
import flying from "../../assets/Type_Icons/Pokémon_Flying_Type_Icon.svg"
import ghost from "../../assets/Type_Icons/Pokémon_Ghost_Type_Icon.svg"
import grass from "../../assets/Type_Icons/Pokémon_Grass_Type_Icon.svg"
import ground from "../../assets/Type_Icons/Pokémon_Ground_Type_Icon.svg"
import ice from "../../assets/Type_Icons/Pokémon_Ice_Type_Icon.svg"
import normal from "../../assets/Type_Icons/Pokémon_Normal_Type_Icon.svg"
import poison from "../../assets/Type_Icons/Pokémon_Poison_Type_Icon.svg"
import psychic from "../../assets/Type_Icons/Pokémon_Psychic_Type_Icon.svg"
import rock from "../../assets/Type_Icons/Pokémon_Rock_Type_Icon.svg"
import steel from "../../assets/Type_Icons/Pokémon_Steel_Type_Icon.svg"
import water from "../../assets/Type_Icons/Pokémon_Water_Type_Icon.svg"
import dimage from "../../assets/Pokemon_default_image/whoispokemon.png"


export default function Detalles(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(details(props.match.params.id))
    }, [dispatch])


    let detalles = useSelector((state) => state.details)
    console.log(detalles, "detalle")
    return (
        <>
            <div className="contenedor">

                {[detalles].length > 0 ? (
                    [detalles].map((value) => (

                        <div className="tarjeta" to={`/pokemons/${value?.ID}`}>

                            <div className="primero">
                                <div>
                                    <h2>Nombre: {value?.Nombre?.charAt(0).toUpperCase().concat(value?.Nombre?.slice(1, value?.Nombre?.length))}</h2>
                                    <h3>ID: {value?.ID}</h3>
                                </div>

                                <img classname="image" src={value?.Imagen ? value?.Imagen : dimage} alt="" />

                                <div className="tipo">

                                    {value?.tipos?.map((t) => {
                                        const type = typeof t === "string" ? t : t.Nombre
                                        switch (type) {
                                            case "fire": {
                                                return (                                             
                                                    <li className="listatype"><img src={fire} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={fire} alt="" /></li>
                                                )

                                            }

                                            case "normal": {
                                                return (
                                                    <li className="listatype"><img src={normal} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={normal} alt="" /></li>
                                                )

                                            }
                                            case "fighting": {
                                                return (
                                                    <li className="listatype"><img src={fighting} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={fighting} alt="" /></li>
                                                )

                                            }
                                            case "flying": {
                                                return (
                                                    <li className="listatype"><img src={flying} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={flying} alt="" /></li>
                                                )

                                            }
                                            case "poison": {
                                                return (
                                                    <li className="listatype"><img src={poison} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={poison} alt="" /></li>
                                                )

                                            }

                                            case "ground": {
                                                return (
                                                    <li className="listatype"><img src={ground} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={ground} alt="" /></li>
                                                )

                                            }

                                            case "rock": {
                                                return (
                                                    <li className="listatype"><img src={rock} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={rock} alt="" /></li>
                                                )

                                            }
                                            case "bug": {
                                                return (
                                                    <li className="listatype"><img src={bug} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={bug} alt="" /></li>
                                                )

                                            }
                                            case "ghost": {
                                                return (
                                                    <li className="listatype"><img src={ghost} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={ghost} alt="" /></li>
                                                )

                                            }

                                            case "steel": {
                                                return (
                                                    <li className="listatype"><img src={steel} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={steel} alt="" /></li>
                                                )

                                            }
                                            case "water": {
                                                return (
                                                    <li className="listatype"><img src={water} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={water} alt="" /></li>
                                                )

                                            }
                                            case "grass": {
                                                return (
                                                    <li className="listatype"><img src={grass} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={grass} alt="" /></li>
                                                )

                                            }
                                            case "electric": {
                                                return (
                                                    <li className="listatype"><img src={electric} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={electric} alt="" /></li>
                                                )

                                            }

                                            case "psychic": {
                                                return (
                                                    <li className="listatype"><img src={psychic} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={psychic} alt="" /></li>
                                                )

                                            }
                                            case "ice": {
                                                return (
                                                    <li className="listatype"><img src={ice} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={ice} alt="" /></li>
                                                )

                                            }
                                            case "dragon": {
                                                return (
                                                    <li className="listatype"><img src={dragon} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={dragon} alt="" /></li>
                                                )

                                            }

                                            case "dark": {
                                                return (
                                                    <li className="listatype"><img src={dark} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={dark} alt="" /></li>
                                                )

                                            }
                                            case "fairy": {
                                                return (
                                                    <li className="listatype"><img src={fairy} alt="" /> {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} <img src={fairy} alt="" /></li>
                                                )

                                            }
                                            case "unknown": {
                                                return (
                                                    <li className="listatype">❔ {type.charAt(0).toUpperCase().concat(type.slice(1, type.length))} ❔</li>
                                                )

                                            }

                                            case "shadow": {
                                                return (
                                                    <li className="listatype">{type.charAt(0).toUpperCase().concat(type.slice(1, type.length))}🔥</li>
                                                )

                                            }
                                            default: {
                                                return (
                                                    <li className="listatype">{type.charAt(0).toUpperCase().concat(type.slice(1, type.length))}</li>
                                                )

                                            }

                                        }
                                    })}

                                </div>
                            </div>
                            <div className="segundo">
                                <div className="detalle">


                                    <p className="infopokemon">Vida: {value?.Vida}</p>
                                    <p className="infopokemon"> Ataque: {value?.Ataque}</p>
                                    <p className="infopokemon">Defensa: {value?.Defensa}</p>
                                    <p className="infopokemon">Velocidad: {value?.Velocidad}</p>
                                    <p className="infopokemon">Altura: {value?.Altura} Pies</p>
                                    <p className="infopokemon">Peso: {value?.Peso} Kg</p>                                  


                                </div>

                                <Link className="botonback" to="/pokemons">
                                    <button>Volver</button>
                                </Link>
                            </div>
                        </div>

                    ))) : "cargando"}



            </div>
        </>
    )
}