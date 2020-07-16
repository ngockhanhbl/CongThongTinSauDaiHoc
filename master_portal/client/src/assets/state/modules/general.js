export default {
    state: {
        isUserLoggedIn: false,
        token: null,
        user: null,
        suKien:null,
        thongBao:null,
        tuyenSinh:null,
        tinTuc:null,

    },
    getters: {
      user: state => state.user,
      isUserLoggedIn: state => state.isUserLoggedIn,

      suKien: state => state.suKien,
      thongBao: state => state.thongBao,
      tuyenSinh: state => state.tuyenSinh,
      tinTuc: state => state.tinTuc,

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

          setSuKien(state, user) {
            state.suKien = user
          },
          setThongBao(state, user) {
            state.thongBao = user
          },
          setTuyenSinh(state, user) {
            state.tuyenSinh = user
          },
          setTinTuc(state, user) {
            state.tinTuc = user
          },
    },
    actions: {
        setToken ({commit}, token) {
          commit('setToken', token)
        },
        setUser ({commit}, user) {
          commit('setUser', user)
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
        setTinTuc ({commit}, user) {
          commit('setTinTuc', user)
        },

      }
}