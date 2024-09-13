exports.hello=(req,res)=>{
   return  res.send('Hello World')
}

exports.create=(req,res,next)=>{
    res.json(req.body)

}

exports.listAll=(req,res,next)=>{
    res.json({message:'List all users'})
}

exports.getUser=(req,res,next)=>{
    res.json({message:'Get user by id'})
}

exports.update=(req,res,next)=>{
   res.json({message:'Update user by id'})
}

exports.delete=(req,res,next)=>{
    res.json({message:'Delete user by id'})
}