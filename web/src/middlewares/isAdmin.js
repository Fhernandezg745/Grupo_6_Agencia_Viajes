const isAdmin = (req, res, next) => {
    if (!req.session.user.position == 'admin') {
        return res.redirect('/')
    }
    return next()
}
module.exports = isAdmin