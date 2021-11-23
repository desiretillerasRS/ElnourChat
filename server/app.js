const express = require('express')
const app = express()
const port = 4000
var cors = require('cors')


function readFile () {

    const fs = require('fs');
    fs.readFile('ChatHistory.json',
      // callback function that is called when reading file is done
      function(err, data) {       
          if (err) throw err;
          // data is a buffer containing file content
          console.log(data.toString('utf8'));
          return JSON.parse(data);
  });
    
}

const messages = [];

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
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

    const messages1 = readFile();
    const id = req.params['id'];
    const message = req.body;
    message.id = messages1.length;

  res.send(message)

  const fs = require('fs');
  fs.writeFile('ChatHistory.json', JSON.stringify(message), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})