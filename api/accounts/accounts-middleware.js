const Account = require('./accounts-model');
exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)

  try{
    if(!req.body.name || !req.body.budget){
      next({ message: "name and budget are required" })
    }
   
      else if(req.body.name.trim().length > 3 && req.body.name.trim.length < 100){
        next({ message: "name of account must be between 3 and 100" })
      }
      else if(typeof req.body.budget !== Number){
        next({ message: "budget of account must be a number" })
      }
      else if(req.body.budget < 0 || req.body.budget > 1000000){
        next({ message: "budget of account is too large or too small" })
      }
      req.account = req.body
    
    
  }
  catch{
    next({status:400})
  }
}

exports.checkAccountNameUnique = async(req, res, next) => {
  // DO YOUR MAGIC
  const { name } = await Account.getAll();
  if(name === req.body.name.trim()){
    next({status:400, message: "that name is taken" })
  }
  next();
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = await Account.getById(req.params.id)
  if(!id){
    next({status:404,message: "account not found"})
  }
  next()
}
