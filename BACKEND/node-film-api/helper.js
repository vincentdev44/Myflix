exports.success = (message, data) => {
    return { message, data }
}

exports.getUniqueId = (films) => {
    const filmsIds = films.map(film => film.id)
    const maxId = filmsIds.reduce((a,b) => Math.max(a, b))
    const uniqueId = maxId + 1
      
    return uniqueId
  }