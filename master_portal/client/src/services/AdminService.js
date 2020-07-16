import Api from '@/services/Api'

export default {

  markToSupportDone (payload) {
    return Api().put(`markToSupportDone/${payload.id}`, payload)
  },
  SendRequestCreateJob (payload) {
    return Api().post(`SendRequestCreateJob`, payload)
  },
  SendRequestUpdateDeTai(payload){
    return Api().put(`SendRequestUpdateDeTai`, payload)
  },
  SendRequestCreateDeTai (payload) {
    return Api().post(`SendRequestCreateDeTai`, payload)
  },
  SendRequestCreateTinTuc (payload) {
    return Api().post(`SendRequestCreateTinTuc`, payload)
  },
  getAllTinTuc () {
    return Api().get(`getAllTinTuc`)
  },
  SendRequestUpdateTinTuc(payload){
    return Api().put(`SendRequestUpdateTinTuc`, payload)
  },
  SendRequestUpdateJob(payload){
    return Api().put(`SendRequestUpdateJob`, payload)
  },
  getAllJobs () {
    return Api().get(`getAllJobs`)
  },
  getAllDeTai () {
    return Api().get(`getAllDeTai`)
  },
  getJobCVbyID(payload) {
    return Api().get(`getJobCVbyID/${payload.id}`)
  },
  getJobById(payload){
    return Api().get(`getJobById/${payload.id}`)
  },
  getAllJobDetails () {
    return Api().get(`getAllJobDetails`)
  },
  SwitchJobStatus (payload) {
    return Api().put(`SwitchJobStatus/${payload.id}`,payload)
  },
  DeleteJob (payload) {
    return Api().delete(`DeleteJob/${payload.id}`)
  },
  DeleteTinTuc (payload) {
    return Api().delete(`DeleteTinTuc/${payload.id}`)
  },
  DeleteDeTai (payload) {
    return Api().delete(`DeleteDeTai/${payload.id}`)
  },
  getTinTucByID (id) {
    return Api().get(`getTinTucByID/${id}`)
  },
}




