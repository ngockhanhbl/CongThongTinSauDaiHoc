<template>
    <div class="page-about">
        <div class="mission">
            <strong class="title d-flex">Danh Sách Thạc Sĩ</strong>
            <p class="misson-content d-flex">
                <b-table striped hover bordered small :fields="fields" :items="items"></b-table>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        fields: [
        {
            key: 'stt',
            label: 'STT',
          },
          {
            key: 'detai',
            label: 'Tên Đề Tài',
          },
          {
            key: 'ncs',
            label: 'Nghiên Cứu Sinh',
          },
          {
            key: 'name',
            label: 'Người Hướng Dẫn',
          },
          {
            key: 'ngaybaove',
            label: 'Ngày Bảo Vệ',
          },
        ],
        items: [
          { stt : 1,detai:'Nghiên cứu điều chế và biến tính Graphene Oxide - tổng hợp nanocomposite từ Graphene Oxide và một số ứng dụng thực tiễn'
          ,ncs:'Trần Bội An', name: 'GS. TS. Nguyễn Đại Hưng', ngaybaove: 'Thứ năm, ngày 9 tháng bảy, năm 2020' },
          { stt : 2, detai:'Nghiên cứu hiệu ứng quang nhiệt của các hạt nano vàng trên các tế bào, mô và ứng dụng trong diệt tế bào ung thư',ncs:'Nguyễn Thị Mỹ An', name: 'GS. TS. Nguyễn Văn Tuyến', ngaybaove: 'Thứ ba, ngày 1 tháng ba, năm 2018' },
          { stt : 3, detai:'Nghiên cứu hóa học và hoạt tính sinh học của một số loài Garcinia mọc ở Việt Nam	', name: 'GS. TS. Nguyễn Quang Liêm',ncs:'Nguyễn Thị Kim An', ngaybaove: 'Thứ năm, ngày 7 tháng năm, năm 2016' },
          { stt : 4, detai:'Nghiên cứu thành phần hóa học và hoạt tính bảo vệ gan của cây bạch Liễm (Ampelopsis japonica Thunb. Makino)',name: 'GS. TS. Phan Ngọc Minh', ngaybaove: 'Thứ năm, ngày 12 tháng bảy, năm 2019' ,ncs:'Nguyễn Tân'},
          { stt : 5, detai:'Nghiên cứu quá trình phát sinh phôi soma Sâm langbian (Panax vietnamensis var. langbianensis)',name: 'PGS. TS. Chu Hoàng Hà', ngaybaove: 'Thứ năm, ngày 23 tháng bảy, năm 2018' ,ncs:'Nguyễn Ngọc Khanh'},
          { stt : 6, detai:'Bài toàn truyền và tán xạ sóng siêu âm trong các cấu trúc phân lớp có khuyết tật',name: 'GS.TS. Trần Đại Lâm', ngaybaove: 'Thứ năm, ngày 16 tháng bảy, năm 2017' ,ncs:'Nguyễn Văn Đạt'},
          { stt : 7, detai:'Nghiên cứu, đánh giá tài nguyên sinh khí hậu và thảm thực vật tỉnh Yên Bái phục vụ định hướng phát triển cây trồng nông lâm nghiệp và bảo tồn đa dạng sinh học',name: 'PGS. TS. Huỳnh Tấn Phát', ngaybaove: 'Thứ hai, ngày 3 tháng bảy, năm 2011' },
          { stt : 8, detai:'Tổng hợp hydrotalxit biến tính và chế tạo lớp phủ epoxy nanocompozit bảo vệ chống ăn mòn thép',name: 'TS. Nguyễn Diệu Trinh', ngaybaove: 'Thứ năm, ngày 12 tháng bảy, năm 2015',ncs:'Nguyễn Sinh An' },
          { stt : 9, detai:'Nghiên cứu ứng dụng công nghệ giải trình tự thế hệ mới trong chẩn đoán ung thư phổi biểu mô tuyến',name: 'PGS.TS.Nguyễn Văn Sinh', ngaybaove: 'Thứ sáu, ngày 10 tháng tám, năm 2012',ncs:'Trần Văn Hậu' },
        ]
      }
    },
    methods:{
        jumptoMangLuoi(){
            let limit = document.body.offsetHeight - window.innerHeight;
            window.scrollTo(0,limit/1.65);
        },
        jumptoToChuc(){
            let limit = document.body.offsetHeight - window.innerHeight;
            window.scrollTo(0,limit/1.32);
        },
        jumptoHoiDong(){
            let limit = document.body.offsetHeight - window.innerHeight;
            window.scrollTo(0,limit/1.12);
        },
    }
}
</script>

<style scoped>
*{
    color: #1c2a46;
}
.page-about{
    padding-top: 10vh;
}
.main-content{
    border-bottom: 1px solid rgba(28, 42, 70, 0.08);
    margin-top: 20px;
    padding-top: 20px;
    display: block;
}
.main-content ul{
    text-align: center;
    margin: 0;
    padding: 0;
    list-style: none;
}
ul{
    display: block;
}
ul li{
    margin-left: 15px;
    margin-right: 15px;
    display: inline-block;
    list-style-type: none;
    padding-bottom: 20px;
    display: inline-block;
    font-size: 14px;
}
ul li:hover{
    cursor: pointer;
}
ul li:not(first-child)hover{
    color: #40c4ff;
}
.active-hr{
    border-bottom: 3px solid #40c4ff;;
    color: #40c4ff;; 
}
.mission{
    padding-top:35px;
}
.title{
    font-size: 1.5rem;
    margin:0 15vw 5vh;
    color:#162138;   
}
.title_founder{
    font-size: 1.5rem;  
    /*height: 30vh; */
}
.title_founder strong{
    background-image: linear-gradient(#40c4ff, #20627f);
    padding: 15vh 38.5vw;
    
}
.misson-content{
    margin: 0 15vw;
    line-height: 1.75;
    letter-spacing: 0.7px;
    margin-bottom: 5vh;
}
.aboutteam{
    margin-top: 10vh;
}

.jointous{
    color: #40c4ff;
    border: 2px solid #40c4ff;
    cursor: pointer;
    border-radius: 300px;
}
.jointous:hover{
    color:#f8f9fa;
    background: #40c4ff;
}
.mygroup{
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;

}
.mygroup p {
    letter-spacing: 0.7px;
    line-height: 1.5;
}
.mygroup img{
    width: 40vw;
}

.figure{
    margin-left: 2vw;
    margin-right: 2vw;
    
}
.figure img{
    width: 220px;
    height: 250px;
    border-radius: 2%;
}


@media screen and (max-width: 400px) {
    .content-abouteam{
    padding: 0 10vw 0 0;
    }
    .mygroup{
    grid-template-columns: 1fr;
    margin:0 auto ;        
    }
    .mygroup img{
        width: 80vw;
    }
  .figure img{
    width: 150px;
    height: 150px;
    border-radius: 2%;
    }
    .leader{
        text-align: center;
    }
    
}
.space{
    height: 1rem;
    width: 100%
}
.mt18{
    margin-top: 18px;
}
.tnmt img{
    width: calc(100vw - 30vw);
    max-width: calc(100vw - 30vw);
}
</style>
