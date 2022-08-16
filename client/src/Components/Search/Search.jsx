import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { namesearch } from "../../Actions/index"
import "./Search.css"



export default function Barra() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
   

    const handleInputChange = (valor) => {
        valor.preventDefault()
        setName(valor.target.value)
    }

    const handleSubmit = (valor) => {
        valor.preventDefault()
        dispatch(namesearch(name))
    }

    return (

        <div className = "Div">

            <input className="Barra"
                type="text"
                onChange={(valor) => handleInputChange(valor)}
                placeholder="Buscar"
            />
            <button className="boton" type="submit" onClick={(valor) => handleSubmit(valor)}>Enter</button>

        </div>

    )
}