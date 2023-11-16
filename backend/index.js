const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const authRouter = require('./routes/auth')

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Database connected successfully!')
  })

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', authRouter)

app.listen(process.env.PORT, () => console.log('Server has been connected successfully'))

