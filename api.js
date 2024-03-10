// const express = require('express')
// const app = express()
// var cors = require('cors')
// var app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())
const PORT = process.env.PORT || 3020;

app.get('/',(req,res)=>{
  res.send('Alooo Beirut')
})

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});