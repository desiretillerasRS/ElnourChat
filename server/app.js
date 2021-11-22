const express = require('express')
const app = express()
const port = 4000
var cors = require('cors')

const messages = [];

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
  res.send('Hello World!')
})

app.get('/messages', (req, res) => {
    console.log("returning messages");
  res.send(messages)
})

app.get('/message/:id', (req, res) => {
    const id = req.params['id'];
    console.log("returning message", id);
  res.send(messages[id])
})

app.post('/messages', (req, res) => {
    const id = req.params['id'];
    const message = req.body;
    message.id = messages.length;
    messages.push(message);
  res.send(message)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})