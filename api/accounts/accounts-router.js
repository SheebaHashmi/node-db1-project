const router = require('express').Router()
const Accounts = require('./accounts-model');
const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
} = require('./accounts-middleware')

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

router.get('/:id',checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  res.json(req.account)
})

router.post('/',checkAccountPayload,checkAccountNameUnique, async(req, res, next) => {
  // DO YOUR MAGIC
 
  try{
    const newAccount = await Accounts.create({"name":req.body.name.trim(),"budget":req.body.budget})
    res.status(201).json(newAccount)
  }
  catch(err){
    next(err)
  }
})

router.put('/:id',checkAccountPayload,checkAccountId,async (req, res, next) => {
  // DO YOUR MAGIC
  try{
   const updatedAccount = await Accounts.updateById(req.params.id,req.body)
    res.status(200).json(updatedAccount)
  }
  catch(err){
    next(err)
  }
});

router.delete('/:id',checkAccountId, async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    await Accounts.deleteById(req.params.id)
    res.json(req.account)
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
