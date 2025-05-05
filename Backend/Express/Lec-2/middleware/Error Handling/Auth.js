const Auth = (req,res,next)=>{
    //authntication karna padega ki kya ye admin hi hai 
    //dummy code 
    const token = "ABCDEF";
    const Access = token === "ABCDEF" ? 1: 0;
    if(!Access){
        res.status(403).send("No permission");
    }
    next();
}
module.exports = {Auth};