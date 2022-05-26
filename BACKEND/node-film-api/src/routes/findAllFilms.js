const { Film } = require('../db/sequelize')

module.exports = (app) => {
    app.get('/api/films', (req, res) => {
        Film.findAll()
            .then(films => {
                const message = 'La liste des films a bien été récupérée.'
                res.json({ message, data: films })
            })
    })
}