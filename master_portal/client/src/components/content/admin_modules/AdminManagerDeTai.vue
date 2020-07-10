<template>
    <div>
            <div class="main_register m-auto ">
              <div class="d-flex justify-content-between pr-5 pt-4 ">
                <div class="pl-5 pt-3">Xin Chào Admin</div>
                <div class="pl-5 pt-3">
                    <b-button variant="success" v-b-modal.modal-detai class="text-white">
                      Thêm Đề Tài, Luận Án
                    </b-button>
                </div>
              </div>
                  <b-row class="px-5">
                    <b-col md="6" class="my-3">
                      <b-form-group label-cols-sm="3" label="Lọc" class="mb-0">
                        <b-input-group>
                          <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
                          <b-input-group-append>
                            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-form-group>
                    </b-col>

                    <b-col md="6" class="my-3">
                      <b-form-group label-cols-sm="3" label="Mỗi Trang" class="mb-0">
                        <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
                      </b-form-group>
                    </b-col>
                  </b-row>
                <div class="register">
                    <div class="p_1r mlr_1-5r" >
                      <b-table
                        small 
                        show-empty
                        bordered
                        striped
                        hover
                        outlined
                        :items="detai"
                        :fields="fields"
                        :current-page="currentPage"
                        :per-page="perPage"
                        :filter="filter"
                        @filtered="onFiltered"
                      >

                        <template slot="actions" slot-scope="row" >
                          <b-button size="sm" @click="DeTaiDetails(row.item, row.index, $event.target)">
                            <img src="@/assets/images/contract.svg" /> 
                          </b-button> 
                          <b-button size="sm" @click="DeleteDeTai(row.item, row.index, $event.target)">
                            <img src="@/assets/images/delete.svg" /> 
                          </b-button> 
                        </template>
                      </b-table>

                      <b-row>
                        <b-col md="6" class="my-1">
                          <b-pagination
                            v-model="currentPage"
                            :total-rows="totalRows"
                            :per-page="perPage"
                            class="my-0"
                          ></b-pagination>
                        </b-col>
                      </b-row>

                </div>
            </div>  
      </div>

      <b-modal id="modal-detai" size='lg' title="Tạo Thông Tin đề tài">

          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Tên Đề Tài</p>
            <span class="col-sm-9"><input type="text" v-model="tenDeTai" class="width-100 style_input"></span>
          </div>


          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Nghiên Cứu Sinh</p>
            <span class="col-sm-9"><input type="text" v-model="nghienCuuSinh" class="width-100 style_input"></span>
          </div>

          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Người Hướng Dẫn</p>
            <span class="col-sm-9"><input type="text" v-model="nguoiHuongDan" class="width-100 style_input"></span>
          </div>


          


          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Ngày Bảo Vệ</p>
            <span class="col-sm-9"><input type="datetime-local" v-model="ngayBaoVe" class="width-100 style_input"></span>
          </div>

        <template v-slot:modal-footer>
            <div class="w-100">
            <b-button
                variant="secondary"
                size="sm"
                class="float-left text-white"
                @click="resetForm"
            >
                Đóng
            </b-button>
            <b-button
                variant="warning"
                size="sm"
                class="float-right SendReqCreateJob text-white"
                @click="SendRequestCreateDeTai"
            >
                <img src="@/assets/images/send.svg" /> Tạo Đề Tài
            </b-button>
            </div>
        </template>
      </b-modal>



      <!-- DETAILS -->
      <b-modal id="modal-detaidetails" size='lg' title="Thông Tin đề tài Chi Tiết">
          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Tên Đề Tài</p>

            <span class="col-sm-9">
              <input type="text" v-model="infoModal.tenDeTai" class="width-100 style_input">
            </span>
          </div> 

          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Nghiên Cứu Sinh</p>
            <span class="col-sm-9"><input type="text" v-model="infoModal.nghienCuuSinh" class="width-100 style_input"></span>
          </div>

          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Người Hướng Dẫn</p>
            <span class="col-sm-9"><input type="text" v-model="infoModal.nguoiHuongDan" class="width-100 style_input"></span>
          </div>



          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Ngày Bảo Vệ</p>
            <span class="col-sm-9"><input type="datetime-local" v-model="ngayBaoVe" class="width-100 style_input"></span>
          </div>

        <template v-slot:modal-footer>
            <div class="w-100">
            <b-button
                variant="secondary"
                size="sm"
                class="float-left text-white"
                @click="resetModal"
            >
                Đóng
            </b-button>
            <b-button
                ref="btnShow"
                variant="warning"
                size="sm"
                class="float-right SendReqCreateJob text-white"
                @click="SendRequestUpdateDeTai"
            >
                <img src="@/assets/images/send.svg" /> Cập Nhập Đề Tài
            </b-button>
            </div>
        </template>
      </b-modal>

    </div>
