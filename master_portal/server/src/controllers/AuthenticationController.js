const {Account} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
    async register (req, res) {
      try {
        const user = await Account.create(req.body)
        const userJson = user.toJSON()
        res.send({
          user: userJson,
          token: jwtSignUser(userJson)
        })
      } catch (err) {
        res.status(400).send({
          error: 'Tài khoản email đã được sử dụng ' + err
        })
      }
    },

    async login (req, res) {
      try {
        const {email, password} = req.body
        const user = await Account.findOne({       
          where: {
            email: email
          }
        })
        
        if (!user) {
          return res.status(403).send({
            error: 'Thông tin đăng nhập không chính xác'
          })
        }
  
        const isPasswordValid = await user.comparePassword(password)
        if (!isPasswordValid) {
          return res.status(403).send({
            error: 'Thông tin đăng nhập không chính xác !'
          })
        }
       
        const userJson = user.toJSON();
        res.send({
          user:userJson,
          token: jwtSignUser(userJson)
        })
      } catch (err) { 
        res.status(500).send({                   
          error: 'xãy ra lỗi trong quá trình đăng nhập'+ err
        })
      }
    },
}