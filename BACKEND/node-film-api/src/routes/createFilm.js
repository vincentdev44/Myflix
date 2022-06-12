const { Film } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')


module.exports = (app) => {
  app.post('/api/films', auth, (req, res) => {
    Film.create(req.body)
      .then(film => {
        const message = `Le film ${req.body.name} a bien été créé.`
        res.json({ message, data: film })
      })
      .catch(error => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        if (error instanceof UniqueConstraintError) {
          return res.status(404).json({ message: error.message, data: error })
        }
        const message = `Le film n'\'a pas pu être ajouté. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}