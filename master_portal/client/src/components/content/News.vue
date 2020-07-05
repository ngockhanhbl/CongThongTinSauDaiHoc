<template>
    <div>
        <div>
            <b-card-group class="d-flex" >
                <b-row>
                     <b-col cols="3" v-for="(val, index) in news " :key="index">
                        <b-card v-bind:img-src="val.src" img-top>
                            <b-card-text v-if="val.title">
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
export default {
    data() {
      return {
        news:[
          {id:1,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:2,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:3,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:4,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:5,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:6,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:7,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
          {id:8,title:'Some quick example text to build on the card and make up the bulk of the card',src:'https://placekitten.com/1000/300'},
        ],
         
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>