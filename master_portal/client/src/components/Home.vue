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

  <div class="container-fluid" id="cooperation">
    <div class="cooperation-unit-title containerCus pt-1">
      <h3>Đơn Vị Hợp Tác</h3>
    </div>
    <div class="cooperation-unit-logo row justify-content-around">
      <img src="../assets/images/corporation4.png" alt />
      <img src="../assets/images/corporation1.png" alt />
      <img src="../assets/images/corporation5.png" alt />
      <img src="../assets/images/corporation2.png" alt />
      <img src="../assets/images/corporation3.png" alt />
      <img src="../assets/images/corporation6.png" alt />
    </div>
  </div>

    <!-- section 2 -->
    <section id="section1" class="section">
      <div class="containerCus">
        <h2 class="section-head">
          <img src="../assets/images/deskandphone.svg" alt />
          <span class="ml-3">Điện Tử Hoá Hồ Sơ Y Tế</span>
        </h2>
        <!-- <span class="content"> -->
        <p class="lead content-section2">
          Tất cả mọi thông tin của người bệnh như thông tin cá nhân, nhóm máu,
          lịch sử bệnh án, lịch sử khám chữa bệnh và nhiều thông tin khác nữa
          đều sẽ được lưu trữ trong một hồ sơ được xây dựng dưới công nghệ
          của EHR MedicalBlock.
        </p>
        <div class="d-flex justify-content-center pb-3">
          <a href="#" class="btn btn-primary get-started">Bắt Đầu</a>
        </div>
        <img src="../assets/images/session1.png" alt />
        <!-- </span> -->
      </div>
    </section>

    <!-- section 3 - benefic -->

    <!-- 1 of 4 -->

    <div class="container-fluid pt-3 " id="benefit-1">
      <div class="row">
        <div class="d-flex col-md-12">
          <div class="benefit-title col-md-3">
            <samp class="lead">
              Rút Ngắn Thời Gian Khám Và Chữa Bệnh
            </samp>
          </div>

          <div class="benefit-icon col-md-1">
            <img src="../assets/images/clock.svg" />
          </div>

          <div class="benefit-content col-md-8">
            <samp>
              Nhờ có hồ sơ bệnh án điện tử, mà các bác sĩ có thể tiếp cận bệnh
              án của bệnh nhân một cách nhanh chóng hơn. Từ đó, rút ngắn được
              thời gian khám chữa bệnh, cũng như tăng cường tính hiệu quả cho
              công tác khám chữa bệnh.
            </samp>
          </div>
        </div>
      </div>
    </div>

    <!-- 2 of 4 -->
    <div class="container-fluid pt-3 " id="benefit-2">
      <div class="row">
        <div class="d-flex col-md-12">
          <div class="benefit-title col-md-3">
            <samp class="lead">
              Không Cần Trung Gian Quản Lý
            </samp>
          </div>

          <div class="benefit-icon col-md-1">
            <img src="../assets/images/business.svg" />
          </div>

          <div class="benefit-content col-md-8">
            <samp>
              Hồ sơ bệnh án sẽ do chính bệnh nhân sở
              hữu, quản lý, không cần trung gian thứ 3. Điều này giúp người bệnh
              có thể theo dõi hiệu quả bệnh án của mình. Đồng thời, các cơ sở y
              tế cũng tiết kiệm được chi phí khi không cần nhân sự cho việc quản
              lý bệnh án.
            </samp>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 of 4 -->
    <div class="container-fluid pt-3 " id="benefit-3">
      <div class="row">
        <div class="d-flex col-md-12 ">
          <div class="benefit-title col-md-3">
            <samp class="lead">
              Tăng Tính Minh Bạch Hoá Thông Tin
            </samp>
          </div>

          <div class="benefit-icon col-md-1">
            <img src="../assets/images/hacker.svg" />
          </div>

          <div class="benefit-content col-md-8">
            <samp>
              Nhờ có hồ sơ bệnh án điện tử, mà các bác sĩ có thể tiếp cận bệnh
              án của bệnh nhân một cách nhanh chóng hơn. Từ đó, rút ngắn được
              thời gian khám chữa bệnh, cũng như tăng cường tính hiệu quả cho
              công tác khám chữa bệnh.
            </samp>
          </div>
        </div>
      </div>
    </div>

    <!-- 4 of 4 -->
    <div class="container-fluid pt-3 " id="benefit-4">
      <div class="row">
        <div class="d-flex col-md-12 ">
          <div class="benefit-title col-md-3">
            <samp class="lead">
              Truy Xuất Hiệu Quả Nguồn Gốc Dược Phẩm
            </samp>
          </div>

          <div class="benefit-icon col-md-1">
            <img src="../assets/images/pills.svg" />
          </div>

          <div class="benefit-content col-md-8">
            <samp>
              EHR MedicalBlock còn có thể giúp truy xuất nguồn gốc dược phẩm
              một cách hiệu quả nhất. Giúp tránh được các vấn đề thuốc giả,
              thuốc kém chất lượng… trong lĩnh vực y tế.
            </samp>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
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

.cooperation-unit-title {
  color: #0b3b5b;
}
#cooperation {
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


</style>
