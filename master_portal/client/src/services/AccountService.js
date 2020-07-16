import Api from '@/services/Api'

export default {
  forgotPassword(payload){
    return Api().put(`forgotPassword`,payload)
  }
}

