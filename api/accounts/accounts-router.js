const router = require('express').Router()
const Accounts = require('./accounts-model')

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

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message:err.message,
    stack: err.stack
  })

})

module.exports = router;
