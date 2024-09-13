

module.exports=app=>{
    const routerController=require('../controllers/routeController')
    const router =require('express').Router
    
    app.get('/',routerController.hello)
    app.post('/create',routerController.create)
    app.get('/list',routerController.listAll)
    app.get('/user/:id',routerController.getUser)
    app.put('/user/:id',routerController.update)
    app.delete('/user/:id',routerController.delete)
     


}