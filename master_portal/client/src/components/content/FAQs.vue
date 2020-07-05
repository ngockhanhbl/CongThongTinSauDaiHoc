<template>
  <div class="container-fluid">
    <div class="row containerCus">
      <div class="col-md-12 title">
        Câu Hỏi Thường Gặp
      </div>

      <!-- About Company -->
      <div class="col-md-12 title-faqs">
        VỀ TỔ CHỨC
      </div>

      <div class="col-md-12 wrapper-faqs " @click="EisShowAnswer(1)">
        <div class="question">
          <span class="question">DH TN&MT Có Phải Là Đơn Vị Uy Tín ?</span>
          <span class="down-arrow"><img :src="ShowDownUp_1.image"/></span>
        </div>
        <transition name="fade">
          <div class="answer" v-show="ShowDownUp_1.isShow">
           Có, Tất Nhiên
          </div>
        </transition>
      </div>

      <div class="col-md-12 wrapper-faqs " @click="EisShowAnswer(2)">
        <div class="question">
          <span class="question">Bằng Thạc Sĩ, Tiến Sĩ Do Ai Cấp ?</span>
          <span class="down-arrow"><img :src="ShowDownUp_2.image"/></span>
        </div>
        <transition name="fade">
          <div class="answer" v-show="ShowDownUp_2.isShow">
            Do Đơn Vị DH TN&MT Cấp
          </div>
        </transition>
      </div>
      <div class="col-md-12 wrapper-faqs " @click="EisShowAnswer(3)">
        <div class="question">
          <span class="question">Bằng Thạc Sĩ, Tiến Sĩ Khi Học Tại Đây Liệu Có Giá Trị </span>
          <span class="down-arrow"><img :src="ShowDownUp_3.image"/></span>
        </div>
        <transition name="fade">
          <div class="answer" v-show="ShowDownUp_3.isShow">
            Có.
          </div>
        </transition>
      </div>
      <div class="col-md-12 wrapper-faqs " @click="EisShowAnswer(4)">
        <div class="question">
          <span class="question">Tôi Có Thể Tra Cứu Thông Tin Ở Đâu ?</span>
          <span class="down-arrow"><img :src="ShowDownUp_4.image"/></span>
        </div>
        <transition name="fade">
          <div class="answer" v-show="ShowDownUp_4.isShow">
            Bạn Có Thể Theo Dõi Tại Mục Tin Tức Của Website
          </div>
        </transition>
      </div>

      <!-- About Services -->

      <div class="col-md-12 title-faqs">
        VỀ CHƯƠNG TRÌNH CAO HỌC
      </div>

      <div class="col-md-12 wrapper-faqs " @click="EisShowAnswer(5)">
        <div class="question">
          <span class="question">DH TN&MT Có Chương Trình Sau Đại Học Không ?</span>
          <span class="down-arrow"><img :src="ShowDownUp_5.image"/></span>
        </div>
        <transition name="fade">
          <div class="answer" v-show="ShowDownUp_5.isShow">
            Có. Chúng tôi hiện có các trường trình sau đại học bao gồm học liên thạc sĩ, và tiến sĩ
          </div>
        </transition>
      </div>

      <div class="col-md-12 wrapper-faqs " @click="EisShowAnswer(6)">
        <div class="question">
          <span class="question">Những Ngành Nào DH TN&MT Đang Triễn Khai ?</span>
          <span class="down-arrow"><img :src="ShowDownUp_6.image"/></span>
        </div>
        <transition name="fade">
          <div class="answer" v-show="ShowDownUp_6.isShow">
            Bao Gồm Tất Cả Các Ngành Mà Trường Đang Triễn Khai 
          </div>
        </transition>
      </div>
      <div class="col-md-12 wrapper-faqs " @click="EisShowAnswer(7)">
        <div class="question">
          <span class="question">Chi Phí Theo Học Sau Đại Học Như Thế Nào ?</span>
          <span class="down-arrow"><img :src="ShowDownUp_7.image"/></span>
        </div>
        <transition name="fade">
          <div class="answer" v-show="ShowDownUp_7.isShow">
            Tuỳ Vào Ngành, nhưng giao động trong khoản
          </div>
        </transition>
      </div>
      <div class="col-md-12 wrapper-faqs " @click="EisShowAnswer(8)">
        <div class="question">
          <span class="question">Tôi Có Thể Đi Học Thạc Sĩ Vào Buổi Tối Được Không ?</span>
          <span class="down-arrow"><img :src="ShowDownUp_8.image"/></span>
        </div>
        <transition name="fade">
          <div class="answer" v-show="ShowDownUp_8.isShow">
            Có !
          </div>
        </transition>
      </div>

      <div class="space10 col-md-12"></div>
      <!-- trick  :((  -->
      <span class="down-arrow " v-if="true" v-show="false"
        ><img src="@/assets/images/down-arrow.svg"
      /></span>
      <span class="down-arrow " v-if="true" v-show="false"
        ><img src="@/assets/images/up-arrow.svg"
      /></span>
    </div>
  </div>
</template>

<script>
import { mapGetters} from "vuex";

export default {
  methods: {
    EisShowAnswer(idQuestion) {
      this.$store.dispatch("EisShowAnswer", idQuestion);
    }
  },
  computed: {
    ...mapGetters(
      ["ShowDownUp_1",
      "ShowDownUp_2",
      "ShowDownUp_3",
      "ShowDownUp_4",
      "ShowDownUp_5",
      "ShowDownUp_6",
      "ShowDownUp_7",
      "ShowDownUp_8"]
    )
  }
};
</script>
<style scoped>
* {
  font-size: 11px;
}
.containerCus {
  margin-top: 10vh;
  margin-left: 9vw;
  margin-right: 16vw;
}
.title {
  font-size: 2.8em;
}

.wrapper-faqs {
  box-shadow: 0 2px 4px 0 rgba(81, 85, 133, 0.28);
  border-radius: 5px;
  padding: 25px 30px;
  margin-bottom: 10px;
  cursor: pointer;
  /* display: inline-block; */
}

.down-arrow img {
  height: 1rem;
  width: 1rem;
  float: right;
  padding-top: 0.1rem;
}
.title-faqs {
  color: #3f4cec;
  letter-spacing: 1.6px;
  margin: 30px 0 10px;
}
.question {
  color: #0b0f41;
  font-size: 16px;

  /* font-family: SpaceGrotesk-Regular; */
}

.answer {
  color: #515584;
  line-height: 1.75;
  margin-top: 10px;
  font-size:1rem;
}
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
.space10 {
  height: 10vh;
}
</style>
