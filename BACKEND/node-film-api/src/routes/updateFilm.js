const { Film } = require('../db/sequelize')

module.exports = (app) => {
    app.put('/api/films/:id', (req, res) => {
        const id = req.params.id
        Film.update(req.body, {
            where: { id: id }
        })
            .then(_ => {
                Film.findByPk(id).then(film => {
                    const message = `Le film ${film.name} a bien été modifié.`
                    res.json({ message, data: film })
                })
            })
    })
}