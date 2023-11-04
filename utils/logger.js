exports.logger = (req, res, next) => {
    const log = `\x1b[32m${req.method}`
    const log2 = `\x1b[33m${req.hostname}${req.url}`
    console.log(log, log2)
    next()
}