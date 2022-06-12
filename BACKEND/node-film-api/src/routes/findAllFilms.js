const { Film } = require('../db/sequelize')
const { Op } = require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
    app.get('/api/films', auth, (req, res) => {
        if (req.query.name) {
            const name = req.query.name
            const limit = parseInt(req.query.limit) || 5

            if (name.lenght < 2) {
                const message = `Le terme de recherche doit contenir au moins 2 caractères.`
                return res.status(400).json({ message })
            }
            return Film.findAndCountAll({
                where: {
                    name: { // 'name' est la propriété du modèle film
                        [Op.like]: `%${name}%` // 'name' est le critère de la recherche
                    }
                },
                order: ['name'],
                limit: limit
            })
                .then(({ count, rows }) => {
                    const message = `Il y a ${count} films qui correspondent au terme de recherche ${name}.`
                    res.json({ message, data: rows })
                })
        } else {
            Film.findAll({ order: ['name'] })
                .then(films => {
                    const message = 'La liste des films a bien été récupérée.'
                    res.json({ message, data: films })
                })
                .catch(error => {
                    const message = `La liste des films  n'à pas été récupérée. Réessayez dans quelques instants.`
                    res.status(500).json({ messsage, date: error })
                })
        }
    })
}