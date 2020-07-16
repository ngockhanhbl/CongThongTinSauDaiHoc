import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  patient (credentials) {
    return Api().post('patient', credentials)
  },
 
  doctor (credentials) {
    return Api().post('doctor', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
 
 
  AuthenticationEmail (credentials) {
    return Api().post('AuthenticationEmail', credentials)
  }
}

