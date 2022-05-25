const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const { Sequelize, DataTypes } = require('sequelize')
const { success, getUniqueId } = require('./helper.js')
let films = require('./src/db/mock-film')
const FilmModel = require('./src/models/film')

const app = express()
const port = 3000

const sequelize = new Sequelize(
    'myflix',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
        dialiectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging: false
    }
)

sequelize.authenticate()
    .then(_ => console.log('La connexion à la base de données a bien été établie.'))
    .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))

const Film = FilmModel(sequelize, DataTypes)

sequelize.sync({ force: true })
    .then(_ => {
        console.log('La base de données "MYFLIX" a bien été synchronisée.')

        films.map(film => {
            Film.create({
                name: film.name,
                description: film.description,
                picture: film.picture,
                video: film.video,
                created: film.created,
                types: film.types.join()
            }).then(test => console.log(test.toJSON()))
        })
    })

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello, Express 👋 !'))

app.get('/api/films', (req, res) => {
    const message = 'La liste des films a bien été récupérée.'
    res.json(success(message, films))
})

app.get('/api/films/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const film = films.find(film => film.id === id)
    const message = "Un film à été trouvé."
    res.json(success(message, film))
})

app.post('/api/films', (req, res) => {
    const id = getUniqueId(films)
    const filmCreated = { ...req.body, ...{ id: id } }
    films.push(filmCreated)
    const message = `Le film ${filmCreated.name} a bien été crée.`
    res.json(success(message, filmCreated))
})

app.put('/api/films/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const filmUpdated = { ...req.body, id: id }
    films = films.map(film => {
        return film.id === id ? filmUpdated : film
    })
    const message = `Le film ${filmUpdated.name} a bien été modifié.`
    res.json(success(message, filmUpdated))
})

app.delete('/api/films/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const filmDeleted = films.find(film => film.id === id)
    films = films.filter(film => film.id !== id)
    const message = `Le film ${filmDeleted.name} a bien été supprimé.`
    res.json(success(message, filmDeleted))
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))