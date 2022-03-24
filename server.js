const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
  origin: 'http://localhost:8080'
}

// Middleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// Routers
const router = require('./routes/productRouter')

app.use('/api/products', router)

// Testing API
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

// Port
const PORT = process.env.PORT || 8080

// Server
app.listen(PORT, () => {
  console.log(`This port is ${PORT}`);
})
