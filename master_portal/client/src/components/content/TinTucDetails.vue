<template >
      <b-container>
            <b-row >
                  <b-col cols="8" class="pr-0">
                        <b-container fluid class="bg">
                              <b-row class="pt-3 pl-3">
                                    <article>
                                          <strong class="title" v-if="tintuc.title"><h4>{{tintuc.title}}</h4></strong>
                                    </article>
                              </b-row>

                              <b-row class="pt-3  pl-3 timer">
                                    <pre v-if="tintuc.createdAt">Ngọc Khanh đăng vào lúc: {{moment(tintuc.createdAt).locale('vi_VN').format('LLLL')}}</pre>
                              </b-row>

                              <b-row class=" pl-3"  v-if="tintuc.des">
                                    <div v-html="tintuc.des"></div>
                              </b-row>

                              <b-row>
                                    <article class="pl-3 ">
                                          <strong class="title2"><h4>TIN LIÊN QUAN</h4></strong>
                                          <b-row class="pb-2 ml-2 tinlienquan">
                                               &#187; Thông báo tổ chức Lễ trao bằng Thạc sĩ, Tiến sĩ đợt 1 năm 2020
                                          </b-row>
                                          <b-row class="pb-2 ml-2 tinlienquan">
                                               &#187; Đại học Tài Nguyên Và Môi Trường tổ chức lễ trao bằng tiến sĩ, thạc sĩ	
                                          </b-row>
                                          <b-row class="pb-2 ml-2 tinlienquan pb-3">
                                               &#187; Thông báo kết quả tuyển sinh đào tạo thạc sĩ đợt 1 năm 2020	
                                          </b-row>
                                    </article>
                              </b-row>
                              <b-row class="pb-2">
                                    <b-container class="pl-3 mt-2">
                                          <strong class="title2">Nhập Nội Dung Bình Luận</strong>
                                          <b-row class="pb-2 pt-2">
                                               <b-form-textarea
                                                      id="textarea"
                                                      v-model="vol_text"
                                                      rows="3"
                                                      max-rows="6"
                                                      class="no-border vol_text"
                                                ></b-form-textarea>
                                          </b-row>
                                          <b-row class="pb-2 binhluan">
                                                <b-button variant="secondary" size="sm" class="no-border">Bình Luận</b-button>
                                          </b-row>
                                    </b-container>
                              </b-row>

                        </b-container>
                  </b-col>
                  <b-col class="p-0">
                        <b-container fluid>
                              <b-col class="vol_aside">
                                    <img
                                          class="d-block img-fluid w-100 pt-1"
                                          src="@/assets/images/5.jpg"
                                          alt="image slot"
                                    >
                                    <img
                                          class="d-block img-fluid w-100 pt-1"
                                          src="@/assets/images/6.jpg"
                                          alt="image slot"
                                    >
                                    <img
                                          class="d-block img-fluid w-100 pt-1"
                                          src="@/assets/images/7.jpg"
                                          alt="image slot"
                                    >
                                    <img
                                          class="d-block img-fluid w-100 pt-1 "
                                          src="@/assets/images/4.png"
                                          alt="image slot"
                                    >
                                    <img
                                          class="d-block img-fluid w-100 mt-3 pt-5"
                                          src="@/assets/images/1.png"
                                          alt="image slot"
                                    >
                                    <img
                                          class="d-block img-fluid w-100 mt-2 pt-2"
                                          src="@/assets/images/2.png"
                                          alt="image slot"
                                    >
                                    <img
                                          class="d-block img-fluid w-100 mt-2 pt-2"
                                          src="@/assets/images/3.png"
                                          alt="image slot"
                                    >
                              </b-col>
                        </b-container>
                  </b-col>
            </b-row>
      </b-container>
</template>


<script>
import axios from 'axios'
import { mapGetters} from "vuex";
import moment from 'moment';
import AdminService from '@/services/AdminService';

export default {  
      data(){
            return{
                  route:null,
                  tintuc: null,
                  vol_text:''
            }
      },
      watch: {
            $route(to, from) {
                  this.getTinTucByID(to.params.id);
            }
      },
      mounted() {
            console.log('mouted '+ this.$route.params.id)
            this.route = this.$route.params.id;
            this.getTinTucByID(this.route);
      },
      methods:{
            moment: function () {
                  return moment();
            },
            async getTinTucByID(id) {
                 this.tintuc = (await AdminService.getTinTucByID(id)).data
            },
      },
      
}
</script>
<style scoped>
.bg{
      background: #f4f4f4;
}
.bg2{
      background: #fafafa
}
.timer pre{
      color:#515151;
      font-size: .7rem;
}
.title{
      color:#007CC8;
}
.vol_aside img {
      cursor: pointer;
}
.tinlienquan{
      color:tomato
}
.no-border{
      border-radius: 0;
}
.vol_text{
      width: 90%;
    margin-left: 15px;
}
.binhluan{
      margin-left: 1px;
}
</style>