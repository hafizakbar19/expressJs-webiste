const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render("index");
});

// app.use(function(req,res,next){
//     console.log('hello from middleware 1');
//     next()
// })

// app.use(function(req,res,next){
//     console.log('hello from middleware 2');
//     next()
// })

app.get('/:username',function(req,res){
    res.send(`hello from ${req.params.username}`)
});

app.listen(3000);