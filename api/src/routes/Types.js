const { Router } = require('express');
const { Tipo } = require('../db')
const axios = require ("axios")

const router = Router();


//Me traigo todos los tipos
router.get("/types", async (req, res) => {

    try {

        let respuestadb = await Tipo.findAll()

        if (!respuestadb.length) {
            let respuesta = await axios.get("https://pokeapi.co/api/v2/type")
            respuestadb = respuesta.data.results.map((value) => ({
                Nombre: value.name
            }))

            await Tipo.bulkCreate(respuestadb)

            respuestadb = await Tipo.findAll()

        }

        res.status(200).json(respuestadb)

    } catch (error) {
        res.status(400).send("No se pudieron cargar los Tipos")
    }

})



module.exports = router;