dic=(req,res)=>{
    var a=req.body.a;
    var b=req.body.b;
    b.sort(function(a,b){
        return b.localeCompare(a);
    });
    res.send({"dic":b});
}

    

module.exports=dic;