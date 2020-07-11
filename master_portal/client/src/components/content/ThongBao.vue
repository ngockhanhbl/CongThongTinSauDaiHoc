<template>
<!-- // #giới hạn div cho image -->

    <div>
        <div>
            <b-card-group >
                <b-container fluid>
                  <b-row>
                    

                    <b-col cols="4">
                      <b-row>
                        <b-col cols="12" >
                          <b-card  img-top>
                            <span class="vol_img" v-html="this.tuyenSinh[0].image" ></span>
                            <h4>{{this.tuyenSinh[0].title}} </h4>
                            <b-card-text v-if="this.tuyenSinh[0].title">
                               Căn cứ Quy chế đào tạo trình độ thạc sĩ ban hành kèm theo Thông tư số 15/2014/TT-BGDĐT ngày 15/5/2014 của Bộ trưởng Bộ Giáo dục và Đào tạo; Quy chế đào tạo trình độ thạc sĩ ban hành kèm theo quyết định số 775/QĐ-HVKHCN ngày 21/11/2016 của Giám đốc Học viện Khoa học và Công nghệ (KHCN)
                            </b-card-text>
                          </b-card>
                        </b-col>
                      </b-row>
                    </b-col>

                    <b-col cols="3" class="p-0">
                      <b-row>
                        <b-col cols="12" v-for="(val, index) in tuyenSinh " :key="index">
                          <b-card >
                            <span class="vol_img card_left_img" v-html="val.image" ></span>
                            <b-card-text v-if="val.title">
                                {{val.title}}
                            </b-card-text>
                          </b-card>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="5" >
                          <b-table hover small borderless :fields="fields" :items="thongBao">
                          <template slot="title" slot-scope="row" >
                            <p @click="TinTucDetails(row.item, row.index, $event.target)" class="vol_thongbao">
                               &#187;  {{row.item.title}}
                            </p>
                          </template>
                          </b-table>
                    </b-col>
                  </b-row>
                </b-container>
            </b-card-group>
        </div>
    </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
    data() {
      return {
        thongbao:[
          {id:1,title:'first quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:2,title:'sêcond quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:3,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:4,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:5,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:6,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:7,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300',type:'bantin'},
          {id:8,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300',type:'bantin'},
          {id:8,title:'ths quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300',type:'ths'},
          {id:8,title:'ts quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300',type:'ts'},
        ],
        caohoc:[],
        fields: [
            { key: 'title', label: 'THÔNG BÁO' },
        ],

      }
    },
    async mounted() {
      this.bantin = this.thongbao.filter((x,i) => x.type == 'bantin' & i<10)

    },
    computed: {
      ...mapGetters(["thongBao","tuyenSinh"]),
      tuyenSinh () {
        return this.$store.getters.tuyenSinh
      }
      
    },
     
  }
</script>

<style scoped>
.card_left_img img{
  height: 80px;
  width: 80px;
  max-height: 80px;
  max-width: 80px;
}
.card_left_img .card-body{
  padding:0.25rem .5rem;
}

.card_left_img{
  border:none;
  margin-bottom: 1rem;
}
.vol_thongbao{
  cursor: pointer;
  color:#333
}
p.ql-align-justify img{
    width: 25vw;
    height: 15vw;
}
</style>
