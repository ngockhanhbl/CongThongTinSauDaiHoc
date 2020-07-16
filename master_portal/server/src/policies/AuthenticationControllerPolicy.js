const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    const {error} = Joi.validate(req.body, schema, { allowUnknown: true })

    
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':         
          res.status(400).send({
            error: 'Vui lòng cung cấp địa chỉ email chính xác'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Mật khẩu được cung cấp phải khớp với các quy tắc sau:
              <br>
              1. Nó phải chứa chỉ các ký tự sau: chữ thường, chữ hoa, chữ số.
              <br>
              2. mật khẩu dài ít nhất 8 kí tự và không dài hơn 32 kí tự.
            `
          })
          break   
        default:
          res.status(400).send({
            error: 'Sai thông tin đăng kí'
          })
      }
    } else {
      next()
    }
  },
  
}


