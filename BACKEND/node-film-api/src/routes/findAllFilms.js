const { Film } = require('../db/sequelize')

module.exports = (app) => {
    app.get('/api/films', (req, res) => {
        Film.findAll()
            .then(films => {
                const message = 'La liste des films a bien été récupérée.'
                res.json({ message, data: films })
            })
            .catch(error => {
                const message = `La liste des films  n'à pas été récupérée. Réessayez dans quelques instants.`
                res.status(500).json({ messsage, date: error })
            })
    })
}