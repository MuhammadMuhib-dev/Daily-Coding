

const express=require('express');
const app=express();

const healthcheck=require('./api');
app.get('/ping',healthcheck);

app.listen(3001);
console.log('Local Host is Ready at http://localhost:3001');