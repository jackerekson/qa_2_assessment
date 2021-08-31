const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar({
    accessToken: 'e34fbddba1c0445782b033f1835ac83c',
    captureUncaught: true, 
    captureUnhandledRejections: true
})

const app = express()
app.use(express.json())

app.get('/',function(req,res) {
  try {
    res.sendFile(path.join(__dirname, '../tictacjs.html'));
  rollbar.info('html file served successcully.')
  } catch (err) {
    rollbar.critical(err)
  }
});


app.use('/css', express.static(path.join(__dirname,"../styles.css")));
app.use('/img', express.static(path.join(__dirname,"../tic_tac_toe.jpg")));

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})