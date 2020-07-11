export default {
    state: {
        isUserLoggedIn: false,
        token: null,
        user: null,
        doctorInfo:null,
        hospitalInfo:null,
        patientInfo:null,

        suKien:null,
        thongBao:null,
        tuyenSinh:null,

    },
    getters: {
      user: state => state.user,
      isUserLoggedIn: state => state.isUserLoggedIn,
      patientInfo:state => state.patientInfo,
      doctorInfo: state => state.doctorInfo,
      hospitalInfo: state => state.hospitalInfo,

      suKien: state => state.suKien,
      thongBao: state => state.thongBao,
      tuyenSinh: state => state.tuyenSinh,

    },
    mutations: {
        setToken (state, token) {
          localStorage.setItem("isUserLoggedIn", !!(token));
            state.token = token
            state.isUserLoggedIn = !!(token)
            localStorage.setItem("token", (token));
          },
          setUser (state, user) {
            localStorage.setItem("user", JSON.stringify(user));
            state.user = user
          },
          setDoctorInfo(state, user) {
            state.doctorInfo = user
          },
          setHospitalInfo(state, user) {
            state.hospitalInfo = user
          },
          set_patientInfo(state, user) {
            state.patientInfo = user
          },


          setSuKien(state, user) {
            state.suKien = user
          },
          setThongBao(state, user) {
            state.thongBao = user
          },
          setTuyenSinh(state, user) {
            state.tuyenSinh = user
          },

    },
    actions: {
        setToken ({commit}, token) {
          commit('setToken', token)
        },
        setUser ({commit}, user) {
          commit('setUser', user)
        },
        setDoctorInfo ({commit}, user) {
          commit('setDoctorInfo', user)
        },
        setHospitalInfo ({commit}, user) {
          commit('setHospitalInfo', user)
        },
        set_patientInfo ({commit}, user) {
          commit('set_patientInfo', user)
        },

        setSuKien ({commit}, user) {
          commit('setSuKien', user)
        },
        setThongBao ({commit}, user) {
          commit('setThongBao', user)
        },
        setTuyenSinh ({commit}, user) {
          commit('setTuyenSinh', user)
        },

      }
}