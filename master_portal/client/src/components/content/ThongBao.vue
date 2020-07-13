<template>
<!-- // #giới hạn div cho image -->

    <div class="main_body">
        <div>
            <b-card-group >
                <b-container fluid>
                  <b-row>

                    <b-col cols="4">
                      <b-row>
                        <b-col cols="12" >
                          <b-card v-if="this.tuyenSinh" :img-src="this.tuyenSinh[0].image | getUrl" img-top>
                              <h4 v-if="this.tuyenSinh" @click="getTinTucDetail1">{{this.tuyenSinh[0].title}} </h4>
                              <b-card-text @click="getTinTucDetail1">
                                Căn cứ Quy chế đào tạo trình độ thạc sĩ ban hành kèm theo Thông tư số 15/2014/TT-BGDĐT ngày 15/5/2014 của Bộ trưởng Bộ Giáo dục và Đào tạo
                              </b-card-text>
                          </b-card>
                        </b-col>
                      </b-row>
                    </b-col>

                    <b-col cols="3" class="p-0">
                      <b-row>
                        <b-col cols="12" v-for="(val, index) in tuyenSinh " :key="index">
                          <b-card v-if="index" class="card_left_img" img-left :img-src="val.image | getUrl">
                            <b-card-text v-if="val.title" @click="getTinTucDetail(val.id)">
                                {{val.title}}
                            </b-card-text>
                          </b-card>
                        </b-col>
                      </b-row>
                    </b-col>
                    
                    <b-col cols="5" >
                          <b-table hover small borderless :fields="fields" :items="thongBao">
                            <template slot="title" slot-scope="row" >
                              <p  @click="getTinTucDetails(row.item, row.index, $event.target)" class="vol_thongbao">
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
import moment from 'moment';

export default {
    data() {
      return {
        caohoc:[],
        fields: [
            { key: 'title', label: 'THÔNG BÁO' },
        ],

      }
    },
   
    computed: {
      ...mapGetters(["thongBao","tuyenSinh"]),
      tuyenSinh () {
        return this.$store.getters.tuyenSinh
      }
      
    },
    methods: {
      getTinTucDetails(item, index, button){
        this.$router.push({
                path: `/tintucdetails/${item.id}`
            })
      },
      getTinTucDetail1(){
        this.$router.push({
                path: `/tintucdetails/${this.tuyenSinh[0].id}`
          })
      },
      getTinTucDetail(id){
        this.$router.push({
                path: `/tintucdetails/${id}`
            })
      }
    },
    filters: {
      getUrl: function (value) {
        if (!value) return ''
        value = value.toString()
        var pos = value.indexOf("src") + 5;
        value = value.slice(pos,-6)
        return value
      }
    }
     
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
  padding:0 .5rem;
}

.card_left_img{
  border-radius: 0;
  border-top:0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px dotted #7f7f7f;
  margin-bottom: .3rem;
}
.vol_thongbao{
  cursor: pointer;
  color:#333
}
p.ql-align-justify img{
    width: 25vw;
    height: 15vw;
}
.card{
  cursor: pointer;
}
</style>
