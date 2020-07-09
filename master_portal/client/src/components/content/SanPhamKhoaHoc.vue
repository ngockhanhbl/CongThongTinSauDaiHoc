<template>
    <div class="container bg">
        <div class="master pt-4">
        <h2 class="d-flex justify-content-center pb-3 spkh">Sản Phẩm Khoa Học</h2>
            <div class="d-flex">
                <b-container class="bv-example-row">
                    <b-row>
                        <b-col>
                            <b-container class="vol_card d-flex justify-content-between sm-12">
                                <div class="card_left_img">
                                    <img src="@/assets/images/spkh1.jpg">
                                </div>
                                <div class="text_content">
                                    <strong class="title">Hệ thống dịch vụ truy cập Internet không dây băng thông rộng qua mạng viễn thông Wimax</strong>
                                    <div class="content">Địa chỉ: Phòng công nghệ tự động hóa, Viện Công nghệ thông tin</div>
                                    <div class="d-flex justify-content-end">
                                        <b-button variant="info" class="no_border" size="sm">Xem Chi Tiết</b-button>
                                    </div>
                                </div>
                            </b-container>
                            <b-container class="vol_card d-flex justify-content-between sm-12">
                                <div class="card_left_img">
                                    <img src="@/assets/images/spkh2.jpg">
                                </div>
                                <div class="text_content">
                                    <strong class="title">Hệ thống giải pháp MVOIP dựa trên nền tảng di động</strong>
                                    <div class="content">Chủ nhiệm: TS. Phạm Thanh Giang Địa chỉ: P206, Nhà A3, Viện Công nghệ thông tin</div>
                                    <div class="d-flex justify-content-end">
                                        <b-button variant="info" class="no_border" size="sm">Xem Chi Tiết</b-button>
                                    </div>
                                </div>
                            </b-container>
                            <b-container class="vol_card d-flex justify-content-between sm-12">
                                <div class="card_left_img">
                                    <img src="@/assets/images/spkh6.jpg">
                                </div>
                                <div class="text_content">
                                    <strong class="title">VRBODY1.0 - hệ thống phần mềm thực tại ảo mô phỏng cấu trúc, hoạt động của các bộ phận chính cơ thể người</strong>
                                    <div class="content">Chủ nhiệm: ThS. Trịnh Hiền Anh<br>Địa chỉ: P312, nhà A3, Viện Công nghệ thông tin</div>
                                    <div class="d-flex justify-content-end">
                                        <b-button variant="info" class="no_border" size="sm">Xem Chi Tiết</b-button>
                                    </div>
                                </div>
                            </b-container>
                            
                        </b-col>
                        <b-col>
                            <b-container class="vol_card d-flex justify-content-between sm-12">
                                <div class="card_left_img">
                                    <img src="@/assets/images/spkh4.jpg">
                                </div>
                                <div class="text_content">
                                    <strong class="title">Ứng dụng lưới và đám mây điện toán để tính sẵn các kịch bản lan truyền sóng thần có thể xảy ra tại khu vực biển Đông nhằm phục vụ công tác cảnh báo</strong>
                                    <div class="content">Chủ nhiệm: TS. Phạm Thanh Giang<br>Địa chỉ: P206, Nhà A3, Viện Công nghệ thông tin</div>
                                    <div class="d-flex justify-content-end">
                                        <b-button variant="info" class="no_border" size="sm">Xem Chi Tiết</b-button>
                                    </div>
                                </div>
                            </b-container>
                            <b-container class="vol_card d-flex justify-content-between sm-12">
                                <div class="card_left_img">
                                    <img src="@/assets/images/spkh5.jpg">
                                </div>
                                <div class="text_content">
                                    <strong class="title">Hệ thống dịch vụ giám sát môi trường đất, khí, nước qua mạng viễn thông Wimax</strong>
                                    <div class="content">Chủ nhiệm: PGS.TS. Thái Quang Minh<br>Địa chỉ: Phòng Công nghệ tự động hóa, Viện Công nghệ thông tin</div>
                                    <div class="d-flex justify-content-end">
                                        <b-button variant="info" class="no_border" size="sm">Xem Chi Tiết</b-button>
                                    </div>
                                </div>
                            </b-container>
                            <b-container class="vol_card d-flex justify-content-between sm-12">
                                <div class="card_left_img">
                                    <img src="@/assets/images/spkh3.jpg">
                                </div>
                                <div class="text_content">
                                    <strong class="title">Phần mềm quản lý trạm cân ô tô điện tử thông minh ES-WEIGHING</strong>
                                    <div class="content">Điạ chỉ: Phòng Kỹ thuật điều khiển và Hệ thống nhúng, Viện Công nghệ thông tin</div>
                                    <div class="d-flex justify-content-end">
                                        <b-button variant="info" class="no_border" size="sm">Xem Chi Tiết</b-button>
                                    </div>
                                </div>
                            </b-container>
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
  height: 120px;
  width: 120px;
  max-height: 120px;
  max-width: 120px;
  border: 1px solid #4f4e4e;

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
.text_content{
    color:#0b3b5b;
    padding-top:.25rem;
    padding-left:.25rem;
}
.vol_card{
    border:1px dotted #ccc;
    margin-bottom:1rem;
    padding-top:.2rem;
    padding-left:.2rem;
}
.title{
    font-size:.9rem;
    line-height:0.1px;
    padding-bottom:10px;
}
.content{
    font-size:.8rem;
}
.no_border{
        border:0;
    border-radius:0;
}
</style>
