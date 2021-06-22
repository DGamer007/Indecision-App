const express = require('express')
const path = require('path')

const app = express()
const publicDir = path.join(__dirname, '../public')
const port = process.env.PORT || 3000

app.use(express.static(publicDir))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'))
})

app.listen(port, () => {
    console.log('Server is up!...')
})