<template>
    <div class="page-about">
     
        <div class="mission">
            <strong class="title d-flex ">CHUẨN ĐẦU RA THẠC SĨ</strong>
            <p>
                <strong class="title2">Quyết định ban hành chuẩn đầu ra các chuyên ngành đào tạo trình độ Tiến sĩ tại Học viện Khoa học và Công nghệ</strong>
            </p>
            <div class="misson-content d-flex">Học viện KHCN đã ban hành số 1121/QĐ-HVKHCN về việc ban hành chuẩn đầu ra các chuyên ngành trình độ Tiến sĩ cụ thể như sau: Xem Quyết định tại đây:
            </div>
            <div class="title3">
                <a href="https://drive.google.com/file/d/1QatJWDcBlwcwDlOvbKhjjUZLgRUykn0t/view">https://drive.google.com/file/d/1QatJWDcBlwcwDlOvbKhjjUZLgRUykn0t/view</a>
            </div>


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
            key: 'name',
            label: 'Họ Và Tên',
          },
          {
            key: 'role',
            label: 'Chức Vụ',
          }
        ],
        items: [
          { stt : 1, name: 'GS. TS. Nguyễn Đại Hưng', role: 'Giám đốc Học viện Khoa học và Công nghệ' },
          { stt : 2, name: 'GS. TS. Nguyễn Văn Tuyến', role: 'Chủ tịch Hội đồng Khoa Hóa học' },
          { stt : 3, name: 'GS. TS. Nguyễn Quang Liêm', role: 'Trưởng Khoa Toán học' },
          { stt : 4, name: 'GS. TS. Phan Ngọc Minh', role: 'Phó Giám đốc Học viện Khoa học và Công nghệ' },
          { stt : 5, name: 'PGS. TS. Chu Hoàng Hà', role: 'Trưởng phòng Thông Tin Và Viễn Thám' },
          { stt : 6, name: 'GS.TS. Trần Đại Lâm', role: 'Phó Viện trưởng Viện Kỹ thuật Nhiệt đới' },
          { stt : 7, name: 'PGS. TS. Huỳnh Tấn Phát', role: 'Trưởng phòng Công Nghệ Thông Tin' },
          { stt : 8, name: 'TS. Nguyễn Diệu Trinh', role: 'Trưởng phòng, Trưởng phòng, Học viện Khoa học và Công nghệ' },
          { stt : 9, name: 'PGS.TS.Nguyễn Văn Sinh', role: 'Trưởng Khoa Sinh thái và Tài nguyên Sinh vật' },
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
.title2{
    margin:0 15vw 5vh;
    color:#162138;   
}
.title3{
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
