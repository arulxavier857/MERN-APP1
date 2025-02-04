const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// comment
//config PORT and Start Server
const PORT = 9000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

