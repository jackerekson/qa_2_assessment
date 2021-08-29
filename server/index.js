const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../tictacjs.html'));
});

app.use('/css', express.static(path.join(__dirname,"../styles.css")));
app.use('/img', express.static(path.join(__dirname,"../tic_tac_toe.jpg")));


const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})