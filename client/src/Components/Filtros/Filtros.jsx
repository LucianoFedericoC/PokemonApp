import React from "react";
import { useDispatch } from "react-redux";
import { filtrodeataque, filtrodeCreados, filtroportipo, Orden } from "../../Actions";
import "../Filtros/Filtros.css"

function Filtros() {
    const dispatch = useDispatch()

    function handleatackfilter(valor) {
        dispatch(filtrodeataque(valor.target.value));
    }

    function handleCreatedfilter(valor) {
        dispatch(filtrodeCreados(valor.target.value));
    }

    function handleTypefilter(valor) {
        dispatch(filtroportipo(valor.target.value));
    }

    function onSelectsChange(valor) {
        dispatch(Orden(valor.target.value));
    }

  
    return (

        <div className="cont">

            <div className="filtro">
                <select onChange={handleatackfilter} className="">
                    <option value="Ataque"> Ataque </option>
                    <option value="Mas Fuerte">Mas Fuerte</option>
                    <option value="Menos Fuerte">Menos Fuerte</option>
                </select>

                <select onChange={handleCreatedfilter}>
                    <option value="Todos"> Todos </option>
                    <option value="Creados"> Creados </option>
                    <option value="Existentes"> Existentes </option>
                </select>

                <select onChange={handleTypefilter}>
                    <option value="type"> Tipo </option>
                    <option value="normal"> Normal </option>
                    <option value="fighting"> Fighting </option>
                    <option value="flying"> Flying </option>
                    <option value="poison"> Poison </option>
                    <option value="ground"> Ground </option>
                    <option value="rock"> Rock </option>
                    <option value="bug"> Bug </option>
                    <option value="ghost"> Ghost </option>
                    <option value="steel"> Steel </option>
                    <option value="fire"> Fire </option>
                    <option value="water"> Water </option>
                    <option value="grass"> Grass </option>
                    <option value="electric"> Electric </option>
                    <option value="psychic"> Psychic </option>
                    <option value="ice"> Ice </option>
                    <option value="dragon"> Dragon </option>
                    <option value="dark"> Dark </option>
                    <option value="fairy"> Fairy </option>
                    <option value="unknown"> Unknown </option>
                    <option value="shadow"> Shadow </option>
                </select>
            </div>

            <div className="orden">
                <select name="select" onChange={onSelectsChange}>
                    <option value="Orden">Orden</option>
                    <option value="ASCENDENTE">Ascendente</option>
                    <option value="DESCENDENTE">Descendente</option>
                </select>
            </div>

        </div>


    )

}

export default Filtros