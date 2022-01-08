function permiso(req,res,next){
    if(res.locals.user.rol==="Admin"){
        next()
    }else{
        res.render("extras/denegado")
        
    }
      
}

module.exports= permiso