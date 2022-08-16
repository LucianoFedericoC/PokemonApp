const { Router } = require('express');
const { Pokemon, Tipo } = require('../db')
const axios = require("axios");
const { Op } = require('sequelize');
const { v4: uuidv4, validate: uuidValidate } = require('uuid')
const { getpokeapi, getpokedb, findpokeapi, findpokedb, borrar } = require("../Controller/Functions")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//Ejecuto los llamados de las funciones get
const allpokemons = async () => {
    let pokeapi = await getpokeapi()

    let pokedb = await getpokedb()

    let result = [...pokeapi, ...pokedb]

    return result
}

const router = Router();

//Get a todos los pokemons o por nombre (api o db)
router.get("/pokemons", async (req, res) => {

    try {

        let { name } = req.query

        if (name) {

            let pokedb = await findpokedb(name)
            if (pokedb) return res.json(pokedb)

            let pokeapi = await findpokeapi(name)
            if (pokeapi) return res.json(pokeapi)

        } else {

            let pokelist = await allpokemons()
            res.status(200).json(pokelist)

        }
    } catch (error) {

        res.status(404).send("Pokemon no encontrado")
    }
})

//Get a todos los pokemons por id
router.get("/pokemons/:id", async (req, res) => {

    try {

        let { id } = req.params

        if (uuidValidate(id)) {
            let pokedb = await Pokemon.findByPk(id, {
                include: Tipo
            })

            res.status(200).json(pokedb)
        } else {

            let pokeapi = await findpokeapi(id)
            res.status(200).json(pokeapi)

        }

    } catch (error) {
        res.status(404).send("Pokemon no encontrado")
    }
})

//Post pokemons para guardar en base de datos
router.post("/pokemons", async (req, res) => {


    try {
        let { Nombre, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Imagen, poketipos } = req.body
        if (!Nombre) return res.json({ Advertencia: "El nombre es obligatorio" })
        let nuevopokemon = await Pokemon.create({
            Nombre,
            Vida,
            Ataque,
            Defensa,
            Velocidad,
            Altura,
            Peso,
            Imagen
        })

        let pokedb = await Tipo.findAll({
            where: {
                Nombre: poketipos
            }
        })
        nuevopokemon.addTipo(pokedb)
        res.status(200).send("Pokemon creado")

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

router.delete("/pokemons/:id", async (req, res) => {
try {
    await borrar(req.params.id)
    res.status(200).json("Pokemon eliminado")
} catch (error) {
    res.status(500).json({message: error.message})
}


})

module.exports = router;
