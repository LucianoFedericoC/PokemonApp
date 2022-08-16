import axios from "axios";
const URL = "http://localhost:3001"

export function allpokemons() {

    return async function (dispatch) {

        let poke = await axios.get(`${URL}/pokemons`)


        dispatch({
            type: "ALL_POKEMONS",
            payload: poke.data
        })
    }
}

export function namesearch(name) {

    return async function (dispatch) {

        try {
            let poke = await axios.get(`${URL}/pokemons?name=${name}`)

            dispatch({
                type: "NAME_SEARCH",
                payload: poke.data
            })
        } catch (error) {
            alert("Pokemon no encontrado")
        }
    }
}

export function details(id) {

    return async function (dispatch) {

        try {
            let poke = await axios.get(`${URL}/pokemons/${id}`)

            return dispatch({
                type: "DETAILS",
                payload: poke.data
            })
        } catch (error) {
            return alert(error)
        }
    }
}

export function types() {

    return async function (dispatch) {

        let poke = await axios.get(`${URL}/types`)

        return dispatch({
            type: "TYPES",
            payload: poke.data
        })
    }
}

export function pokepost(payload) {

    return async function () {
        const respuesta = await axios.post(`${URL}/pokemons/`, payload)
        return respuesta
    }
}

export function filtrodeataque(payload) {
    return {
        type: "ATTACK_FILTER",
        payload
    }
}

export function filtrodeCreados(payload) {
    return {
        type: "CREATED_FILTER",
        payload
    };
}

export function filtroportipo(payload) {
    return {
        type: "TYPE_FILTER",
        payload,
    };
}

export function Orden(orden) {
    return {
        type: "ORDEN",
        payload: orden
    }
}