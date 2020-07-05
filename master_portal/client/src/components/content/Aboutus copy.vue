<template>
    <div class="page-about">
        <div class="main-content">
            <ul>
                <li class="active-hr">
                    Giới Thiệu Chung
                </li>
                <li @click="jumptoMangLuoi">
                    Mạng Lưới Đào Tạo
                </li>
                <li @click="jumptoToChuc">
                    Cơ Cấu Tổ Chức
                </li>
                <li @click="jumptoHoiDong">
                    Hội Đồng Khoa Học & Đào Tạo
                </li>
            </ul>
        </div>
        <div class="mission">
            <strong class="title d-flex ">Giới Thiệu Chung</strong>
            <div class="d-flex justify-content-center tnmt mb-3">
                <img src="@/assets/images/tnmt.png">
            </div>

            <p class="misson-content d-flex">Học viện Khoa học và Công nghệ (Tên tiếng Anh: 
                Graduate University of Sciences and Technology, viết tắt: GUST) được thành lập theo 
                Quyết định số 1691/QĐ-TTg ngày 22 tháng 9 năm 2014 của Thủ tướng Chính phủ nước Cộng 
                hòa xã hội chủ nghĩa Việt Nam.Học viện Khoa học và Công nghệ là cơ sở giáo dục công 
                lập, đơn vị sự nghiệp trực thuộc Viện Hàn lâm Khoa học và Công nghệ Việt Nam; 
                có tư cách pháp nhân, con dấu và tài khoản riêng. Học viện ra đời là sự tiếp nối 
                truyền thống đào tạo sau đại học của các viện chuyên ngành thuộc Viện Hàn lâm KHCNVN
                 và được nâng lên một tầm cao mới.
            </p>
            <strong class="misson-content d-flex">
                Sứ mệnh của Học viện Khoa học và Công nghệ:
            </strong>
            <p class="misson-content d-flex">
                Học viện Khoa học và Công nghệ có sứ mệnh: Đào tạo nguồn nhân lực khoa học- 
                công nghệ chất lượng cao, đa ngành, đa lĩnh vực trình độ Thạc sỹ, Tiến sỹ, Sau Tiến sỹ;
                 Gắn kết chặt chẽ hoạt động đào tạo với nghiên cứu khoa học, nghiên cứu phát triển và
                  chuyển giao công nghệ của Viện Hàn lâm Khoa học và Công nghệ Việt Nam; Phát huy tối
                   đa nguồn lực to lớn của Viện Hàn lâm KHCNVN - cơ quan hàng đầu quốc gia về đội ngũ
                    các nhà khoa học trình độ cao, hệ thống cơ sở vật chất phòng thí nghiệm, các đề
                     tài- nhiệm vụ- đề án KCN, nguồn thông tin KHCN, mạng lưới hợp tác quốc tế, trực 
                     tiếp phục vụ công tác đào tạo.
            </p>
            <strong class="misson-content d-flex">
                Với chức năng:
            </strong>
            <p class="misson-content d-flex">
                - Đào tạo và cấp văn bằng thạc sỹ, tiến sỹ về khoa học tự nhiên và công nghệ theo quy định của pháp luật;<br>
                - Nghiên cứu khoa học; Bồi dưỡng chuyên môn về khoa học tự nhiên và công nghệ cho cán bộ, công chức, viên chức;<br>
                - Tư vấn về đào tạo, phát triển nguồn nhân lực khoa học công nghệ.<br>
                Hiện nay, Học viện đang thực hiện đào tạo 52 chuyên ngành tiến sĩ và 14 chuyên ngành thạc sĩ cho
                các ngành khoa học tự nhiên và công nghệ, được phân chia theo 12 Khoa chuyên ngành. Năm 2016, tổng
                nghiên cứu sinh đang đào tạo tại Học viện là 798 người.
                Dựa trên nguồn lực trang thiết bị, các phòng thí nghiệm và đội ngũ cán bộ khoa học giàu
                kinh nghiệm nghiên cứu và đào tạo, những thế mạnh và truyền thống hợp tác quốc tế với trên
                50 tổ chức khoa học công nghệ lớn trên thế giới của Viện Hàn lâm KHCNVN, Học viện phấn đấu sẽ trở
                thành cơ sở đào tạo sau đại học có uy tín trong nước và quốc tế với tiêu chí đào tạo nhân tài,
                nhân lực hoa học công nghệ trình độ cao cho đất nước, chú trọng xây dựng những chương trình hợp
                tác liên kết với nước ngoài nhằm nâng cao chất lượng đào tạo ngang tầm với Quốc tế,
                gắn kết đào tạo với nghiên cứu khoa học.
            </p>

            <strong class="misson-content d-flex">
                Đội ngũ giảng viên:
            </strong>
            <p class="misson-content d-flex">
                Đội ngũ giảng viên của Học viện là cán bộ khoa học của các đơn vị thuộc Viện Hàn lâm Khoa học Việt Nam, trong đó có: 53 Giáo sư, 218 Phó Giáo sư và 760 Tiến sĩ (tính đến tháng 12/2017).
            </p>

            <strong class="misson-content d-flex">
                Đào tạo Thạc sĩ:
            </strong>
            <p class="misson-content d-flex">
                Ngày 7/11/2016, theo quyết định số 5238/QĐ-BGDĐT của Bộ trưởng Bộ giáo dục và Đào tạo, Học viện KHCN được cấp phép tổ chức hoạt động đào tạo trình độ thạc sĩ với 14 mã ngành từ năm học 2016-2017. Các mã ngành đào tạo này thuộc 4 khoa: Khoa Toán học, Khoa Vật lý, Khoa Sinh thái tài nguyên và Môi trường, Khoa Hóa học. Học viện đang tiếp tục mở rộng công tác đào tạo thạc sĩ cho các khoa khác trong kế hoạch năm 2017.
            </p>

            <strong class="misson-content d-flex">
                Đào tạo Tiến sĩ
            </strong>
            <p class="misson-content d-flex">
                Ngày 7/7/2015, theo quyết định số 2348/QĐ-BGDĐT của Bộ trưởng Bộ giáo dục và Đào tạo, Học viện KHCNVN được cấp phép tổ chức hoạt động đào tạo trình độ tiến sĩ từ năm học 2015-2016 với 50 chuyên ngành đào tạo trình độ tiến sĩ của các viện nghiên cứu trực thuộc Viện Hàn lâm KHCNVN.
            </p>

            <strong class="misson-content d-flex">
                Chương trình sau tiến sĩ
            </strong>
            <p class="misson-content d-flex">Học viện KHCN được Viện Hàn lâm KHCNVN giao tổ chức xây dựng và triển khai thực hiện Chương trình sau tiến sĩ (Posdoc) từ năm 2017 nhằm tạo nguồn nhân lực khoa học và công nghệ trình độ sau tiến sĩ cho Viện Hàn lâm KHCNVN, đáp ứng nhu cầu phát triển theo Quy hoạch tổng thể phát triển đến năm 2020 và định hướng đến năm 2030 được thủ tướng Chính phủ phê duyệt (Quyết định số 2133/QĐ-TTg ngày 1/12/2011). 
                Chương trình Posdoc xây dựng mô hình theo thông lệ quốc tế, gắn kết đào tạo nguồn nhân lực trình độ sau tiến sỹ với hoạt động nghiên cứu khoa học nhằm khuyến khích, tạo động lực và đam mê nghiên cứu khoa học cho các nhà khoa học tham gia học tập và làm việc. Thông qua đó xây dựng nguồn nhân lực có kiến thức và kinh nghiệm để trở thành cán bộ nghiên cứu của Viện Hàn lâm KHCNVN.
            </p>

            <div class="space"></div>
            <strong class="title d-flex">Mạng Lưới Đào Tạo</strong>
            <div class="d-flex justify-content-center tnmt mb-3">
                <img src="@/assets/images/mangluoi.png">
            </div>

            <div class="space"></div>
            <strong class="title d-flex">Cơ Cấu Tổ Chức</strong>
            <div class="d-flex justify-content-center tnmt mb-3">
                <img src="@/assets/images/cocau.jpg">
            </div>

            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>

            <strong class="title d-flex">Hội Đồng Khoa Học & Đào Tạo</strong>
            <p class="misson-content d-flex">
                <b-table striped hover :fields="fields" :items="items"></b-table>
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
