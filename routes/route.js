

module.exports=app=>{
    const routerController=require('../controllers/routeController')
    const router =require('express').Router
    
    app.get('/',routerController.hello)
    app.post('/create',routerController.create)
     


}