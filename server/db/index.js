const config = require('../../knexfile').development
const db = require('knex')(config)

function simpleGet () {
  return db('table').select()
}

function updateThing (id, something) {
  return db('table')
    .where('id', id)
    .update({ [something]: something })
}

module.exports = {
  simpleGet,
  updateThing
}
