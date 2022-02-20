const express=require('express');
const process=require('process');
const main = require('./main');
const dic = require('./dic');
const water = require('./water');
const app=express();
app.use(express.json());

app.post('/findmissingnumber',main.find);
app.post('/fibonacci',main.fibonacci);
app.post('/add',main.add);
app.post('/clz',main.clz);
app.post('/cos',main.cos);
app.post('/divide',main.divide);
app.post('/multiplication',main.multiplication);
app.post('/sin',main.sine);
app.post('/subtract',main.subtract);
app.post('/xraisetoy',main.xy);
app.post('/dictionary',dic);
app.post('/waterlevel',water)

app.listen(process.argv[2],()=>{
	console.log("server is running on",process.argv[2])});