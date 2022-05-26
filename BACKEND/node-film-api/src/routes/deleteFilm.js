const { Film } = require('../db/sequelize')

module.exports = (app) => {
    app.delete('/api/films/:id', (req, res) => {
        Film.findByPk(req.params.id).then(film => {
            const filmDeleted = pokemon;
            Film.destroy({
                where: { id: film.id }
            })
                .then(_ => {
                    const message = `Le film avec l'identifiant n°${filmDeleted.id} a bien été supprimé.`
                    res.json({ message, data: filmDeleted })
                })
        })
    })
}