</template>

<script>
import AdminService from '@/services/AdminService';
import moment from 'moment';
import firebase from 'firebase';
import {db, storage} from '../../firebaseInit'

  export default {
    data() {
      return {
        fields: [
          { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
          { key: 'tenDeTai', label: 'Tên Đề Tài'},
          { key: 'nghienCuuSinh', label: 'Nghiên Cứu Sinh', sortable: true, class: 'text-center'},
          { key: 'nguoiHuongDan', label: 'Người Hướng Dẫn', sortable: true, class: 'text-center'},
          { key: 'ngayBaoVe', label: 'Ngày Bảo Vệ',formatter: value => moment(value).locale('vi_VN').format('LLLL')},
          { key: 'actions', label: 'Hành động', class: 'action d-flex justify-content-center' },
        ],
        fields_cv: [
          { key: 'stt', label: 'STT', sortable: true, sortDirection: 'desc' },
          { key: 'tenDeTai', label: 'Họ Và Tên', sortable: true, class: 'text-center'},
          { key: 'phone', label: 'Điện Thoại'},
          { key: 'comments', label: 'Lời Nhắn'},
          { key: 'email', label: 'Email'},
          { key: 'updatedAt', label: 'File CV'}, //.format('MMMM Do YYYY, h:mm:ss a');
          { key: 'createdAt', label: 'Thời Gian'},
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        filter: null,
        detai:null,
        jobdetails:null,
        cv:null,
        infoModal: {
          ngayBaoVe: '',
          tenDeTai:'',
          nghienCuuSinh:'',
          nguoiHuongDan:''
        },
        modalCV:{
          tenDeTai:''
        },
        tenDeTai:'',
        nghienCuuSinh:'',
        nguoiHuongDan:'',
        ngayBaoVe:'',
        currentIndex:''
      }
    },
    async mounted() {
      this.detai = (await AdminService.getAllDeTai()).data
      this.totalRows = this.detai.length
    },
    methods: {
      async SendRequestUpdateDeTai(){
        if(!this.infoModal.tenDeTai){
          this.$toasted.show(`Vui lòng không bỏ trống Tên Đề Tài !!`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2000
          });
        }else if(!this.infoModal.nghienCuuSinh){
          this.$toasted.show(`Vui lòng không bỏ trống Nghiên Cứu Sinh  !!`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2000
          });
        }
        else{
          await AdminService.SendRequestUpdateDeTai({
            id:this.infoModal.id,
            tenDeTai:this.infoModal.tenDeTai,
            nghienCuuSinh:this.infoModal.nghienCuuSinh,
            nguoiHuongDan:this.infoModal.nguoiHuongDan,
            ngayBaoVe:this.infoModal.ngayBaoVe,
          })
            this.$toasted.show(`Đã cập nhật tin đề tài thành công !!`, { 
              theme: "bubble", 
              position: "bottom-right", 
              duration : 3500
          });

          this.detai[this.currentIndex].tenDeTai = this.infoModal.tenDeTai;
          this.detai[this.currentIndex].nghienCuuSinh = this.infoModal.nghienCuuSinh;
          this.detai[this.currentIndex].nguoiHuongDan = this.infoModal.nguoiHuongDan;
          this.detai[this.currentIndex].ngayBaoVe = this.infoModal.ngayBaoVe;

          // this.jobdetails.filter(x=>x.IdJob == this.infoModal.id).then(function(record){
          //   record.ngayBaoVe = this.infoModal.ngayBaoVe;
          // })
        

          this.resetModal()
        }
      },
      DeTaiDetails(item, index, button){
        this.infoModal.id =  item.id;
        this.currentIndex = index
        this.infoModal.tenDeTai = item.tenDeTai;
        this.infoModal.nghienCuuSinh = item.nghienCuuSinh;
        this.infoModal.nguoiHuongDan = item.nguoiHuongDan;
        this.infoModal.ngayBaoVe = item.ngayBaoVe;
        this.$root.$emit('bv::show::modal', 'modal-detaidetails', '#btnShow')
      },
      resetModal(){
        this.$root.$emit('bv::hide::modal', 'modal-detaidetails', '#btnShow')
      },
      async SendRequestCreateDeTai(){
        if(!this.tenDeTai){
          this.$toasted.show(`Vui lòng chọn khoa !!`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2000
          });
        }else if(!this.nghienCuuSinh){
          this.$toasted.show(`Vui lòng không bỏ trống vị trí  !!`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2000
          });
        }
        else{
          const response = await AdminService.SendRequestCreateDeTai({
            tenDeTai:this.tenDeTai,
            nghienCuuSinh:this.nghienCuuSinh,
            nguoiHuongDan:this.nguoiHuongDan,
            ngayBaoVe:this.ngayBaoVe,
          })

            this.$toasted.show(`Đã thêm đề tài thành công !!`, { 
              theme: "bubble", 
              position: "bottom-right", 
              duration : 3500
          });
          this.detai = (await AdminService.getAllDeTai()).data
          this.resetForm()
        }
      },
      async DeleteDeTai(item,index,button){
        try{
          const response = await AdminService.DeleteDeTai({
            id:item.id
          })
          if(response.status === 200){
            this.$toasted.show(`đã xóa đề tài thành công !!`, { 
                theme: "bubble", 
                position: "bottom-right", 
                duration : 2500
            });
            if (~index)
              this.detai.splice(index, 1)
          }
        }catch(err){
          this.$toasted.show(`${err}`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2500
          });
        }
      },
      
 
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      moment: function () {
        return moment();
      },
      resetForm(){
        this.tenDeTai = '';
        this.nghienCuuSinh = '';
        this.nguoiHuongDan = '';
        this.ngayBaoVe = '';
        this.$root.$emit('bv::hide::modal', 'modal-detai', '#btnShow')
      },
 
    },
    
    filters: {
      moment: function (date) {
        return moment(date).locale('de').format('LLLL');
      }
    },
  }
