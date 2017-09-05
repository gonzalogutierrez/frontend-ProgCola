const express= require('express');
const app= express();
const path= require('path');
app.use(express.static(__dirname+'/dist'));
app.use(express.static(__dirname));

app.listen(process.env.PORT || 8080);

//es para que routee angular
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

console.log("Iniciado :D"); 