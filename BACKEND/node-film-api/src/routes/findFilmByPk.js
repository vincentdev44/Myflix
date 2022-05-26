const { Film } = require('../db/sequelize')

module.exports = (app) => {
    app.get('/api/films/:id', (req, res) => {
        Film.findByPk(req.params.id)
            .then(film => {
                const message = 'Un film a bien été trouvé.'
                res.json({ message, data: film })
            })
    })
}