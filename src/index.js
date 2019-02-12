const express = require('express')
const path = require('path')

const app = express()
// app.use(express.static(path.join(__dirname, 'img')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'img/gato.gif'))
})

app.listen(3003, () => { 
    console.log('running port '+ 3003)
})