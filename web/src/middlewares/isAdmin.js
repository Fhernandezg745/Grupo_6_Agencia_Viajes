module.exports = (req, res, next) => {
    if (req.session.user && req.session.user.isAdmin !== true) {
        return res.redirect('/')
    }
    
    return next()
}