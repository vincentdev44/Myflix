const { Film } = require('../db/sequelize')

module.exports = (app) => {
  app.post('/api/films', (req, res) => {
    Film.create(req.body)
      .then(film => {
        const message = `Le film ${req.body.name} a bien été créé.`
        res.json({ message, data: film })
      })
  })
}