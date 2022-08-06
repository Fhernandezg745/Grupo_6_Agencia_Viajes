const isAdmin = (req, res, next) => {
    if (!req.session.user.position == 'Admin') {
        return res.redirect('/')
    }
    return next()
}
module.exports = isAdmin