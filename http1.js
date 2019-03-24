const express = require('express');
const compression = require('compression');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(compression({level: 6}));
app.use('/', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send('HELLO EVERYONE!');
});


app.listen(3000, () => {
  console.log('Listening on port 3000!');
})