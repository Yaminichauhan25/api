const { json } = require("express/lib/response");
add=(req, res)=> {
	let dat =req.body;
	res.send({ addition: dat.a + dat.b });
};

clz=(req, res)=> {
	let dat =req.body;
	res.send({"cosine of number is":Math.clz32(dat.n) });
};

cos=(req, res)=> {
	let dat =req.body;
	res.send({"cosine of number is":Math.cos(dat.n) });
};

divide=(req, res)=>{
	let dat =req.body;
	res.send({ divide: dat.a / dat.b });
};

fibonacci=(req, res)=> {
    var arr=new Array();
    var a=1;
    var b=1;
    function fib(n){
        if (n!= 0) {
            arr.push(a);
            sum = a + b;
            a = b;
            b = sum;
            n--;
            fib(n)
    }
    }
    fib(req.body.n);
    res.send({"fibonacci series is":arr});
}

find=(req, res)=> {
	let dat =req.body;
	//res.send({dat});
    let n=dat.n
    var arr=new Array(req.body.array)
    //var l=json.parseInt(arr);
    var arr1=arr[0];
    //console.log(arr1[1]);
    var missing = [];
    for ( var i = 0; i < n; i++ ) {
        if (arr1.indexOf(i) == -1)
        {
            missing.push(i);
	    }
    }
    res.send({"missing element":missing})

};

multiplication=(req, res)=> {
	let dat =req.body;
	res.send({ multiplication: dat.a * dat.b });
};

sine=(req, res)=> {
	let dat =req.body;
	res.send({"cosine of number is":Math.sin(dat.n) });
};

subtract=(req, res)=> {
	let dat =req.body;
	res.send({ sub: dat.a - dat.b });
};

xy=(req, res)=> {
	let dat =req.body;
    let a=dat.a;
    let b=dat.b;
	res.send({"a raise to power y":Math.pow(a,b)});
};

module.exports={add,clz,cos,divide,fibonacci,find,multiplication,sine,subtract,xy};