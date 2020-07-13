<template>
    <div>
        <div>
            <b-card-group class="d-flex" >
                <b-row>
                     <b-col cols="3" v-for="(val, index) in suKien " :key="index" class="mt-1">
                        <b-card :img-src="val.image | getUrl" img-top v-if="index <= 7">
                            <b-card-text v-if="val.title" @click="getTinTucDetail(val.id)">
                                {{val.title}}
                            </b-card-text>
                        </b-card>
                     </b-col>
                </b-row>
            </b-card-group>
        </div>
    </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
    data() {
      return {
         
      }
    },
    methods: {
      getTinTucDetail(id){
        this.$router.push({
                path: `/tintucdetails/${id}`
            })
      }
    },
    computed: {
        ...mapGetters(["suKien"]),
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
.card-text{
  cursor: pointer;
}
.card{
  height: 400px;
}
.card img{
  height: 200px;
}
</style>