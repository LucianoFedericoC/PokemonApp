const { Pokemon, Tipo } = require("../db")
const axios = require("axios")
const { Op } = require('sequelize');

//Traigo a todos los pokemons de la api
const getpokeapi = async () => {
    try {
        let pokeapi = await axios.get("https://pokeapi.co/api/v2/pokemon" + "?limit=40")

        let map = await Promise.all(pokeapi.data.results.map(async pokemon => {
            let url = await axios.get(pokemon.url)
            return {
                ID: url.data.id,
                Nombre: url.data.name,
                Vida: url.data.stats.find((value) => value.stat.name === "hp").base_stat,
                Ataque: url.data.stats.find((value) => value.stat.name === "attack").base_stat,
                Defensa: url.data.stats.find((value) => value.stat.name === "defense").base_stat,
                Velocidad: url.data.stats.find((value) => value.stat.name === "speed").base_stat,
                Altura: url.data.height,
                Peso: url.data.weight,
                Imagen: url.data.sprites.other.home.front_default,
                Tipo: url.data.types.map(t => t.type.name)
            }

        }))
        return map

    } catch (error) {
        return (error)
    }
}

//Traigo a todos los pokemons de mi base de datos
const getpokedb = async () => {
    let pokedb = await Pokemon.findAll({
        include: Tipo
    })
    return pokedb

}

//Busco por id o por nombre en la api
const findpokeapi = async (atributte) => {
    let respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${atributte}`)
    if (respuesta) {
        let pokemon = {
            ID: respuesta.data.id,
            Nombre: respuesta.data.name,
            Vida: respuesta.data.stats.find((value) => value.stat.name === "hp").base_stat,
            Ataque: respuesta.data.stats.find((value) => value.stat.name === "attack").base_stat,
            Defensa: respuesta.data.stats.find((value) => value.stat.name === "defense").base_stat,
            Velocidad: respuesta.data.stats.find((value) => value.stat.name === "speed").base_stat,
            Altura: respuesta.data.height,
            Peso: respuesta.data.weight,
            Imagen: respuesta.data.sprites.other.home.front_default,
            tipos: respuesta.data.types.map(t => t.type.name)
        }
        return pokemon
    }
    return false
}

//Busco por nombre en mi base de datos
const findpokedb = async (name) => {

    let respuesta = await Pokemon.findOne({
        where: {
            Nombre: {
                [Op.like]: `%${name}`
            }
        },
        include: Tipo
    })

    if (respuesta) return respuesta
}

const borrar = async (id) => {
try {
    await Pokemon.destroy({
        where:{
            ID: id
        }
    })
    return {succes: true, message:"Pokemon eliminado"}
} catch (error) {
    return {succes: false, message: error.message}
}
}
module.exports = {
    getpokeapi,
    getpokedb,
    findpokeapi,
    findpokedb,
    borrar
}