import React from "react";
import "./PokeCard.css"
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


export default function PokeCard({ name, types, image}) {


    return (
        <div className="Card">

            <h2 className="nombre"> {name.charAt(0).toUpperCase().concat(name.slice(1, name.length))} </h2>
            <img className="img" src={image ? image : dimage} alt="" />
            
            <ul className="tipo">
                {types?.map((t) => {
                    switch (t) {
                        case "fire": {
                            return (
                                <li className="listatype"><img src={fire} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={fire} alt=""/></li>
                            )

                        }
                        
                        case "normal": {
                            return (
                                <li className="listatype"><img src={normal} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={normal} alt=""/></li>
                            )

                        }
                        case "fighting": {
                            return (
                                <li className="listatype"><img src={fighting} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={fighting} alt=""/></li>
                            )

                        }
                        case "flying": {
                            return (
                                <li className="listatype"><img src={flying} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={flying} alt=""/></li>
                            )

                        }
                        case "poison": {
                            return (
                                <li className="listatype"><img src={poison} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={poison} alt=""/></li>
                            )

                        }
                        
                        case "ground": {
                            return (
                                <li className="listatype"><img src={ground} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={ground} alt=""/></li>
                            )

                        }
                  
                        case "rock": {
                            return (
                                <li className="listatype"><img src={rock} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={rock} alt=""/></li>
                            )

                        }
                        case "bug": {
                            return (
                                <li className="listatype"><img src={bug} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={bug} alt=""/></li>
                            )

                        }
                        case "ghost": {
                            return (
                                <li className="listatype"><img src={ghost} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={ghost} alt=""/></li>
                            )

                        }
                        
                        case "steel": {
                            return (
                                <li className="listatype"><img src={steel} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={steel} alt=""/></li>
                            )

                        }
                        case "water": {
                            return (
                                <li className="listatype"><img src={water} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={water} alt=""/></li>
                            )

                        }
                        case "grass": {
                            return (
                                <li className="listatype"><img src={grass} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={grass} alt=""/></li>
                            )

                        }
                        case "electric": {
                            return (
                                <li className="listatype"><img src={electric} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={electric} alt=""/></li>
                            )

                        }
                        
                        case "psychic": {
                            return (
                                <li className="listatype"><img src={psychic} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={psychic} alt=""/></li>
                            )

                        }
                        case "ice": {
                            return (
                                <li className="listatype"><img src={ice} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={ice} alt=""/></li>
                            )

                        }
                        case "dragon": {
                            return (
                                <li className="listatype"><img src={dragon} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={dragon} alt=""/></li>
                            )

                        }
                        
                        case "dark": {
                            return (
                                <li className="listatype"><img src={dark} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={dark} alt=""/></li>
                            )

                        }
                        case "fairy": {
                            return (
                                <li className="listatype"><img src={fairy} alt=""/> {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} <img src={fairy} alt=""/></li>
                            )

                        }
                        case "unknown": {
                            return (
                                <li className="listatype">❔ {t.charAt(0).toUpperCase().concat(t.slice(1, t.length))} ❔</li>
                            )

                        }
                        
                        case "shadow": {
                            return (
                                <li className="listatype">{t.charAt(0).toUpperCase().concat(t.slice(1, t.length))}🔥</li>
                            )

                        }
                        default: {
                            return (
                                <li className="listatype">{t.charAt(0).toUpperCase().concat(t.slice(1, t.length))}</li>
                            )

                        }

                    }
                })}
            </ul>

        </div>
    )
}