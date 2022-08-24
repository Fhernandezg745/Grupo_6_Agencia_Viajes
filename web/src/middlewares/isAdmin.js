module.exports = (req, res, next) => {
    if (req.session.user && req.session.user.position !== 'admin') {
        return res.redirect('/')
    }
    
    return next()
}