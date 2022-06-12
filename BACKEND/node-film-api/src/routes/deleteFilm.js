const { Film } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
    app.delete('/api/films/:id', auth, (req, res) => {
        Film.findByPk(req.params.id).then(film => {
            if (film === null) {
                const message = `Le film demandé n'existe pas. Réessayez avec un autre identifiant`;
                return res.status(404).json({ messsage })
            }

            const filmDeleted = film;
            return Film.destroy({
                where: { id: film.id }
            })
                .then(_ => {
                    const message = `Le film avec l'identifiant n°${filmDeleted.id} a bien été supprimé.`
                    res.json({ message, data: filmDeleted })
                })
        })
            .catch(error => {
                const message = `Le film n'a pas pu être supprimé. Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}