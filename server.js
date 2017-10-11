const express = require('express');
const path = require('path');
const port = 4000;
const app = express();

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];

app.set('view engine','jade');
app.set('views', './templates')

app.use('/image', express.static(path.join(__dirname, 'app/image')))
app.use('/css', express.static(path.join(__dirname, 'app/css')))
app.use('/js', express.static(path.join(__dirname, 'app/js')))

app.get('/',(req,res) =>{
  res.render('./index')
})

/* app.get('/cards', (req, res) => {
  res.render('card', {prompt:"wtf",colors})
}) */

app.listen(port,() =>{
  console.log('Application running on port 3000')
});
