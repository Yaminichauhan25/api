water=(req,res)=>{
    var a=req.body.a;
    var n=a.length;
    let c=0;
    for(let i = 1; i < n - 1; i++)
    {
        var left = a[i];
        for(let j = 0; j < i; j++)
        {
            left = Math.max(left, a[j]);
        }

        var right = a[i];
        for(let j = i + 1; j < n; j++)
        {
            right = Math.max(right, a[j]);
        }
        c += Math.min(left, right) - a[i];
    }
    res.send({c});

}
module.exports=water;