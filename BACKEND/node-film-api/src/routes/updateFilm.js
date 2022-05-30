const { Film } = require('../db/sequelize')

module.exports = (app) => {
    app.put('/api/films/:id', (req, res) => {
        const id = req.params.id
        Film.update(req.body, {
            where: { id: id }
        })
            .then(_ => {
                return Film.findByPk(id).then(film => {
                    if (film === null) {
                        const message = `Le film demandé n'existe pas. Réessayez avec un autre identifiant`;
                        return res.status(404).json({ messsage })
                    }
                    const message = `Le film ${film.name} a bien été modifié.`
                    res.json({ message, data: film })
                })
            })
            .catch(error => {
                const message = `Le film n'a pas pu être modifié. Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}