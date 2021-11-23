const express = require('express')
const app = express()
const port = 4000
var cors = require('cors')


var readFile =  function() {

  const fs = require('fs');
  if (fs.existsSync('ChatHistory.json')) {

    let messages = JSON.parse(fs.readFileSync('ChatHistory.json'));

    return messages;

  }
}

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/messages', (req, res) => {
  console.log("returning messages");
  res.send(readFile());

})

app.get('/message/:id', (req, res) => {
  const id = req.params['id'];
  console.log("returning message", id);
  res.send(messages[id])
})

app.post('/messages', (req, res) => {

  let messages1 = readFile();

  if (!messages1) messages1 = [];
  const message = req.body;
  message.id = messages1.length;
  messages1.push(message);

  const fs = require('fs');
  fs.writeFile('ChatHistory.json', JSON.stringify(messages1), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  res.send(message)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})