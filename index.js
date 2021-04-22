const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/', function(req,res){
    res.render('index.ejs')
})

app.listen(process.env.PORT || 5000);