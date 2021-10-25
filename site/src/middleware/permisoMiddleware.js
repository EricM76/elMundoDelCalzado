function permiso(req,res,next){
    if(req.session.usuarioLogueado && req.session.usuarioLogueado.rol === "admin"){
        next()
    }else if(req.cookies.recordame && req.cookies.recordame.rol === "admin"){
        next()
    }else{
        res.redirect("/../../informacion/denegado")
    }
      
}

module.exports= permiso