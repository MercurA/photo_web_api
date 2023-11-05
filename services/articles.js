module.exports = {
    getAllArticles: () => {
        return `
            query {
                allArticles {
                    nodes {
                        articleId
                        middleimg
                        p1
                        p2
                    }
                }
            }
        `
    }
}