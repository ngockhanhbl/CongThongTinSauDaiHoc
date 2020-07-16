const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AccountController = require('./controllers/AccountController')
const AdminController = require('./controllers/AdminController')
const GeneralController = require('./controllers/GeneralController')
const isAuthenticated = require('./policies/isAuthenticated')
const email = require('./controllers/email')

module.exports = (app) => {

    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register),

    app.post('/login',
    AuthenticationController.login),

   app.post('/sendRequestSupport',
   GeneralController.sendRequestSupport)
   
   app.post('/sendRequestSubcriber',
   GeneralController.sendRequestSubcriber)

   app.post(`/applyjob/:id`,
   GeneralController.applyjob)

   app.get('/getAllFeedback',
   isAuthenticated,
   AdminController.getAllFeedback)
   
   app.put('/markToSupportDone/:id',
   isAuthenticated,
   AdminController.markToSupportDone)

   app.post(`/SendRequestCreateDeTai/`,
   AdminController.SendRequestCreateDeTai)

   app.post(`/SendRequestCreateJob/`,
   isAuthenticated,
   AdminController.SendRequestCreateJob)

   app.post(`/SendRequestCreateTinTuc/`,
   AdminController.SendRequestCreateTinTuc)
   
   app.get('/getAllTinTuc',
   AdminController.getAllTinTuc)

   app.get('/getTinTucByID/:id',
   AdminController.getTinTucByID),

   app.put(`/SendRequestUpdateTinTuc/`,
   AdminController.SendRequestUpdateTinTuc)

   
   app.put(`/SendRequestUpdateJob/`,
   isAuthenticated,
   AdminController.SendRequestUpdateJob)

   app.put(`/SendRequestUpdateDeTai/`,
   AdminController.SendRequestUpdateDeTai)

   app.put(`/SwitchJobStatus/:id`,
   isAuthenticated,
   AdminController.SwitchJobStatus)

   app.delete(`/DeleteJob/:id`,
   isAuthenticated,
   AdminController.DeleteJob)

   app.delete(`/DeleteTinTuc/:id`,
   AdminController.DeleteTinTuc)

   app.delete(`/DeleteDeTai/:id`,
   AdminController.DeleteDeTai)
   
   app.get(`/getAllJobs/`,
   AdminController.getAllJobs)

   app.get(`/getAllDeTai/`,
   AdminController.getAllDeTai)

   app.get(`/getJobById/:id`,
   AdminController.getJobById)

   app.get(`/getJobCVbyID/:id`,
   isAuthenticated,
   AdminController.getJobCVbyID)
   

   app.get(`/getAllJobDetails/`,
   AdminController.getAllJobDetails)
   
   app.post('/AuthenticationEmail',
   email.sendEmail)

   app.put('/forgotPassword',
   AccountController.forgotPassword)
   
}
