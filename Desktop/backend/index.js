require('dotenv').config()

const express = require('express')  //er have acquire express
 const app = express()  //here app we have build powerful method type thing which we can use with any thing ex Math. somethings as we use app.
const port = 3002

 app.get('/', (req, res) => {  // here we using get as in express get something by req and send hello world as res respond ans / is a home route  
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('harshittwittercom')  //as we have make our response 
})
app.get('/youtube',(req,res) => {
  res.send('helloo dosto')  //as we have make our response 
})

app.get('/login',(req,res) => {
    res.send('<h1>please sing the song</h1>')  //as we have make our response 
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)   //this is listen as in express we get both the power listen and get
})

// as we have made a server that is listening in / and / twitter