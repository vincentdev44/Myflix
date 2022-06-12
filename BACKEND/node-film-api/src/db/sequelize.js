const { Sequelize, DataTypes } = require('sequelize')
const FilmModel = require('../models/film')
const UserModel = require('../models/user')
const films = require('./mock-film')
const bcrypt = require('bcrypt')

const sequelize = new Sequelize('myflix', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT-2',
    },
    logging: false
})

const Film = FilmModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)


const initDb = () => {
    return sequelize.sync({ force: true }).then(_ => {
        films.map(film => {
            Film.create({
                name: film.name,
                description: film.description,
                picture: film.picture,
                video: film.video,
                created: film.created,
                types: film.types
            }).then(film => console.log(film.toJSON()))
        })

        bcrypt.hash('myflix', 10)
            .then(hash => User.create({ username: 'myflix', password: hash }))
            .then(user => console.log(user.toJSON()))

        console.log('La base de donnée a bien été initialisée !')
    })
}

module.exports = {
    initDb, Film, User
}