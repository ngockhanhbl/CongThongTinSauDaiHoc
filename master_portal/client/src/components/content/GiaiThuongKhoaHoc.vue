<template>
    <div class="container bg">
        <div class="master pt-4">
        <h2 class="d-flex justify-content-center pb-3 spkh">Giải Thưởng Khoa Học</h2>
            <div class="d-flex">
                <b-container>
                    <b-row>
                        <div class="spkh">❖ Giải thưởng Hồ Chí Minh</div>
                        <div class="container pt-2 pb-3 new2">
                            <p>
                               &#8226;		Cụm công trình: Bản đồ địa chất Việt Nam tỷ lệ 1/500.000 (Tổng cục Mỏ và Địa chất xuất bản năm 1988) và Bản đồ khoáng sản Việt Nam tỷ lệ 1/500.000 (Tổng cục Địa chất xuất bản năm 1981).
                            </p>
                            <p>
                               &#8226;		 Nghiên cứu ứng dụng và phát triển công nghệ cơ khí - tự động hóa trong công nghiệp chế biến nông sản, thực phẩm.
                            </p>
                        </div>

                        <div class="spkh">❖ Giải thưởng Nhà nước</div>
                        <div class="container pt-2 pb-3 new2">
                            <p>
                               &#8226;		Nghiên cứu cơ bản tính chất quang - điện - từ của một số vật liệu điện tử tiên tiến (vật liệu bán dẫn Si nano, ZnS, ZnSe; vật liệu từ siêu dẫn cấu trúc kiểu perovskit).
                            </p>
                            <p>
                               &#8226;		 Công nghệ vật liệu đất hiếm phục vụ sản xuất, đời sống và bảo vệ môi trường   (05/09/17)
                            </p>
                        </div>

                        <div class="spkh">❖ Giải thưởng Trần Đại Nghĩa</div>
                        <div class="container pt-2 pb-3">
                            <p>
                               &#8226;		Ứng dụng công nghệ tiên tiến sản xuất vắc xin phòng bệnh cho người  
                            </p>
                            <p>
                               &#8226;		Công nghệ sản xuất tinh quặng sắt, thép và vật liệu xây dựng không nung từ bùn đỏ 
                            </p>
                        </div>
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
.new2 {
  border-top: 1px dashed #ccc;
}

</style>
