var express = require("express");
var router = express.Router();
const {Activity} = require('../db');
const {Country} = require("../db");


router.post('/', async (req, res) => {
    const { nombre, dificultad, duracion, temporada, paises } = req.body;
    let newActivity = await Activity.create({
            nombre,
            dificultad,
            duracion,
            temporada,
        })

    let CountriesDB = await Country.findAll({
        where:{nombre:paises}
    })

    newActivity.addCountry(CountriesDB)
    res.send('Actividad creada')
});



module.exports = router;