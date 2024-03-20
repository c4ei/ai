// npm init -y 
// npm install express cors
// node server.js

const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());


app.use('/', express.static( path.join(__dirname, 'front-end/build') ))
app.get('/', function(req,resp){
  resp.sendFile( path.join(__dirname, 'front-end/build/index.html') )
}) 

app.use('*', express.static( path.join(__dirname, 'front-end/build') ))

app.listen(3013, function () {
  console.log('listening on 3013')
}); 
