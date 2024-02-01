export const redirectHome= (req,res,next)=>{
        if(req.session.userId){
            res.redirect("/admin");
        }else{
            next();
        }
}
export const redirectLogin= (req,res,next)=>{
    console.log(req.session.cookie._expires);
    if(!req.session.userId){
        res.redirect("/admin/login");
    }else{
        next();
    }
}
