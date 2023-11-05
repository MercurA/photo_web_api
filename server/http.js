const express = require('express')
const cors = require('cors')
const {logger} = require('../utils/logger')
const {gql,postgraphile} = require('postgraphile')

module.exports = () => {
    const app = express()

    app.use(express.json())
    app.use(cors())
    app.use(express.urlencoded({extended: true}))

    app.use(logger)
    app.use(postgraphile('postgres://:@localhost:5432/photo_blog',null,{
        watchPg:true,
        graphiql: true,
        enhanceGraphiql: true
    }))
    app.get('/health', (req, res) => {
        res.send('OK')
    })
    
    app.get('/articles', async (req, res) => {
        const query = gql`
            query getAllArticles{
                allArticles {
                    nodes {
                      articleId
                      middleimg
                      p1
                    }
                  }
            }
        `
       
          res.send(query)
    })

    return {
        start: () => {
            app.listen(3001,() => console.log('Server is up on http://localhost:3001'))
        }
    }
   
}