const db = require('../../data/db-config')
const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts');
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id',id)
}

const create = account => {
  // DO YOUR MAGIC
  return db('account').insert(account)

}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  return db('account').where('id',id).update(account)
}

const deleteById = id => {
  // DO YOUR MAGIC
  return db('account').where('id',id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
