// Middleware de Authenticação
function Auth(req, res, next){
    // O usuário precisa possuir uma sessão no site
    if(req.session.user != undefined){
        // Permite a continuação da requisição
        next();
    } else{
        res.render("login");
    }
}

export default Auth;