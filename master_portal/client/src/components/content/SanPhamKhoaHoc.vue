<template>
    <div class="container bg">
        <div class="master pt-4">
        <h2 class="d-flex justify-content-center pb-3 spkh">Sản Phẩm Khoa Học</h2>
            <div class="d-flex">
                <b-container class="bv-example-row">
                    <b-row>
                        <b-col>
                            TU CODE CSS
                        </b-col>
                        <b-col>
                            B
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        
      }
    },
    methods:{
        
    }
}
</script>

<style scoped>
.master {
  max-width: 1180px;
  text-align: center;
  margin: 0 auto;
  padding: 0 3rem;
}
.no_border{
    border:0;
    border-radius:0;
}
.bg{
    background:#f9f9f9;
}
.card_left_img img{
  height: 160px;
  width: 160px;
  max-height: 160px;
  max-width: 160px;
}
.card_left_img .card-body{
  padding:0.25rem .5rem;
}

.card_left_img{
  border:none;
  margin-bottom: 1rem;
}
.spkh{
    color:#0b3b5b;
}
</style>
