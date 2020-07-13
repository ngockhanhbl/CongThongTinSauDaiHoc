<template >
      <div>
            <b-container>
                  <b-row >
                        <b-col cols="8">
                              <div class="bg">
                                    ABC
                              </div>
                        </b-col>
                        <b-col>3 of 3</b-col>
                  </b-row>
            </b-container>
      </div>
</template>


<script>
import axios from 'axios'
export default {  
      data(){
            return{
                  info:null,
                  manifests:null,
                  BidPrices:'',
                  route:null,
                  title:[
                        {'value':'Số Đăng Kí','key':'soDangKy'},
                        {'value':'Phân Loại','key':'phanLoai'},
                        {'value':'Hoạt Chất','key':'hoatChat'},
                        {'value':'Nồng Độ/Hàm Lượng','key':'nongDo'},
                        {'value':'Dạng Bào Chế','key':'baoChe'},
                        {'value':'Quy Cách Đóng Gói','key':'dongGoi'},
                        {'value':'Hạn Sử Dụng','key':'tuoiTho'},
                        {'value':'Tiêu Chuẩn','key':'tieuChuan'},
                        {'value':'Công Ty Sản Xuất','key':'congTySx'},
                        {'value':'Công Ty Đăng Kí','key':'congTyDk'},
                  ],
                  fields_manifests:
                  [
                        {     key: 'ngayBaoCao',
                              label: 'Ngày Kê Khai',
                        },
                        {     key: 'doanhNghiepDk',
                              label: 'Đơn Vị Kê Khai',
                        },
                        {     key: 'dongGoi',
                              label: 'Quy Cách Đóng Gói',
                        },
                        {     key: 'giaBan',
                              label: 'Giá Kê Khai',
                        },
                        {     key: 'dvt',
                              label: 'ĐVT',
                        }
                  ],
                  fields_BidPrices:
                  [
                        {     key: 'ngayQuyetDinh',
                              label: 'Ngày Quyết Định',
                        },
                        {     key: 'ctyTrungThau',
                              label: 'Bệnh Viện/ Sở Y Tế',
                        },
                        {     key: 'dvt',
                              label: 'Đơn Vị Tính',
                        },
                        {     key: 'donGia',
                              label: 'Đơn Giá',
                        },
                        {     key: 'sl',
                              label: 'Số Lượng',
                        },
                        {     key: 'dongGoi',
                              label: 'Quy Cách Đóng Gói',
                        }
                  ],
            }
      },
      watch: {
            $route(to, from) {
            axios
                  .get('https://www.drugbank.vn/services/drugbank/api/public/thuoc/'+to.params.id)
                  .then(response => (this.info = response.data));
            }
      },
      mounted() {
            this.route = this.$route.params.id;
            this.GetDrugByID(this.route);
            this.GetManifests();
            this.GetBidPrices();
      },
      methods:{
            async GetDrugByID(params){
            await axios
                  .get('https://www.drugbank.vn/services/drugbank/api/public/thuoc/'+params)
                  .then(response => (this.info = response.data));
            },
            GetManifests(){
            axios
                  .get('https://www.drugbank.vn/services/drugbank/api/public/gia-ke-khai?size=10000&sdk='+this.route)
                  .then(response => (this.manifests = response.data));
            },
            GetBidPrices(){
            axios
                  .get('https://www.drugbank.vn/services/drugbank/api/public/gia-trung-thau?sdk='+this.route)
                  .then(response => (this.BidPrices = response.data));
            },
      },
      computed:{
            url(){
                  return `https://www.drugbank.vn/api/public/gridfs/${this.info.images}`
            },
      }
}
</script>
<style scoped>
.bg{
      background: #ccc;
}
</style>