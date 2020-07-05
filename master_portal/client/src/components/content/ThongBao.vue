<template>
    <div>
        <div>
            <b-card-group >
                <b-container fluid>
                  <b-row>

                    <b-col cols="4">
                      <b-row>
                        <b-col cols="12" >
                          <b-card v-bind:img-src="caohoc[0].src" img-top>
                            <h4>TITLE , BÊN DƯỚI THAY BẰNG DES</h4>
                            <b-card-text v-if="caohoc[0].title">
                                {{caohoc[0].title}}
                            </b-card-text>
                          </b-card>
                        </b-col>
                      </b-row>
                    </b-col>

                    <b-col cols="3" class="p-0">
                      <b-row>
                        <b-col cols="12" v-for="(val, index) in caohoc " :key="index">
                          <b-card v-bind:img-src="val.src" img-left class="card_left_img">
                            <b-card-text v-if="val.title">
                                {{val.title}}
                            </b-card-text>
                            <!-- <div class=""></div> -->
                          </b-card>
                        </b-col>
                      </b-row>
                    </b-col>
<!-- v-for="(val, index) in bantin " :key="index" outlined -->
                    <b-col cols="5" >
                          <b-table hover small borderless :fields="fields" :items="bantin"></b-table>
                    </b-col>
                    
                  </b-row>
                </b-container>
            </b-card-group>
        </div>
    </div>
</template>

<script>
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
        bantin:[],
        fields: [
            { key: 'title', label: 'THÔNG BÁO' },
        ],

      }
    },
    async mounted() {
      this.caohoc = this.thongbao.filter((x,i) => x.type == 'ts' | x.type == 'ths' & i<3)
      this.bantin = this.thongbao.filter((x,i) => x.type == 'bantin' & i<10)
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

</style>