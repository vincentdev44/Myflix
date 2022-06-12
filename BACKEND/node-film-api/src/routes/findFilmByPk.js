const { Film } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
    app.get('/api/films/:id', auth, (req, res) => {
        Film.findByPk(req.params.id)
            .then(film => {
                if (film === null) {
                    const message = `Le film demandé n'existe pas. Réessayez avec un autre identifiant`;
                    return res.status(404).json({ messsage })
                }
                const message = 'Un film a bien été trouvé.'
                res.json({ message, data: film })
            })
            .catch(error => {
                const message = `Le film n'a pas pu être récupéré. Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}