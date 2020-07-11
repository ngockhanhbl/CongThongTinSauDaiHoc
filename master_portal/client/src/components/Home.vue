<template>
  <div class="main-home">
    <!-- section main -->

    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          caption="Lễ Kí Kết"
          text="Nghiên Cứu Đào Tạo Tiến Sĩ, Thạc Sĩ Và Nghiên Cứu Khoa Học"
        >
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="@/assets/images/slide2.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <h3>TRAO QUYẾT ĐỊNH BỔ NHIỆM CHỨC DANH GIÁO SƯ, PHÓ TIẾN SĨ NĂM 2019</h3>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="@/assets/images/slide3.jpg"
              alt="image slot"
            >
            
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="@/assets/images/slide4.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="@/assets/images/slide5.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <h2>LỄ TRAO BẰNG THẠC SĨ ĐỢI 1 NĂM 2020</h2>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="@/assets/images/slide1.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

      </b-carousel>
  </div>

  
  <div class="container-fluid pt-3 vol_content">
    <b-row>
      <b-col>
        <b-card header-tag="header" header-bg-variant="info">
          <template v-slot:header>
            <div class="d-flex align-items-center ">
              <span class="phatsong"><img src="@/assets/images/phatsong.png"></span>
              <h6 class="mb-0 ml-2 text-white">TIN TỨC & SỰ KIỆN</h6>
            </div>
          </template>
          <b-card-text>
            <app-news />
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="mt-3"></b-row>

    <b-row>
      <b-col>
        <b-card header-tag="header" header-bg-variant="dark">
          <template v-slot:header>
            <div class="d-flex align-items-center ">
              <span class="phatsong"><img src="@/assets/images/loaloa.svg"></span>
              <h6 class="mb-0 ml-2 text-white">THÔNG BÁO & TUYỂN SINH CAO HỌC</h6>
            </div>
          </template>
          <b-card-text>
            <app-thongbao />
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>

  <div class="pt-4 vol_content">

  </div>


  <div class="container-fluid " id="cooperation">
      <div class="cooperation-unit-title containerCus pt-1">
        <h3>Đơn Vị Hợp Tác</h3>
      </div>
      <div class="cooperation-unit-logo row justify-content-around pt-3 pb-4">
        <img src="../assets/images/lkdh1.png" alt />
        <img src="../assets/images/lkdh2.png" alt />
        <img src="../assets/images/lkdh3.png" alt />
        <img src="../assets/images/lkdh4.png" alt />
        <img src="../assets/images/lkdh5.png" alt />
      </div>
    </div>

  </div>
</template>

<script>
import News from '@/components/content/News.vue'
import ThongBao from '@/components/content/ThongBao.vue'
import AdminService from '@/services/AdminService';

  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        tintuc:[]
      }
    },
    components: {
      "app-news": News,
      "app-thongbao": ThongBao,
    },
    async mounted() {
      this.tintuc = (await AdminService.getAllTinTuc()).data
      var thongbao = this.tintuc.filter(x=>x.type = 'Thông Báo')
      var sukien = this.tintuc.filter(x=>x.type = 'Tin Tức Và Sự Kiện')
      var tuyensinhcaohoc = this.tintuc.filter(x=>x.type = 'Thông Báo')

      this.$store.dispatch("setSuKien",sukien);
      this.$store.dispatch("setThongBao",thongbao);
      this.$store.dispatch("setTuyenSinh",tuyensinhcaohoc);
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      
    }
  }
</script>

<style scoped>
* {
  line-height: 1.6;
}
.containerCus {
  max-width: 1180px;
  text-align: center;
  margin: 0 auto;
  padding: 0 3rem;
}

#main-section {
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100vw;
  opacity: 0.9;
  height: 100vh;
  text-align: center;
  margin: 0 auto;
  padding: 45vh 15vh;
}
#main-section h2 {
  color: black;
  font-weight: bold;
}
#main-section a {
  border-radius: 15px 15px;
}
.get-started{
  padding: 0.9rem 3rem;
}
.section-head {
  color: red;
}
#introduce {
  background-color: rgba(79, 94, 114, 0.08);
}

.introduce {
  padding-top: 2vw;
  padding-left: 10vw;
}

.introduce-content {
  padding-top: 4vw;
  padding-right: 15vw;
  padding-left: 2vw;
}
video {
  height: 40vh;
  width: 30vw;
}

.vol_content-unit-title {
  color: #0b3b5b;
}
.vol_content {
  background-color: rgba(192, 192, 192, 0.3);
}

.section-head img {
  height: 1em;
  width: 1em;
}
.lead {
  font-size: 1.3rem;
}
.lead a:hover {
  transform: scale(1.02);
}
.cooperation-unit-logo img{
  max-width: 15vw;
}
.content-section2 {
  color: #000;
  font-size: 1.2rem;
}
.benefit-title {
  margin-left: 1vw;
  color: #0b3b5b;
}
.benefit-content {
  color: #666677;
  padding: 0 5vw 10vh 3vw;
}
.benefit-icon img {
  height: 5rem;
  width: 5rem;
}

#benefit-1,
#benefit-3 {
  background-color: rgba(192, 192, 192, 0.3);
}

#benefit-2,
#benefit-4 {
  background-color: rgba(79, 94, 114, 0.08);
}
#benefit-2 .benefit-content,
#benefit-4 .benefit-content {
  color: #555555;
}
.phatsong img{
  height:2rem;
  width:2rem;
}
header .card-header{
  background:red;
}

.bg-bg_brown{
  background:#91602f ;
}


</style>
