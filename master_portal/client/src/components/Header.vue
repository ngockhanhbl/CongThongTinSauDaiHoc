<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="info" >
      <b-navbar-nav class="ml-5">
        <div class="text-white">
          <div class="three_fourths_size">BỘ TÀI NGUYÊN VÀ MÔI TRƯỜNG</div>
          <div>TRƯỜNG ĐẠI HỌC TÀI NGUYÊN VÀ MÔI TRƯỜNG</div>
          <div>THÀNH PHỐ HỒ CHÍ MINH</div>
        </div>
      </b-navbar-nav>
      <b-navbar-nav class="logo ml-auto pr-5">
        <router-link to="/">
          <img src="@/assets/images/logo_ure.png">
        </router-link>
      </b-navbar-nav>


      <b-navbar-nav class="ml-auto pr-4">
        <!-- <router-link to="/searchdrug"><b-nav-item href="/searchdrug">Tra Cứu Thuốc</b-nav-item></router-link>
        <router-link to="/aboutus"><b-nav-item href="/aboutus">Về Chúng Tôi</b-nav-item></router-link> -->
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center">
            <span class="icon"><img src="@/assets/images/login.svg"></span>
            <router-link style="text-decoration: none; color: inherit;" to="/login"><b-nav-item href="/login">Đăng Nhập</b-nav-item></router-link>
          </div>
          <div>
            <input type="text" placeholder="Tìm kiếm">
          </div>
        </div>
        <!-- <router-link to="/login"><b-nav-item  v-if="isUserLoggedIn === 'false' || isUserLoggedIn === 'null' " href="login">Đăng Nhập</b-nav-item></router-link>
        <b-nav-item v-if="isUserLoggedIn === 'true'" @click="logout" >
          Đăng Xuất
        </b-nav-item> -->
      </b-navbar-nav>
    </b-navbar>

    <div class="brown_line"></div>

    <div>
      <b-navbar type="dark" variant="dark" class="menu">
        <b-navbar-nav ></b-navbar-nav >
        <b-navbar-nav align="center" class="ml-auto">
            <router-link style="text-decoration: none; color: inherit;" to="/"><b-nav-item href="/login">TRANG CHỦ</b-nav-item></router-link>&nbsp;
            <router-link style="text-decoration: none; color: inherit;" to="/aboutus"><b-nav-item href="/aboutus">GIỚI THIỆU</b-nav-item></router-link>&nbsp;
            <b-nav-item @click="jumptoTTSK">TIN TỨC & SỰ KIỆN</b-nav-item>

            <b-nav-item-dropdown id="nav7_ddown" right >
              <template slot="button-content" ><span class="text-white">ĐÀO TẠO TIẾN SĨ</span></template>
              <router-link style="text-decoration: none; color: inherit;" to="/chuandaura">
                <b-dropdown-item href="/chuandaura">Chuẩn Đầu Ra</b-dropdown-item>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" to="/sanphamkhoahoc">
                <b-dropdown-item href="/sanphamkhoahoc">Lịch Bảo Vệ Luận Án</b-dropdown-item>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" to="/giaithuongkhoahoc">
                <b-dropdown-item href="/giaithuongkhoahoc">Tra Cứu Đề Tài Luận Án</b-dropdown-item>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" to="/dsthacsi">
                <b-dropdown-item href="/dsthacsi">Danh Sách Tiến Sĩ Đã Được Cấp</b-dropdown-item>
              </router-link>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Biểu Mẫu</b-dropdown-item>
            </b-nav-item-dropdown>            

            <b-nav-item-dropdown id="nav7_ddown" right >
              <template slot="button-content" ><span class="text-white">ĐÀO TẠO THẠC SĨ</span></template>
              <router-link style="text-decoration: none; color: inherit;" to="/chuandaura">
                <b-dropdown-item href="/chuandaura">Chuẩn Đầu Ra</b-dropdown-item>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" to="/sanphamkhoahoc">
                <b-dropdown-item href="/sanphamkhoahoc">Lịch Bảo Vệ Luận Án</b-dropdown-item>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" to="/searchdrug">
                <b-dropdown-item href="/searchdrug">Tra Cứu Đề Tài Luận Án</b-dropdown-item>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" to="/dsthacsi">
                <b-dropdown-item href="/dsthacsi">Danh Sách Thạc Sĩ Đã Được Cấp</b-dropdown-item>
              </router-link>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Biểu Mẫu</b-dropdown-item>
            </b-nav-item-dropdown>

            
            <b-nav-item-dropdown id="nav7_ddown" right >
              <template slot="button-content" ><span class="text-white">NGHIÊN CỨU KHOA HỌC</span></template>
              <router-link style="text-decoration: none; color: inherit;" to="/detaikhoahoc">
                <b-dropdown-item href="/detaikhoahoc">Đề Tài Khoa Học</b-dropdown-item>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" to="/sanphamkhoahoc">
                <b-dropdown-item href="/sanphamkhoahoc">Sản Phẩm Khoa Học</b-dropdown-item>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" to="/giaithuongkhoahoc">
                <b-dropdown-item href="giaithuongkhoahoc">Giải Thưởng Khoa Học</b-dropdown-item>
              </router-link>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Biểu Mẫu</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item @click="jumptoHopTac">ĐƠN VỊ HỢP TÁC</b-nav-item>

          </b-navbar-nav>
        <b-navbar-nav class="ml-auto"></b-navbar-nav>
      </b-navbar>
    </div>


  </header>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  data(){
    return {
      get isUserLoggedIn() {
      	return localStorage.getItem('isUserLoggedIn' || false);
      }
    }
  },
  computed:{
    ...mapGetters(["user"]),
  },
  methods: {
    navigationTo(route){
      this.$router.push(route)
    },
    jumptoHopTac(){
      this.$router.push({
        name: 'homepage'
      })
      let limit = document.body.offsetHeight - window.innerHeight;
      window.scrollTo(0,limit/1.12);
    },
    jumptoTTSK(){
      this.$router.push({
        name: 'homepage'
      })
      let limit = document.body.offsetHeight - window.innerHeight;
      window.scrollTo(0,limit/3);
    },

    
    async logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      localStorage.setItem("isUserLoggedIn", false);
      window.scrollTo(0,10)   //trick fix slow react
      this.$router.push({
        name: 'homepage'
      })
    }
  }
}

</script>

<style scoped>

div ul a li a {
  color:#0b385b;
}
.three_fourths_size{
  font-size:.75rem
}
.icon img{
    height: 15px;
    width: 15px;
}

input {
  border: 2px solid rgba(255, 255, 255);
  border-radius: 3px;
  padding: 4px;
  font-size: 12px;
  width: 15vw;
}
.brown_line{
  height: 5px;
  width: 100%;
  background:#91602f ;
}
.menu a.nav-link {
  color:white;
  text-decoration: none;
}
.menu a.nav-link:hover {
  color:#91602f ;
  text-decoration: none;
}
li a {
    text-decoration: none;
}
/* .bg-dark {
    background-color: #343a40 !important;
} */


</style>
