const router = require('express').Router()
const Accounts = require('./accounts-model');


router.get('/', async(req, res, next) => {
  // DO YOUR MAGIC
 try{
   const accounts = await Accounts.getAll()
   res.json(accounts)
 }
 catch(err){
   next(err)
 }
})

router.get('/:id', async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    const account = await Accounts.getById(req.params.id);
    res.json(account)
  }
  catch(err){
    next(err)
  }
})

router.post('/', async(req, res, next) => {
  // DO YOUR MAGIC
 
  try{
    const newAccount = await Accounts.create(req.body)
    res.json(newAccount)
  }
  catch(err){
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const updateAccount = await Accounts.updateById(req.params.id,req.body)
    res.json(updateAccount)
  }
  catch(err){
    next(err)
  }
});

router.delete('/:id', async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    const deletedAccount = await Accounts.deleteById(req.params.id)
    res.json(deletedAccount)
  }
  catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message:err.message,
    stack: err.stack
  })

})

module.exports = router;
