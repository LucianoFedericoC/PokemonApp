import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";
import { pokepost, types } from "../../Actions/index"
import "../Creacion/Creacion.css"

function validacion(poke) {
    let errors = {};
    if (!poke.Nombre) {
        errors.Nombre = 'Se requiere un nombre!'
    } else if (poke.Nombre[0] === ' ') {
        errors.Nombre = 'El primer caracter no puede ser un espacio vacio'
    }
    return errors
}

export default function Creacion() {
    const dispatch = useDispatch()
    const tipos = useSelector((state) => state.types)

    const history = useHistory()

    const [errors, setErrors] = useState({})

    const [poke, setPoke] = useState({
        Nombre: "",
        Vida: 0,
        Ataque: 0,
        Defensa: 0,
        Velocidad: 0,
        Altura: 0,
        Peso: 0,
        poketipos: [],
        Imagen: ""
    })


    useEffect(() => {
        dispatch(types())
    }, [])

    function handleSelect(valor) {
        if(!poke.poketipos.includes(valor.target.value)) {
        setPoke({
            ...poke,
            poketipos: [...poke.poketipos, valor.target.value]
        })
    } else { setPoke({...poke}) }
    }

    function onInputChange(valor) {
        valor.preventDefault()
        setPoke({
            ...poke,
            [valor.target.name]: valor.target.value
        })

        setErrors(
            validacion({
                ...poke,
                [valor.target.name]: valor.target.value
            })

        )
    }

    function onSubmit(valor) {
        valor.preventDefault()
        if (poke.poketipos.length > 0) {
            if (poke.poketipos.length < 3) {
                if (poke.Vida > 0 && poke.Ataque > 0 && poke.Defensa > 0 && poke.Velocidad > 0 && poke.Altura > 0 && poke.Peso > 0) {
                    dispatch(pokepost(poke))
                    alert("Pokemon Creado")

                    setPoke({
                        Nombre: "",
                        Vida: 0,
                        Ataque: 0,
                        Defensa: 0,
                        Velocidad: 0,
                        Altura: 0,
                        Peso: 0,
                        poketipos: [],
                        Imagen: ""
                    })
                    history.push("/pokemons")
                } else alert("Solo se pueden ingresar valores mayores a cero")
            } else alert("Se puede agregar solo dos tipos")
        } else alert("Se debe agregar por lo menos un tipo")

    }

    return (

        <div className="form">
            <h3 className="titulo">Crea tu pokemon</h3>
            <form onSubmit={onSubmit}>



                <div className="labels">
                    <label className="perlabel" for="Nombre"> Nombre: </label>
                    <input
                        onChange={onInputChange}
                        id="Nombre"
                        name="Nombre"
                        type="text"
                        value={poke.Nombre}
                        required
                        className="perinput"
                    />
                    {errors.Nombre && <p className="errors">{errors.Nombre}</p>}

                    <label className="perlabel" htmlFor="">Vida: </label>
                    <input
                        onChange={onInputChange}
                        name="Vida"
                        type="number"
                        value={poke.Vida}
                        className="perinput"
                    />
                    

                    <label className="perlabel" htmlFor="">Ataque: </label>
                    <input
                        onChange={onInputChange}
                        name="Ataque"
                        type="number"
                        value={poke.Ataque}
                        className="perinput"
                    />
                   

                    <label className="perlabel" htmlFor="">Defensa: </label>
                    <input
                        onChange={onInputChange}
                        name="Defensa"
                        type="number"
                        value={poke.Defensa}
                        className="perinput"
                    />
                    

                    <label className="perlabel" htmlFor="">Velocidad: </label>
                    <input
                        onChange={onInputChange}
                        name="Velocidad"
                        type="number"
                        value={poke.Velocidad}
                        className="perinput"
                    />
                    

                    <label className="perlabel" htmlFor="">Altura: </label>
                    <input
                        onChange={onInputChange}
                        name="Altura"
                        type="number"
                        value={poke.Altura}
                        className="perinput"
                    />
                    

                    <label className="perlabel" htmlFor="">Peso: </label>
                    <input
                        onChange={onInputChange}
                        name="Peso"
                        type="number"
                        value={poke.Peso}
                        className="perinput"
                    />
                    

                    <label className="perlabel" htmlFor="">Imagen(URL): </label>
                    <input
                        onChange={onInputChange}
                        name="Imagen"
                        type="text"
                        value={poke.Imagen}
                        className="perinput"
                    />

                </div>

                <div className="perlabel">
                    <select onChange={handleSelect}>
                        <option>Tipo</option>
                        {tipos.map((value) => (
                            <option value={value.Nombre}>{value.Nombre}</option>
                        ))}

                    </select>


                    <ul>
                        <li className="typefont">
                            {poke?.poketipos?.map((val) => val + " , ")}
                        </li>
                    </ul>


                </div>

                <div>
                    <Link className="boton1" to="/pokemons">
                        <button type="submit" className="boton1">Volver</button>
                    </Link>
                    <button className="boton2" type="submit">Crear pokemon</button>
                </div>

            </form>
        </div>
    )
}