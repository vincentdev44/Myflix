const { Sequelize, DataTypes } = require('sequelize')
const FilmModel = require('../models/film')
const films = require('./mock-film')

const sequelize = new Sequelize('MYFLIX', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT-2',
    },
    logging: false
})

const Pokemon = FilmModel(sequelize, DataTypes)

const initDb = () => {
    return sequelize.sync({ force: true }).then(_ => {
        films.map(film => {
            Film.create({
                name: film.name,
                description: film.description,
                picture: film.picture,
                video: film.video,
                created: film.created,
                types: film.types.join()
            }).then(film => console.log(film.toJSON()))
        })
        console.log('La base de donnée a bien été initialisée !')
    })
}

module.exports = {
    initDb, Film
}