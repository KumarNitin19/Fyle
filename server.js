const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/fyle'));
app.get('/*', function(req,res){
    res.sendFile('index.html',{root:'dist/fyle/'})
})

app.listen(process.env.PORT || 9000)