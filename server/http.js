const express = require('express')
const cors = require('cors')

const {logger} = require('../utils/logger')

module.exports = () => {
    const app = express()

    app.use(express.json())
    app.use(cors())
    app.use(express.urlencoded({extended: true}))

    app.use(logger)
    app.get('/health', (req, res) => {
        res.send('OK')
    })
    
    return {
        start: () => {
            app.listen(3001,() => console.log('Server is up on http://localhost:3001'))
        }
    }
   
}