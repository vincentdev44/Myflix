const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = 3000

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

sequelize.initDb()

// Ici nous placeserons nos futurs points de terminaison.
require('./src/routes/findAllFilms')(app)
require('./src/routes/findFilmByPk')(app)
require('./src/routes/createFilm')(app)
require('./src/routes/updateFilm')(app)
require('./src/routes/deleteFilm')(app)

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))