</script>

<style scoped>

*{
    font-size: 14px;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    color: rgba(0,0,0,.54);
}
.bg{
    background-repeat: no-repeat;
    background-size:cover
}
.main_register{
    max-width: 95vw;
    width: 100%;
    background:white;
    border-radius: 2px;
    background: white;
}
.p_1r{
    padding: 1rem;
}
.mlr_1-5r{
    margin: 0 1.5rem;
}
.hello{
  padding-left: 2rem;

}
.modify-btn{
  color:#365899;
}
.modify-btn:hover{
  text-decoration: underline;
  color: #273f6e;
}

.model_wrapper{
  align-items: center;
  border-bottom: 1px solid rgba(190,195,201);
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
}
.model_wrapper:first-child{
  border-top: 1px solid #aaa;
}
.model_wrapper:last-child{
  border-bottom: 1px solid #aaa;
}
.model_wrapper:hover{
  background: #f5f6f7;
  
}
.model_title{
  color: #333;
}
.orange-btn{
  background:#FF6F00;
  color:white;
  
}
.alert-error{
  color:red;
}
.style_input{
  border: 1px solid rgba(0,0,0,.54);
  border-radius: 2px;
  padding:0.25rem;
}
.width-100{
  width: 100%;
}
.title_editor{
  font-weight: bold;
  color:tomato;
}
.SendReqCreateJob img{
  height:1rem;
  width:1rem;
}
.action img{
  height:1.5rem;
  width:1.5rem;

}
.action button{
  background: none;
  border: none;
}
.modify_symbol{
  padding:.3rem .5rem;
  border: 1px solid aliceblue;
  border-radius: 3px;
  background: aliceblue;
  cursor: pointer;
}
    .ellipsis{
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 150px;
    }
</style>
 