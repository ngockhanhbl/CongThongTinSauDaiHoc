const {Account} = require('../models')


module.exports = {
    async forgotPassword (req, res) {
      try {
        const API_KEY = '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';
        const {email,password,api_key} = req.body;
        console.log(email)
        console.log(password)
        console.log(api_key)
        if(api_key != API_KEY){
          res.status(500).send({
            error: 'Authentication Denied'
          })
        }else{
          await Account.findOne(
            {
              where: {email: email}
          }).then(function (record) {
            return record.update({password: password});
          }).then(function (record) {
              res.sendStatus(200);
          });
        }
      } catch (err) {
        res.status(500).send({
          error: 'Xảy ra lỗi trong quá trình cập nhật password'+err
        })
      }
    },
}

