<template>
  <div v-if="userRole == 0 && isUserLoggedIn === 'true'" class="pt-5">
  <b-card no-body>
    <b-tabs pills card vertical >
      <b-tab title="Quản lý tin tức " active><b-card-text> <AdminManagerTinTuc /></b-card-text></b-tab>
      <b-tab title="Quản lý liên hệ"><b-card-text> <AdminSupport /></b-card-text></b-tab>
      <b-tab title="Quản lý tuyển sinh"><b-card-text> <AdminManagerTuyenSinh /></b-card-text></b-tab>
      <b-tab title="DS đề tài, luận án"><b-card-text> <AdminManagerDeTai /></b-card-text></b-tab> 
    </b-tabs>
  </b-card>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        userRole :null,
        get isUserLoggedIn() {
          return localStorage.getItem('isUserLoggedIn' || false);
        }
      }
    },
    components: {
      AdminSupport: () =>import('@/components/content/admin_modules/AdminSupport.vue'),
      AdminManagerTuyenSinh: () =>import('@/components/content/admin_modules/AdminManagerTuyenSinh.vue'),
      AdminManagerDeTai: () =>import('@/components/content/admin_modules/AdminManagerDeTai.vue'),
      AdminManagerTinTuc: () =>import('@/components/content/admin_modules/AdminManagerTinTuc.vue')

    },
    async created() {
      const userJSON = JSON.parse(localStorage.getItem("user"))
      this.userRole = userJSON.roles
    }
 
  }
</script>

<style scoped>

</style>