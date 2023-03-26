const express = require('express')
const mongoose = require('mongoose');
const startdb = require('./Database/db')
var cors = require('cors')
const app = express()
const port = 5000
//cors permission
app.use(cors())
//starting database
startdb()
//json 
app.use(express.json())
//routes
app.use('/api/auth',require('./routes/Auth'))
app.use('/api/UserInfo',require('./routes/UserInformation'))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
