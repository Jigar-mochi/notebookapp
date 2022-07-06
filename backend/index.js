const connectmongo = require('./db');
connectmongo();
const express = require('express')

const app = express()
const port = 3001

// app.get('/', (req, res) => {
//   res.send('Hello jigarbhai')
// })
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})