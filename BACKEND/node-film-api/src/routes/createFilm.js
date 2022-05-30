const { Film } = require('../db/sequelize')

module.exports = (app) => {
  app.post('/api/films', (req, res) => {
    Film.create(req.body)
      .then(film => {
        const message = `Le film ${req.body.name} a bien été créé.`
        res.json({ message, data: film })
      })
      .catch(error => {
        const message = `Le film n'\'a pas pu être ajouté. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}