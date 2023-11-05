const { getAllArticles } = require("../services/articles")

module.exports = {
    handleAllArticles: (req, res, next) => {
        return getAllArticles()
    }
}