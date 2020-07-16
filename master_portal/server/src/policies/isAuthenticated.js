const passport = require('passport')

module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (err, user) {
    if (err || !user) {
      res.status(403).send({
        error: 'Bạn không có quyền truy cập vào tài nguyên này'
      })
    } else {
      req.user = user
      next()
    }
  })(req, res, next)
}