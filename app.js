const express = require('express')
const app = express()
const port = 3001
const receitas = require('./receitas.json')

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/receitas', (req, res) => res.json(receitas))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))